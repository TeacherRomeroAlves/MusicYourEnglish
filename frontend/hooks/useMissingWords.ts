"use client";

import { useState } from "react";

export function useMissingWords(maximumSelections: number) {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const handleToggle = (word: string) => {
    setSelectedWords((current) => {
      if (current.includes(word)) return current.filter((item) => item !== word);
      if (current.length >= maximumSelections) return current;
      return [...current, word];
    });
  };

  const handleReset = () => setSelectedWords([]);

  return { selectedWords, handleToggle, handleReset };
}
