"use client";

import { useEffect, useState } from "react";
import type { ChoiceLine } from "@/components/activities/ChoiceLyricsActivity/types";
import { shuffleArray } from "@/lib/shuffleArray";

function createOptions(lyrics: ChoiceLine[], shouldShuffle = true) {
  return Object.fromEntries(
    lyrics.flatMap((line, lineIndex) =>
      line.items.map((item, itemIndex) => [
        `${lineIndex}-${itemIndex}`,
        shouldShuffle ? shuffleArray(item.options) : item.options,
      ]),
    ),
  );
}

export function useChoiceLyrics(lyrics: ChoiceLine[]) {
  const [optionsBySlot, setOptionsBySlot] = useState(() => createOptions(lyrics, false));
  const [selections, setSelections] = useState<Record<string, string>>({});

  useEffect(() => {
    const timeout = window.setTimeout(() => setOptionsBySlot(createOptions(lyrics)), 0);
    return () => window.clearTimeout(timeout);
  }, [lyrics]);

  const handleSelect = (slotId: string, option: string) => {
    setSelections((current) => ({ ...current, [slotId]: option }));
  };

  const handleReset = () => {
    setOptionsBySlot(createOptions(lyrics, true));
    setSelections({});
  };

  return { optionsBySlot, selections, handleSelect, handleReset };
}
