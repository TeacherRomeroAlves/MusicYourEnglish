import type { LyricLine } from "./types";

export function buildIconSlotId(lineIndex: number, partIndex: number): string {
  return `icon-slot-${lineIndex}-${partIndex}`;
}

export function getIconSlotIds(lyrics: LyricLine[]): string[] {
  return lyrics.flatMap((line, lineIndex) =>
    line.parts.flatMap((part, partIndex) =>
      part.match ? [buildIconSlotId(lineIndex, partIndex)] : [],
    ),
  );
}
