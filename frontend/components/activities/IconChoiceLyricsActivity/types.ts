import type { ChoiceLine } from "@/components/activities/ChoiceLyricsActivity/types";
import type { IconItem, LyricLine } from "@/components/activities/IconLyricsActivity/types";

export interface IconChoiceLyricsActivityProps {
  step: string;
  title: string;
  description: string;
  icons: IconItem[];
  iconLyrics: LyricLine[];
  choiceLyrics: ChoiceLine[];
}
