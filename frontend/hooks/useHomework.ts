"use client";

import { useEffect, useState } from "react";
import { useActivityResults } from "@/hooks/useActivityResults";
import { getSongMetaByTitle } from "@/data/songCatalog";
import { createClient } from "@/lib/supabase/client";

interface HomeworkDraft {
  studentName: string;
  teacherName: string;
  writing: string;
}

const emptyDraft: HomeworkDraft = { studentName: "", teacherName: "", writing: "" };

export function countWords(value: string) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

export function useHomework(songTitle: string, prompt: string) {
  const [draft, setDraft] = useState<HomeworkDraft>(emptyDraft);
  const [isReady, setIsReady] = useState(false);
  const [cloudReady, setCloudReady] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState("");
  const { totals } = useActivityResults();
  const storageKey = `music-you-english:homework:${songTitle}`;

  useEffect(() => {
    let active = true;
    const timeout = window.setTimeout(async () => {
      try {
        const savedDraft = window.localStorage.getItem(storageKey);
        const parsedDraft = savedDraft ? JSON.parse(savedDraft) : emptyDraft;
        setDraft({
          studentName: parsedDraft.studentName ?? "",
          teacherName: parsedDraft.teacherName ?? parsedDraft.studentClass ?? "",
          writing: parsedDraft.writing ?? "",
        });
      } catch {
        setDraft(emptyDraft);
      }
      setIsReady(true);

      try {
        const supabase = createClient();
        const { data: authData } = await supabase.auth.getUser();
        if (!active || !authData.user) {
          if (active) setCloudReady(true);
          return;
        }
        setUserId(authData.user.id);
        const slug = getSongMetaByTitle(songTitle)?.slug;
        if (slug) {
          const { data } = await supabase
            .from("user_song_learning")
            .select("student_name, teacher_name, homework_answer")
            .eq("song_slug", slug)
            .maybeSingle();
          if (active && data && (data.student_name || data.teacher_name || data.homework_answer)) {
            setDraft({
              studentName: data.student_name ?? "",
              teacherName: data.teacher_name ?? "",
              writing: data.homework_answer ?? "",
            });
          }
        }
      } finally {
        if (active) setCloudReady(true);
      }
    }, 0);
    return () => {
      active = false;
      window.clearTimeout(timeout);
    };
  }, [songTitle, storageKey]);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(storageKey, JSON.stringify(draft));
  }, [draft, isReady, storageKey]);

  useEffect(() => {
    const slug = getSongMetaByTitle(songTitle)?.slug;
    if (!cloudReady || !userId || !slug) return;
    const timeout = window.setTimeout(async () => {
      setSaveStatus("Saving to your account…");
      const { error } = await createClient().from("user_song_learning").upsert({
        user_id: userId,
        song_slug: slug,
        student_name: draft.studentName,
        teacher_name: draft.teacherName,
        homework_answer: draft.writing,
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id,song_slug" });
      setSaveStatus(error ? "Could not save to your account." : "Saved to My Learning.");
    }, 850);
    return () => window.clearTimeout(timeout);
  }, [cloudReady, draft, songTitle, userId]);

  const updateField = (field: keyof HomeworkDraft, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const score = totals.total ? `${totals.correct} / ${totals.total}` : "Not checked yet";
  const shareText = `${songTitle} student report\nName: ${draft.studentName || "Not added"}\nTeacher Name: ${draft.teacherName || "Not added"}\nSong score: ${score}\n\n${prompt}\n\n${draft.writing}`;

  const handleSavePdf = () => window.print();
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: `${songTitle} student report`, text: shareText });
        return;
      }
      await navigator.clipboard.writeText(shareText);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      throw error;
    }
  };

  return {
    ...draft,
    wordCount: countWords(draft.writing),
    date: new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date()),
    score,
    saveStatus,
    updateField,
    handleSavePdf,
    handleShare,
  };
}
