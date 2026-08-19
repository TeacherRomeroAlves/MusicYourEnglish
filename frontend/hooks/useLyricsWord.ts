"use client";

import { useEffect, useState } from "react";
import { appendItemToBank, findFirstEmptySlot, removeItemFromBank, removeItemFromPlacements } from "@/lib/dragDropBank";
import { shuffleArray } from "@/lib/shuffleArray";
import type { LyricWordLine, LyricWordOption } from "@/components/activities/LyricsWordActivity/types";
import { buildLyricsWordSlotId, getLyricsWordSlotIds } from "@/components/activities/LyricsWordActivity/utils";

function createInitialState(words: LyricWordOption[], lyrics: LyricWordLine[], shouldShuffle = true) {
  const tokens = words.map((item, index) => ({ id: `word-${index}`, word: item.word }));
  const bankTokenIds = tokens.map((token) => token.id);
  return {
    bankTokenIds: shouldShuffle ? shuffleArray(bankTokenIds) : bankTokenIds,
    placements: Object.fromEntries(
      getLyricsWordSlotIds(lyrics).map((slotId) => [slotId, null]),
    ) as Record<string, string | null>,
  };
}

export function useLyricsWord(words: LyricWordOption[], lyrics: LyricWordLine[]) {
  const tokens = words.map((item, index) => ({ id: `word-${index}`, word: item.word }));
  const tokenMap = Object.fromEntries(tokens.map((token) => [token.id, token]));
  const orderedSlotIds = getLyricsWordSlotIds(lyrics);
  const [state, setState] = useState(() => createInitialState(words, lyrics, false));
  const [draggedTokenId, setDraggedTokenId] = useState<string | null>(null);
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => setState(createInitialState(words, lyrics)), 0);
    return () => window.clearTimeout(timeout);
  }, [words, lyrics]);

  const handleDragStart = (tokenId: string) => {
    setDraggedTokenId(tokenId);
  };

  const handleDragEnd = () => {
    setDraggedTokenId(null);
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
    if (!draggedTokenId) {
      return;
    }

    setState((previousState) => {
      let nextBankTokenIds = removeItemFromBank(previousState.bankTokenIds, draggedTokenId);
      let nextPlacements = removeItemFromPlacements(previousState.placements, draggedTokenId);
      const replacedTokenId = nextPlacements[slotId];

      if (replacedTokenId && replacedTokenId !== draggedTokenId) {
        nextBankTokenIds = appendItemToBank(nextBankTokenIds, replacedTokenId);
      }

      nextPlacements = {
        ...nextPlacements,
        [slotId]: draggedTokenId,
      };

      return {
        bankTokenIds: nextBankTokenIds,
        placements: nextPlacements,
      };
    });

    handleDragEnd();
  };

  const handleAutoPlace = (tokenId: string) => {
    setState((previousState) => {
      const nextSlotId = findFirstEmptySlot(previousState.placements, orderedSlotIds);
      if (!nextSlotId) return previousState;

      return {
        bankTokenIds: removeItemFromBank(previousState.bankTokenIds, tokenId),
        placements: {
          ...removeItemFromPlacements(previousState.placements, tokenId),
          [nextSlotId]: tokenId,
        },
      };
    });
    setDraggedTokenId(null);
    setActiveSlotId(null);
  };

  const handleDropOnBank = () => {
    if (!draggedTokenId) {
      return;
    }

    setState((previousState) => ({
      bankTokenIds: appendItemToBank(
        removeItemFromBank(previousState.bankTokenIds, draggedTokenId),
        draggedTokenId,
      ),
      placements: removeItemFromPlacements(previousState.placements, draggedTokenId),
    }));

    handleDragEnd();
  };

  const handleReturnToBank = (tokenId: string) => {
    setState((previousState) => ({
      bankTokenIds: appendItemToBank(
        removeItemFromBank(previousState.bankTokenIds, tokenId),
        tokenId,
      ),
      placements: removeItemFromPlacements(previousState.placements, tokenId),
    }));
    setDraggedTokenId(null);
    setActiveSlotId(null);
  };

  const handleReset = () => {
    setState(createInitialState(words, lyrics, true));
    setDraggedTokenId(null);
    setActiveSlotId(null);
  };

  return {
    bankItems: state.bankTokenIds.map((tokenId) => tokenMap[tokenId]).filter(Boolean),
    placements: state.placements,
    draggedTokenId,
    activeSlotId,
    buildSlotId: buildLyricsWordSlotId,
    getPlacedItem: (slotId: string) => {
      const tokenId = state.placements[slotId];
      return tokenId ? tokenMap[tokenId] : null;
    },
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
