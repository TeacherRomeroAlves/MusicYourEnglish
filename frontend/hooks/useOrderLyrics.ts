"use client";

import { useEffect, useState } from "react";
import type { OrderItem } from "@/components/activities/OrderLyricsActivity/types";
import { shuffleArray } from "@/lib/shuffleArray";

function createOrderState(items: OrderItem[], shouldShuffle = true) {
  const itemIds = items.map((item) => item.id);
  return { bankIds: shouldShuffle ? shuffleArray(itemIds) : itemIds, orderedIds: [] as string[] };
}

export function useOrderLyrics(items: OrderItem[]) {
  const [state, setState] = useState(() => createOrderState(items, false));

  useEffect(() => {
    const timeout = window.setTimeout(() => setState(createOrderState(items)), 0);
    return () => window.clearTimeout(timeout);
  }, [items]);

  const handleSelect = (itemId: string) => {
    setState((current) => {
      if (current.orderedIds.includes(itemId)) {
        return {
          bankIds: [...current.bankIds, itemId],
          orderedIds: current.orderedIds.filter((id) => id !== itemId),
        };
      }
      if (current.orderedIds.length >= items.length) return current;
      return {
        bankIds: current.bankIds.filter((id) => id !== itemId),
        orderedIds: [...current.orderedIds, itemId],
      };
    });
  };

  const itemMap = Object.fromEntries(items.map((item) => [item.id, item]));

  return {
    bankItems: state.bankIds.map((id) => itemMap[id]).filter(Boolean),
    orderedItems: state.orderedIds.map((id) => itemMap[id]).filter(Boolean),
    handleSelect,
    handleReset: () => setState(createOrderState(items, true)),
  };
}
