"use client";

import { createContext, createElement, useContext, useState, type ReactNode } from "react";

interface PartialWordLyricsContextValue {
  sharedValues: Record<string, string>;
  setSharedValue: (key: string, value: string) => void;
  resetSharedValues: (keys: string[]) => void;
}

const PartialWordLyricsContext = createContext<PartialWordLyricsContextValue | null>(null);

export function PartialWordLyricsProvider({ children }: { children: ReactNode }) {
  const [sharedValues, setSharedValues] = useState<Record<string, string>>({});

  const setSharedValue = (key: string, value: string) => {
    setSharedValues((current) => ({ ...current, [key]: value }));
  };

  const resetSharedValues = (keys: string[]) => {
    setSharedValues((current) => {
      const next = { ...current };
      keys.forEach((key) => delete next[key]);
      return next;
    });
  };

  return createElement(
    PartialWordLyricsContext.Provider,
    { value: { sharedValues, setSharedValue, resetSharedValues } },
    children,
  );
}

export function usePartialWordLyrics() {
  const context = useContext(PartialWordLyricsContext);
  const [values, setValues] = useState<Record<string, string>>({});

  const getValue = (key: string, syncKey?: string) =>
    syncKey && context ? context.sharedValues[syncKey] ?? "" : values[key] ?? "";

  const handleChange = (key: string, value: string, maxLength: number, syncKey?: string) => {
    const lettersOnly = value.replace(/[^a-z]/gi, "");
    const nextValue = lettersOnly.slice(0, maxLength);
    if (syncKey && context) {
      context.setSharedValue(syncKey, nextValue);
      return;
    }
    setValues((current) => ({ ...current, [key]: nextValue }));
  };

  const handleReset = (syncKeys: string[] = []) => {
    setValues({});
    context?.resetSharedValues(syncKeys);
  };

  return {
    values,
    getValue,
    handleChange,
    handleReset,
  };
}
