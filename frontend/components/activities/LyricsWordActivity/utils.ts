import type { LyricWordLine } from "./types";

export function buildLyricsWordSlotId(lineIndex: number, partIndex: number): string {
  return `lyrics-word-slot-${lineIndex}-${partIndex}`;
}

export function getLyricsWordSlotIds(lyrics: LyricWordLine[]): string[] {
  return lyrics.flatMap((line, lineIndex) =>
    line.parts.flatMap((part, partIndex) =>
      part.answer ? [buildLyricsWordSlotId(lineIndex, partIndex)] : [],
    ),
  );
}
