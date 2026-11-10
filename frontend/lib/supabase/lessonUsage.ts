import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";
import { getSupabaseConfig } from "./config";

function createUsageClient() {
  const { url, publishableKey } = getSupabaseConfig();
  return createClient<Database>(url, publishableKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}

const completed = new Set<string>();
const pending = new Set<string>();

export async function recordLessonUse(pathname: string) {
  if (process.env.NODE_ENV !== "production" || !/^\/songs\/[a-z0-9-]+\/?$/.test(pathname)) return;
  const key = `lesson-use:v1:${pathname.replace(/\/$/, "")}`;
  if (completed.has(key) || pending.has(key)) return;
  pending.add(key);

  try {
    const storage = window.sessionStorage;
    const saved = storage.getItem(key);
    if (saved === "recorded") {
      completed.add(key);
      return;
    }

    const token = saved ?? crypto.randomUUID();
    storage.setItem(key, token);
    const { error } = await createUsageClient().from("lesson_usage_events").insert({ token });
    // A retry after an interrupted response may already have been counted.
    if (!error || error.code === "23505") {
      completed.add(key);
      storage.setItem(key, "recorded");
    }
  } catch {
    // Usage tracking must not interfere with the lesson.
  } finally {
    pending.delete(key);
  }
}

export async function getLessonUseTotal(signal: AbortSignal) {
  const { data, error } = await createUsageClient()
    .from("lesson_usage_total")
    .select("total")
    .abortSignal(signal)
    .single();
  return error ? null : data.total;
}
