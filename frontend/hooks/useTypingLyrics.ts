"use client";

import { useEffect, useState } from "react";
import type { TypingBlank } from "@/components/activities/TypingLyricsActivity/types";

export function useTypingLyrics(lyrics: TypingBlank[]) {
  const [values, setValues] = useState<Record<number, string>>({});

  useEffect(() => setValues({}), [lyrics]);

  const handleChange = (index: number, value: string, maxLength: number) => {
    setValues((current) => ({ ...current, [index]: value.slice(0, maxLength) }));
  };

  return { values, handleChange, handleReset: () => setValues({}) };
}
