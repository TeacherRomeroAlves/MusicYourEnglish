"use client";

import { createContext, createElement, useContext, useEffect, useState, type ReactNode } from "react";
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

interface IconLyricsContextValue {
  sharedPlacements: Record<string, string>;
  setSharedPlacement: (key: string, iconId: string | null) => void;
  resetSharedPlacements: (keys: string[]) => void;
}

const IconLyricsContext = createContext<IconLyricsContextValue | null>(null);

export function IconLyricsProvider({ children }: { children: ReactNode }) {
  const [sharedPlacements, setSharedPlacements] = useState<Record<string, string>>({});

  const setSharedPlacement = (key: string, iconId: string | null) => {
    setSharedPlacements((current) => {
      const next = { ...current };
      if (iconId) next[key] = iconId;
      else delete next[key];
      return next;
    });
  };

  const resetSharedPlacements = (keys: string[]) => {
    setSharedPlacements((current) => {
      const next = { ...current };
      keys.forEach((key) => delete next[key]);
      return next;
    });
  };

  return createElement(
    IconLyricsContext.Provider,
    { value: { sharedPlacements, setSharedPlacement, resetSharedPlacements } },
    children,
  );
}

export function useIconLyrics(icons: IconItem[], lyrics: LyricLine[]) {
  const context = useContext(IconLyricsContext);
  const orderedSlotIds = getIconSlotIds(lyrics);
  const [state, setState] = useState(() => createInitialState(icons, lyrics, false));
  const [draggedIconId, setDraggedIconId] = useState<string | null>(null);
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);
  const syncKeyBySlot = Object.fromEntries(
    lyrics.flatMap((line, lineIndex) =>
      line.parts.flatMap((part, partIndex) =>
        part.match && part.syncKey ? [[buildIconSlotId(lineIndex, partIndex), part.syncKey]] : [],
      ),
    ),
  );
  const placements = Object.fromEntries(
    orderedSlotIds.map((slotId) => [
      slotId,
      syncKeyBySlot[slotId] && context
        ? context.sharedPlacements[syncKeyBySlot[slotId]] ?? null
        : state.placements[slotId],
    ]),
  ) as Record<string, string | null>;

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

    const syncKey = syncKeyBySlot[slotId];
    if (syncKey && context) context.setSharedPlacement(syncKey, draggedIconId);

    setState((previousState) => {
      let nextBankIconIds = removeItemFromBank(previousState.bankIconIds, draggedIconId);
      let nextPlacements = removeItemFromPlacements(previousState.placements, draggedIconId);
      const replacedIconId = placements[slotId];

      if (replacedIconId && replacedIconId !== draggedIconId) {
        nextBankIconIds = appendItemToBank(nextBankIconIds, replacedIconId);
      }

      if (!syncKey || !context) {
        nextPlacements = { ...nextPlacements, [slotId]: draggedIconId };
      }

      return {
        bankIconIds: nextBankIconIds,
        placements: nextPlacements,
      };
    });

    handleDragEnd();
  };

  const handleAutoPlace = (iconId: string) => {
    const nextSlotId = findFirstEmptySlot(placements, orderedSlotIds);
    if (!nextSlotId) return;
    const syncKey = syncKeyBySlot[nextSlotId];
    if (syncKey && context) context.setSharedPlacement(syncKey, iconId);

    setState((previousState) => {
      return {
        bankIconIds: removeItemFromBank(previousState.bankIconIds, iconId),
        placements: !syncKey || !context
          ? { ...removeItemFromPlacements(previousState.placements, iconId), [nextSlotId]: iconId }
          : removeItemFromPlacements(previousState.placements, iconId),
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

  const handleReturnToBank = (slotId: string, iconId: string) => {
    const syncKey = syncKeyBySlot[slotId];
    if (syncKey && context) context.setSharedPlacement(syncKey, null);
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
    context?.resetSharedPlacements(Object.values(syncKeyBySlot));
    setState(createInitialState(icons, lyrics, true));
    setDraggedIconId(null);
    setActiveSlotId(null);
  };

  const iconMap = Object.fromEntries(icons.map((icon) => [icon.id, icon]));

  return {
    bankIcons: state.bankIconIds
      .filter((iconId) => !Object.values(placements).includes(iconId))
      .map((iconId) => iconMap[iconId])
      .filter(Boolean),
    placements,
    draggedIconId,
    activeSlotId,
    buildSlotId: buildIconSlotId,
    getPlacedIcon: (slotId: string) => {
      const iconId = placements[slotId];
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
