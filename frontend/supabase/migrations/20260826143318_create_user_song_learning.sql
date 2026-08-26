create table public.user_song_learning (
  user_id uuid not null references auth.users(id) on delete cascade,
  song_slug text not null check (char_length(song_slug) between 1 and 100),
  progress_percent smallint not null default 0 check (progress_percent between 0 and 100),
  score_correct integer check (score_correct is null or score_correct >= 0),
  score_total integer check (score_total is null or score_total >= 0),
  homework_answer text not null default '',
  student_name text not null default '',
  teacher_name text not null default '',
  is_favorite boolean not null default false,
  started_at timestamptz not null default now(),
  last_opened_at timestamptz not null default now(),
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, song_slug),
  constraint valid_score check (score_correct is null or score_total is null or score_correct <= score_total)
);

create index user_song_learning_user_updated_idx
  on public.user_song_learning (user_id, updated_at desc);

alter table public.user_song_learning enable row level security;

revoke all on table public.user_song_learning from anon;
grant select, insert, update, delete on table public.user_song_learning to authenticated;

create policy "Users can read their own learning records"
on public.user_song_learning for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create their own learning records"
on public.user_song_learning for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own learning records"
on public.user_song_learning for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their own learning records"
on public.user_song_learning for delete to authenticated
using ((select auth.uid()) = user_id);
