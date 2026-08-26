"use client";

import { useState } from "react";

export function usePartialWordLyrics() {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string, maxLength: number) => {
    const lettersOnly = value.replace(/[^a-z]/gi, "");
    setValues((current) => ({ ...current, [key]: lettersOnly.slice(0, maxLength) }));
  };

  return {
    values,
    handleChange,
    handleReset: () => setValues({}),
  };
}
