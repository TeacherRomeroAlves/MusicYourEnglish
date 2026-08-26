export interface PartialWordLyricsLine {
  before: string;
  prefix?: string;
  answer?: string;
  suffix?: string;
  after: string;
  syncKey?: string;
}

export interface PartialWordLyricsActivityProps {
  step: string;
  title: string;
  description?: string;
  lyrics: PartialWordLyricsLine[];
}
