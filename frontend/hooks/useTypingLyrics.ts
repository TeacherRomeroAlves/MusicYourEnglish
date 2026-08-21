"use client";

import { useState } from "react";

export function useTypingLyrics() {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string, maxLength: number, allowedLetters?: string[]) => {
    const allowed = allowedLetters?.map((letter) => letter.toLowerCase());
    const filteredValue = allowed
      ? [...value].filter((character) => allowed.includes(character.toLowerCase())).join("")
      : value;
    setValues((current) => ({ ...current, [key]: filteredValue.slice(0, maxLength) }));
  };

  return { values, handleChange, handleReset: () => setValues({}) };
}
