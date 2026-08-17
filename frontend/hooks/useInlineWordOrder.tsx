"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { InlineWordOrderLine } from "@/components/activities/InlineWordOrderActivity/types";
import { shuffleArray } from "@/lib/shuffleArray";

interface OrderState {
  words: string[];
  touched: boolean;
}

interface InlineWordOrderContextValue {
  orders: Record<string, OrderState>;
  initialize: (key: string, answer: string) => void;
  swapWords: (key: string, firstIndex: number, secondIndex: number) => void;
  reset: (keys: Array<{ key: string; answer: string }>) => void;
}

const InlineWordOrderContext = createContext<InlineWordOrderContextValue | null>(null);

function splitWords(answer: string) {
  return answer.trim().split(/\s+/);
}

function scrambleWords(answer: string) {
  const words = splitWords(answer);
  if (words.length < 2) return words;

  let scrambled = shuffleArray(words);
  if (scrambled.every((word, index) => word === words[index])) {
    scrambled = [...words.slice(1), words[0]];
  }
  return scrambled;
}

export function InlineWordOrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Record<string, OrderState>>({});

  const initialize = (key: string, answer: string) => {
    setOrders((current) => current[key] ? current : {
      ...current,
      [key]: { words: scrambleWords(answer), touched: false },
    });
  };

  const swapWords = (key: string, firstIndex: number, secondIndex: number) => {
    if (firstIndex === secondIndex) return;
    setOrders((current) => {
      const item = current[key];
      if (!item) return current;
      const words = [...item.words];
      [words[firstIndex], words[secondIndex]] = [words[secondIndex], words[firstIndex]];
      return { ...current, [key]: { words, touched: true } };
    });
  };

  const reset = (items: Array<{ key: string; answer: string }>) => {
    setOrders((current) => {
      const next = { ...current };
      items.forEach(({ key, answer }) => {
        next[key] = { words: scrambleWords(answer), touched: false };
      });
      return next;
    });
  };

  return (
    <InlineWordOrderContext.Provider value={{ orders, initialize, swapWords, reset }}>
      {children}
    </InlineWordOrderContext.Provider>
  );
}

export function useInlineWordOrder(lines: InlineWordOrderLine[]) {
  const context = useContext(InlineWordOrderContext);
  if (!context) throw new Error("useInlineWordOrder must be used inside InlineWordOrderProvider");

  const [selected, setSelected] = useState<Record<string, number | null>>({});
  const [dragged, setDragged] = useState<{ key: string; index: number } | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      lines.filter((line) => line.answer).forEach((line) => context.initialize(line.syncKey ?? line.id, line.answer));
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [context, lines]);

  const handleSelect = (key: string, index: number) => {
    const firstIndex = selected[key];
    if (firstIndex === null || firstIndex === undefined) {
      setSelected((current) => ({ ...current, [key]: index }));
      return;
    }
    context.swapWords(key, firstIndex, index);
    setSelected((current) => ({ ...current, [key]: null }));
  };

  const handleDrop = (key: string, index: number) => {
    if (dragged?.key === key) context.swapWords(key, dragged.index, index);
    setDragged(null);
  };

  const handleReset = () => {
    const uniqueItems = Array.from(new Map(lines.filter((line) => line.answer).map((line) => [
      line.syncKey ?? line.id,
      { key: line.syncKey ?? line.id, answer: line.answer },
    ])).values());
    context.reset(uniqueItems);
    setSelected({});
    setDragged(null);
  };

  return {
    getState: (line: InlineWordOrderLine) => {
      const key = line.syncKey ?? line.id;
      return context.orders[key] ?? { words: line.answer ? splitWords(line.answer) : [], touched: false };
    },
    selected,
    dragged,
    handleSelect,
    handleDragStart: (key: string, index: number) => setDragged({ key, index }),
    handleDragEnd: () => setDragged(null),
    handleDrop,
    handleReset,
  };
}
