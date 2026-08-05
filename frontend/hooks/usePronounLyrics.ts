"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { PronounLyricLine } from "@/components/activities/PronounLyricsActivity/types";
import {
  clearSynchronizedInputs,
  emptySynchronizedInputs,
  getSynchronizedInputs,
  setSynchronizedInput,
  subscribeToSynchronizedInputs,
} from "@/lib/synchronizedInputStore";

export const buildPronounInputId = (lineIndex: number, partIndex: number) =>
  `${lineIndex}-${partIndex}`;

export function usePronounLyrics(lyrics: PronounLyricLine[]) {
  const [localValues, setLocalValues] = useState<Record<string, string>>({});
  const sharedValues = useSyncExternalStore(
    subscribeToSynchronizedInputs,
    getSynchronizedInputs,
    () => emptySynchronizedInputs,
  );

  useEffect(() => setLocalValues({}), [lyrics]);

  const handleChange = (inputId: string, value: string, maxLength: number, syncKey?: string) => {
    const nextValue = value.slice(0, maxLength);
    if (syncKey) {
      setSynchronizedInput(syncKey, nextValue);
    } else {
      setLocalValues((current) => ({ ...current, [inputId]: nextValue }));
    }
  };

  const handleReset = () => {
    setLocalValues({});
    clearSynchronizedInputs(
      lyrics.flatMap((line) => line.parts.flatMap((part) => part.syncKey ?? [])),
    );
  };

  const getValue = (inputId: string, syncKey?: string) =>
    syncKey ? sharedValues[syncKey] ?? "" : localValues[inputId] ?? "";

  const answers = lyrics.flatMap((line, lineIndex) =>
    line.parts.flatMap((part, partIndex) => part.answer ? [{
      inputId: buildPronounInputId(lineIndex, partIndex),
      answer: part.answer,
      syncKey: part.syncKey,
    }] : []),
  );
  const results = {
    correct: answers.filter(({ inputId, answer, syncKey }) =>
      getValue(inputId, syncKey).trim().toLowerCase() === answer.toLowerCase()).length,
    answered: answers.filter(({ inputId, syncKey }) => Boolean(getValue(inputId, syncKey).trim())).length,
    total: answers.length,
  };

  return { getValue, results, handleChange, handleReset };
}
