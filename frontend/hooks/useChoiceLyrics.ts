"use client";

import { createContext, createElement, useContext, useEffect, useState, type ReactNode } from "react";
import type { ChoiceLine } from "@/components/activities/ChoiceLyricsActivity/types";
import { shuffleArray } from "@/lib/shuffleArray";

function createOptions(lyrics: ChoiceLine[], shouldShuffle = true) {
  return Object.fromEntries(
    lyrics.flatMap((line, lineIndex) =>
      line.items.map((item, itemIndex) => [
        `${lineIndex}-${itemIndex}`,
        shouldShuffle ? shuffleArray(item.options) : item.options,
      ]),
    ),
  );
}

interface ChoiceLyricsContextValue {
  sharedSelections: Record<string, string>;
  setSharedSelection: (key: string, option: string) => void;
  resetSharedSelections: (keys: string[]) => void;
}

const ChoiceLyricsContext = createContext<ChoiceLyricsContextValue | null>(null);

export function ChoiceLyricsProvider({ children }: { children: ReactNode }) {
  const [sharedSelections, setSharedSelections] = useState<Record<string, string>>({});

  const setSharedSelection = (key: string, option: string) => {
    setSharedSelections((current) => ({ ...current, [key]: option }));
  };

  const resetSharedSelections = (keys: string[]) => {
    setSharedSelections((current) => {
      const next = { ...current };
      keys.forEach((key) => delete next[key]);
      return next;
    });
  };

  return createElement(
    ChoiceLyricsContext.Provider,
    { value: { sharedSelections, setSharedSelection, resetSharedSelections } },
    children,
  );
}

export function useChoiceLyrics(lyrics: ChoiceLine[]) {
  const context = useContext(ChoiceLyricsContext);
  const [optionsBySlot, setOptionsBySlot] = useState(() => createOptions(lyrics, false));
  const [selections, setSelections] = useState<Record<string, string>>({});

  useEffect(() => {
    const timeout = window.setTimeout(() => setOptionsBySlot(createOptions(lyrics)), 0);
    return () => window.clearTimeout(timeout);
  }, [lyrics]);

  const getSelection = (slotId: string, syncKey?: string) =>
    syncKey && context ? context.sharedSelections[syncKey] : selections[slotId];

  const handleSelect = (slotId: string, option: string, syncKey?: string) => {
    if (syncKey && context) {
      context.setSharedSelection(syncKey, option);
      return;
    }
    setSelections((current) => ({ ...current, [slotId]: option }));
  };

  const handleReset = () => {
    setOptionsBySlot(createOptions(lyrics, true));
    setSelections({});
    context?.resetSharedSelections(
      lyrics.flatMap((line) => line.items.flatMap((item) => item.syncKey ?? [])),
    );
  };

  return { optionsBySlot, selections, getSelection, handleSelect, handleReset };
}
