"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { SongMeta } from "@/data/songCatalog";
import { createClient } from "@/lib/supabase/client";
import { useFavorites } from "./FavoritesProvider";

export default function RestartLessonButton({ slug }: { slug: SongMeta["slug"] }) {
  const { user } = useFavorites();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const restart = async () => {
    if (!user || !window.confirm("Restart this lesson? Its saved progress and score will return to zero. Your favorite and homework will stay saved.")) return;
    setLoading(true);
    const { error } = await createClient().from("user_song_learning").update({
      progress_percent: 0,
      score_correct: null,
      score_total: null,
      completed_at: null,
      updated_at: new Date().toISOString(),
    }).eq("song_slug", slug);
    setLoading(false);
    if (!error) router.refresh();
  };

  return <button className="learning-restart" type="button" disabled={loading} onClick={restart}>{loading ? "Restarting…" : "Restart lesson"}</button>;
}
