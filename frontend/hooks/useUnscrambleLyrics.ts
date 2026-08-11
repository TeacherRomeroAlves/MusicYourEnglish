"use client";

import { useState } from "react";

export function useUnscrambleLyrics() {
  const [values, setValues] = useState<Record<number, string>>({});

  const handleChange = (index: number, value: string, maxLength: number) => {
    setValues((current) => ({ ...current, [index]: value.slice(0, maxLength) }));
  };

  return {
    values,
    handleChange,
    handleReset: () => setValues({}),
  };
}
