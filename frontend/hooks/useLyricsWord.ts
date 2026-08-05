"use client";

import { useEffect, useState } from "react";
import { appendItemToBank, removeItemFromBank, removeItemFromPlacements } from "@/lib/dragDropBank";
import { shuffleArray } from "@/lib/shuffleArray";
import type { LyricWordLine, LyricWordOption } from "@/components/activities/LyricsWordActivity/types";
import { buildLyricsWordSlotId, getLyricsWordSlotIds } from "@/components/activities/LyricsWordActivity/utils";

function createInitialState(words: LyricWordOption[], lyrics: LyricWordLine[]) {
  return {
    bankWords: shuffleArray(words.map((item) => item.word)),
    placements: Object.fromEntries(getLyricsWordSlotIds(lyrics).map((slotId) => [slotId, null])),
  };
}

export function useLyricsWord(words: LyricWordOption[], lyrics: LyricWordLine[]) {
  const [state, setState] = useState(() => createInitialState(words, lyrics));
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);

  useEffect(() => {
    setState(createInitialState(words, lyrics));
    setDraggedWord(null);
    setActiveSlotId(null);
  }, [words, lyrics]);

  const handleDragStart = (word: string) => {
    setDraggedWord(word);
  };

  const handleDragEnd = () => {
    setDraggedWord(null);
    setActiveSlotId(null);
  };

  const handleSlotDragOver = (slotId: string) => {
    setActiveSlotId(slotId);
  };

  const handleSlotDragLeave = (slotId: string) => {
    if (activeSlotId === slotId) {
      setActiveSlotId(null);
    }
  };

  const handleDropOnSlot = (slotId: string) => {
    if (!draggedWord) {
      return;
    }

    setState((previousState) => {
      let nextBankWords = removeItemFromBank(previousState.bankWords, draggedWord);
      let nextPlacements = removeItemFromPlacements(previousState.placements, draggedWord);
      const replacedWord = nextPlacements[slotId];

      if (replacedWord && replacedWord !== draggedWord) {
        nextBankWords = appendItemToBank(nextBankWords, replacedWord);
      }

      nextPlacements = {
        ...nextPlacements,
        [slotId]: draggedWord,
      };

      return {
        bankWords: nextBankWords,
        placements: nextPlacements,
      };
    });

    handleDragEnd();
  };

  const handleDropOnBank = () => {
    if (!draggedWord) {
      return;
    }

    setState((previousState) => ({
      bankWords: appendItemToBank(
        removeItemFromBank(previousState.bankWords, draggedWord),
        draggedWord,
      ),
      placements: removeItemFromPlacements(previousState.placements, draggedWord),
    }));

    handleDragEnd();
  };

  const handleReset = () => {
    setState(createInitialState(words, lyrics));
    setDraggedWord(null);
    setActiveSlotId(null);
  };

  return {
    bankWords: state.bankWords,
    placements: state.placements,
    draggedWord,
    activeSlotId,
    buildSlotId: buildLyricsWordSlotId,
    getPlacedWord: (slotId: string) => state.placements[slotId],
    handleDragStart,
    handleDragEnd,
    handleSlotDragOver,
    handleSlotDragLeave,
    handleDropOnSlot,
    handleDropOnBank,
    handleReset,
  };
}
