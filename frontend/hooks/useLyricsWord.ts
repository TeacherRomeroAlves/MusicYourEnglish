"use client";

import { useEffect, useState } from "react";
import { appendItemToBank, findFirstEmptySlot, removeItemFromBank, removeItemFromPlacements } from "@/lib/dragDropBank";
import { shuffleArray } from "@/lib/shuffleArray";
import type { LyricWordLine, LyricWordOption } from "@/components/activities/LyricsWordActivity/types";
import { buildLyricsWordSlotId, getLyricsWordSlotIds } from "@/components/activities/LyricsWordActivity/utils";

function createInitialState(words: LyricWordOption[], lyrics: LyricWordLine[], shouldShuffle = true) {
  const bankWords = words.map((item) => item.word);
  return {
    bankWords: shouldShuffle ? shuffleArray(bankWords) : bankWords,
    placements: Object.fromEntries(
      getLyricsWordSlotIds(lyrics).map((slotId) => [slotId, null]),
    ) as Record<string, string | null>,
  };
}

export function useLyricsWord(words: LyricWordOption[], lyrics: LyricWordLine[]) {
  const orderedSlotIds = getLyricsWordSlotIds(lyrics);
  const [state, setState] = useState(() => createInitialState(words, lyrics, false));
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => setState(createInitialState(words, lyrics)), 0);
    return () => window.clearTimeout(timeout);
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

  const handleAutoPlace = (word: string) => {
    setState((previousState) => {
      const nextSlotId = findFirstEmptySlot(previousState.placements, orderedSlotIds);
      if (!nextSlotId) return previousState;

      return {
        bankWords: removeItemFromBank(previousState.bankWords, word),
        placements: {
          ...removeItemFromPlacements(previousState.placements, word),
          [nextSlotId]: word,
        },
      };
    });
    setDraggedWord(null);
    setActiveSlotId(null);
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

  const handleReturnToBank = (word: string) => {
    setState((previousState) => ({
      bankWords: appendItemToBank(
        removeItemFromBank(previousState.bankWords, word),
        word,
      ),
      placements: removeItemFromPlacements(previousState.placements, word),
    }));
    setDraggedWord(null);
    setActiveSlotId(null);
  };

  const handleReset = () => {
    setState(createInitialState(words, lyrics, true));
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
    handleAutoPlace,
    handleDropOnBank,
    handleReturnToBank,
    handleReset,
  };
}
