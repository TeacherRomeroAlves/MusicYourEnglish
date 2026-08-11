"use client";

import { useEffect, useState } from "react";
import { useActivityResults } from "@/hooks/useActivityResults";

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
  const { totals } = useActivityResults();
  const storageKey = `music-you-english:homework:${songTitle}`;

  useEffect(() => {
    const timeout = window.setTimeout(() => {
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
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [storageKey]);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(storageKey, JSON.stringify(draft));
  }, [draft, isReady, storageKey]);

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
    updateField,
    handleSavePdf,
    handleShare,
  };
}
