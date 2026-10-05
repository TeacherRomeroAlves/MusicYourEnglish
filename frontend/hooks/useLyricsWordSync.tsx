"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface SyncedWord {
  word: string;
  owner: string;
}

interface LyricsWordSyncContextValue {
  values: Record<string, SyncedWord | undefined>;
  setValue: (key: string, word: string, owner: string) => void;
  clearValue: (key: string, owner: string) => void;
}

const LyricsWordSyncContext = createContext<LyricsWordSyncContextValue | null>(null);

export function LyricsWordSyncProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<Record<string, SyncedWord | undefined>>({});

  const value = useMemo<LyricsWordSyncContextValue>(() => ({
    values,
    setValue: (key, word, owner) => {
      setValues((current) => ({ ...current, [key]: { word, owner } }));
    },
    clearValue: (key, owner) => {
      setValues((current) => {
        if (current[key]?.owner !== owner) return current;
        const next = { ...current };
        delete next[key];
        return next;
      });
    },
  }), [values]);

  return <LyricsWordSyncContext.Provider value={value}>{children}</LyricsWordSyncContext.Provider>;
}

export function useLyricsWordSync() {
  return useContext(LyricsWordSyncContext);
}
