"use client";

import { useEffect, useState } from "react";
import { shuffleArray } from "@/lib/shuffleArray";
import type { MissingWordOption } from "@/components/activities/MissingWordsActivity/types";

export function useMissingWords(options: MissingWordOption[], maximumSelections: number) {
  const [shuffledOptions, setShuffledOptions] = useState(options);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShuffledOptions(shuffleArray(options)), 0);
    return () => window.clearTimeout(timeout);
  }, [options]);

  const handleToggle = (word: string) => {
    setSelectedWords((current) => {
      if (current.includes(word)) return current.filter((item) => item !== word);
      if (current.length >= maximumSelections) return current;
      return [...current, word];
    });
  };

  const handleReset = () => {
    setSelectedWords([]);
    setShuffledOptions(shuffleArray(options));
  };

  return { shuffledOptions, selectedWords, handleToggle, handleReset };
}
