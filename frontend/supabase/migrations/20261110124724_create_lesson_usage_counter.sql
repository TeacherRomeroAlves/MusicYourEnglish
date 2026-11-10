create schema if not exists lesson_usage_private;
revoke all on schema lesson_usage_private from public, anon, authenticated;

create table public.lesson_usage_events (
  token uuid primary key
);
alter table public.lesson_usage_events enable row level security;
revoke all on public.lesson_usage_events from public, anon, authenticated;
grant insert (token) on public.lesson_usage_events to anon, authenticated;
create policy "Record anonymous lesson use" on public.lesson_usage_events
  for insert to anon, authenticated with check (true);

create table public.lesson_usage_total (
  singleton boolean primary key default true check (singleton),
  total bigint not null default 0 check (total >= 0)
);
insert into public.lesson_usage_total (singleton) values (true);
alter table public.lesson_usage_total enable row level security;
revoke all on public.lesson_usage_total from public, anon, authenticated;
grant select on public.lesson_usage_total to anon, authenticated;
create policy "Read aggregate lesson use" on public.lesson_usage_total
  for select to anon, authenticated using (true);

-- Only the insert trigger can increment the public total.
create function lesson_usage_private.increment_total()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public.lesson_usage_total set total = total + 1 where singleton;
  return new;
end;
$$;
revoke all on function lesson_usage_private.increment_total() from public, anon, authenticated;
create trigger increment_lesson_usage_total
  after insert on public.lesson_usage_events
  for each row execute function lesson_usage_private.increment_total();
