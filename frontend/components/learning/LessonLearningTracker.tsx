"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { songCatalog, type SongMeta } from "@/data/songCatalog";
import { useActivityResults } from "@/hooks/useActivityResults";
import { createClient } from "@/lib/supabase/client";
import { useFavorites } from "./FavoritesProvider";

export default function LessonLearningTracker() {
  const pathname = usePathname();
  const { user } = useFavorites();
  const { totals } = useActivityResults();
  const slug = pathname.match(/^\/songs\/([^/]+)$/)?.[1] as SongMeta["slug"] | undefined;
  const isLesson = Boolean(slug && songCatalog.some((song) => song.slug === slug));

  useEffect(() => {
    if (!user || !slug || !isLesson) return;
    const supabase = createClient();
    const now = new Date().toISOString();
    supabase.from("user_song_learning").upsert({
      user_id: user.id,
      song_slug: slug,
      last_opened_at: now,
      updated_at: now,
    }, { onConflict: "user_id,song_slug" }).then();
  }, [isLesson, slug, user]);

  useEffect(() => {
    if (!user || !slug || !isLesson || !totals.total) return;
    const timeout = window.setTimeout(async () => {
      const progress = Math.round((totals.answered / totals.total) * 100);
      const now = new Date().toISOString();
      await createClient().from("user_song_learning").upsert({
        user_id: user.id,
        song_slug: slug,
        progress_percent: progress,
        score_correct: totals.correct,
        score_total: totals.total,
        completed_at: progress === 100 ? now : null,
        last_opened_at: now,
        updated_at: now,
      }, { onConflict: "user_id,song_slug" });
    }, 900);
    return () => window.clearTimeout(timeout);
  }, [isLesson, slug, totals.answered, totals.correct, totals.total, user]);

  return null;
}
