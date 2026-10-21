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
  insertWord: (key: string, sourceIndex: number, boundaryIndex: number) => void;
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

  const insertWord = (key: string, sourceIndex: number, boundaryIndex: number) => {
    setOrders((current) => {
      const item = current[key];
      if (!item || sourceIndex < 0 || sourceIndex >= item.words.length) return current;
      const targetIndex = boundaryIndex > sourceIndex ? boundaryIndex - 1 : boundaryIndex;
      if (targetIndex === sourceIndex) return current;
      const words = [...item.words];
      const [word] = words.splice(sourceIndex, 1);
      words.splice(Math.max(0, Math.min(targetIndex, words.length)), 0, word);
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
    <InlineWordOrderContext.Provider value={{ orders, initialize, swapWords, insertWord, reset }}>
      {children}
    </InlineWordOrderContext.Provider>
  );
}

export function useInlineWordOrder(lines: InlineWordOrderLine[]) {
  const context = useContext(InlineWordOrderContext);
  if (!context) throw new Error("useInlineWordOrder must be used inside InlineWordOrderProvider");

  const [selected, setSelected] = useState<Record<string, number | null>>({});
  const [dragged, setDragged] = useState<{ key: string; index: number } | null>(null);
  const [insertion, setInsertion] = useState<{ lineId: string; index: number } | null>(null);

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
    if (dragged?.key === key) context.insertWord(key, dragged.index, index);
    setDragged(null);
    setInsertion(null);
    setSelected({});
  };

  const handleReset = () => {
    const uniqueItems = Array.from(new Map(lines.filter((line) => line.answer).map((line) => [
      line.syncKey ?? line.id,
      { key: line.syncKey ?? line.id, answer: line.answer },
    ])).values());
    context.reset(uniqueItems);
    setSelected({});
    setDragged(null);
    setInsertion(null);
  };

  return {
    getState: (line: InlineWordOrderLine) => {
      const key = line.syncKey ?? line.id;
      return context.orders[key] ?? { words: line.answer ? splitWords(line.answer) : [], touched: false };
    },
    selected,
    dragged,
    insertion,
    handleDragOver: (lineId: string, index: number) => setInsertion((current) => current?.lineId === lineId && current.index === index ? current : { lineId, index }),
    handleDragLeave: () => setInsertion(null),
    handleSelect,
    handleDragStart: (key: string, index: number) => {
      setSelected({});
      setInsertion(null);
      setDragged({ key, index });
    },
    handleDragEnd: () => {
      setDragged(null);
      setInsertion(null);
    },
    handleDrop,
    handleReset,
  };
}
