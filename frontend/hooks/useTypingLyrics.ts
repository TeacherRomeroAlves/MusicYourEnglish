"use client";

import { useState } from "react";

export function useTypingLyrics() {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string, maxLength: number) => {
    setValues((current) => ({ ...current, [key]: value.slice(0, maxLength) }));
  };

  return { values, handleChange, handleReset: () => setValues({}) };
}
