"use client";

import { useState } from "react";

export function useMatchingActivity() {
  const [draggedWord, setDraggedWord] = useState<string | null>(null);

  const handleDragStart = (word: string) => {
    setDraggedWord(word);
  };

  const handleDrop = (
    targetMeaning: string,
    answers: Record<string, string>,
    setAnswers: React.Dispatch<
      React.SetStateAction<Record<string, string>>
    >
  ) => {
    if (!draggedWord) return;

    setAnswers((prev) => ({
      ...prev,
      [targetMeaning]: draggedWord,
    }));

    setDraggedWord(null);
  };

  return {
    handleDragStart,
    handleDrop,
  };
}