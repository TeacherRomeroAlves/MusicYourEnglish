"use client";

import { useEffect, useState } from "react";
import type { OrderItem } from "@/components/activities/OrderLyricsActivity/types";
import { shuffleArray } from "@/lib/shuffleArray";

function createOrderState(items: OrderItem[], shouldShuffle = true) {
  const itemIds = items.map((item) => item.id);
  return {
    orderedIds: shouldShuffle ? shuffleArray(itemIds) : itemIds,
    selectedId: null as string | null,
    draggedId: null as string | null,
    insertionIndex: null as number | null,
  };
}

export function useOrderLyrics(items: OrderItem[]) {
  const [state, setState] = useState(() => createOrderState(items, false));

  useEffect(() => {
    const timeout = window.setTimeout(() => setState(createOrderState(items)), 0);
    return () => window.clearTimeout(timeout);
  }, [items]);

  const handleSelect = (itemId: string) => {
    setState((current) => {
      if (!current.selectedId) return { ...current, selectedId: itemId };
      if (current.selectedId === itemId) return { ...current, selectedId: null };
      const firstIndex = current.orderedIds.indexOf(current.selectedId);
      const secondIndex = current.orderedIds.indexOf(itemId);
      const orderedIds = [...current.orderedIds];
      [orderedIds[firstIndex], orderedIds[secondIndex]] = [orderedIds[secondIndex], orderedIds[firstIndex]];
      return {
        ...current,
        orderedIds,
        selectedId: null,
      };
    });
  };

  const handleDragStart = (itemId: string) => setState((current) => ({ ...current, draggedId: itemId, selectedId: null, insertionIndex: null }));
  const handleDrop = (insertionIndex: number) => {
    setState((current) => {
      if (!current.draggedId) return current;
      const sourceIndex = current.orderedIds.indexOf(current.draggedId);
      const orderedIds = current.orderedIds.filter((id) => id !== current.draggedId);
      // The boundary is measured before removing the dragged line.
      const targetIndex = insertionIndex > sourceIndex ? insertionIndex - 1 : insertionIndex;
      orderedIds.splice(Math.max(0, Math.min(targetIndex, orderedIds.length)), 0, current.draggedId);
      return { ...current, orderedIds, draggedId: null, selectedId: null, insertionIndex: null };
    });
  };

  const itemMap = Object.fromEntries(items.map((item) => [item.id, item]));

  return {
    orderedItems: state.orderedIds.map((id) => itemMap[id]).filter(Boolean),
    selectedId: state.selectedId,
    draggedId: state.draggedId,
    insertionIndex: state.insertionIndex,
    handleDragOver: (insertionIndex: number | null) => setState((current) => current.insertionIndex === insertionIndex ? current : { ...current, insertionIndex }),
    handleSelect,
    handleDragStart,
    handleDrop,
    handleDragEnd: () => setState((current) => ({ ...current, draggedId: null, insertionIndex: null })),
    handleReset: () => setState(createOrderState(items, true)),
  };
}
