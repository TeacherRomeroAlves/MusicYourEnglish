"use client";

import { useEffect, useState } from "react";
import { appendItemToBank, findFirstEmptySlot, removeItemFromBank, removeItemFromPlacements } from "@/lib/dragDropBank";
import { shuffleArray } from "@/lib/shuffleArray";
import type { IconItem, LyricLine } from "@/components/activities/IconLyricsActivity/types";
import { buildIconSlotId, getIconSlotIds } from "@/components/activities/IconLyricsActivity/utils";

function createInitialState(icons: IconItem[], lyrics: LyricLine[], shouldShuffle = true) {
  const iconIds = icons.map((icon) => icon.id);
  return {
    bankIconIds: shouldShuffle ? shuffleArray(iconIds) : iconIds,
    placements: Object.fromEntries(
      getIconSlotIds(lyrics).map((slotId) => [slotId, null]),
    ) as Record<string, string | null>,
  };
}

export function useIconLyrics(icons: IconItem[], lyrics: LyricLine[]) {
  const orderedSlotIds = getIconSlotIds(lyrics);
  const [state, setState] = useState(() => createInitialState(icons, lyrics, false));
  const [draggedIconId, setDraggedIconId] = useState<string | null>(null);
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => setState(createInitialState(icons, lyrics)), 0);
    return () => window.clearTimeout(timeout);
  }, [icons, lyrics]);

  const handleDragStart = (iconId: string) => {
    setDraggedIconId(iconId);
  };

  const handleDragEnd = () => {
    setDraggedIconId(null);
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
    if (!draggedIconId) {
      return;
    }

    setState((previousState) => {
      let nextBankIconIds = removeItemFromBank(previousState.bankIconIds, draggedIconId);
      let nextPlacements = removeItemFromPlacements(previousState.placements, draggedIconId);
      const replacedIconId = nextPlacements[slotId];

      if (replacedIconId && replacedIconId !== draggedIconId) {
        nextBankIconIds = appendItemToBank(nextBankIconIds, replacedIconId);
      }

      nextPlacements = {
        ...nextPlacements,
        [slotId]: draggedIconId,
      };

      return {
        bankIconIds: nextBankIconIds,
        placements: nextPlacements,
      };
    });

    handleDragEnd();
  };

  const handleAutoPlace = (iconId: string) => {
    setState((previousState) => {
      const nextSlotId = findFirstEmptySlot(previousState.placements, orderedSlotIds);
      if (!nextSlotId) return previousState;

      return {
        bankIconIds: removeItemFromBank(previousState.bankIconIds, iconId),
        placements: {
          ...removeItemFromPlacements(previousState.placements, iconId),
          [nextSlotId]: iconId,
        },
      };
    });
    setDraggedIconId(null);
    setActiveSlotId(null);
  };

  const handleDropOnBank = () => {
    if (!draggedIconId) {
      return;
    }

    setState((previousState) => ({
      bankIconIds: appendItemToBank(
        removeItemFromBank(previousState.bankIconIds, draggedIconId),
        draggedIconId,
      ),
      placements: removeItemFromPlacements(previousState.placements, draggedIconId),
    }));

    handleDragEnd();
  };

  const handleReturnToBank = (iconId: string) => {
    setState((previousState) => ({
      bankIconIds: appendItemToBank(
        removeItemFromBank(previousState.bankIconIds, iconId),
        iconId,
      ),
      placements: removeItemFromPlacements(previousState.placements, iconId),
    }));
    setDraggedIconId(null);
    setActiveSlotId(null);
  };

  const handleReset = () => {
    setState(createInitialState(icons, lyrics, true));
    setDraggedIconId(null);
    setActiveSlotId(null);
  };

  const iconMap = Object.fromEntries(icons.map((icon) => [icon.id, icon]));

  return {
    bankIcons: state.bankIconIds.map((iconId) => iconMap[iconId]).filter(Boolean),
    placements: state.placements,
    draggedIconId,
    activeSlotId,
    buildSlotId: buildIconSlotId,
    getPlacedIcon: (slotId: string) => {
      const iconId = state.placements[slotId];
      return iconId ? iconMap[iconId] : null;
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
