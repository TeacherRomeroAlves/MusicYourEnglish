"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { songCatalog, type SongMeta } from "@/data/songCatalog";
import { useActivityResults } from "@/hooks/useActivityResults";
import { createClient } from "@/lib/supabase/client";
import { useFavorites } from "./FavoritesProvider";

export default function LessonLearningTracker() {
  const pathname = usePathname();
  const { user } = useFavorites();
  const { totals } = useActivityResults();
  const [readyRecordKey, setReadyRecordKey] = useState("");
  const savedProgress = useRef(0);
  const savedCompletedAt = useRef<string | null>(null);
  const slug = pathname.match(/^\/songs\/([^/]+)$/)?.[1] as SongMeta["slug"] | undefined;
  const isLesson = Boolean(slug && songCatalog.some((song) => song.slug === slug));

  useEffect(() => {
    if (!user || !slug || !isLesson) return;
    let active = true;
    const loadRecord = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("user_song_learning")
        .select("progress_percent, completed_at")
        .eq("song_slug", slug)
        .maybeSingle();
      if (!active) return;
      savedProgress.current = data?.progress_percent ?? 0;
      savedCompletedAt.current = data?.completed_at ?? null;
      const now = new Date().toISOString();
      await supabase.from("user_song_learning").upsert({
        user_id: user.id,
        song_slug: slug,
        last_opened_at: now,
        updated_at: now,
      }, { onConflict: "user_id,song_slug" });
      if (active) setReadyRecordKey(`${user.id}:${slug}`);
    };
    loadRecord();
    return () => { active = false; };
  }, [isLesson, slug, user]);

  useEffect(() => {
    if (!user || !slug || !isLesson || readyRecordKey !== `${user.id}:${slug}` || !totals.total || !totals.answered) return;
    const timeout = window.setTimeout(async () => {
      const progress = Math.round((totals.answered / totals.total) * 100);
      if (progress < savedProgress.current) return;
      const now = new Date().toISOString();
      const completedAt = savedCompletedAt.current ?? (progress === 100 ? now : null);
      const { error } = await createClient().from("user_song_learning").upsert({
        user_id: user.id,
        song_slug: slug,
        progress_percent: progress,
        score_correct: totals.correct,
        score_total: totals.total,
        completed_at: completedAt,
        last_opened_at: now,
        updated_at: now,
      }, { onConflict: "user_id,song_slug" });
      if (!error) {
        savedProgress.current = progress;
        savedCompletedAt.current = completedAt;
      }
    }, 900);
    return () => window.clearTimeout(timeout);
  }, [isLesson, readyRecordKey, slug, totals.answered, totals.correct, totals.total, user]);

  return null;
}
