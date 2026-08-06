"use client";

import { useEffect, useState } from "react";
import { appendItemToBank, removeItemFromBank, removeItemFromPlacements } from "@/lib/dragDropBank";
import { shuffleArray } from "@/lib/shuffleArray";
import type { IconItem, LyricLine } from "@/components/activities/IconLyricsActivity/types";
import { buildIconSlotId, getIconSlotIds } from "@/components/activities/IconLyricsActivity/utils";

function createInitialState(
  icons: IconItem[],
  lyrics: LyricLine[],
  shuffle = true,
) {
  return {
    bankIconIds: shuffle
      ? shuffleArray(icons.map((icon) => icon.id))
      : icons.map((icon) => icon.id),
    placements: Object.fromEntries(
      getIconSlotIds(lyrics).map((slotId) => [slotId, null]),
    ),
  };
}

export function useIconLyrics(icons: IconItem[], lyrics: LyricLine[]) {
  const [state, setState] = useState(() => createInitialState(icons, lyrics, false));
  const [draggedIconId, setDraggedIconId] = useState<string | null>(null);
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);

  useEffect(() => {
    setState(createInitialState(icons, lyrics, true));
    setDraggedIconId(null);
    setActiveSlotId(null);
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
    handleDropOnBank,
    handleReset,
  };
}
