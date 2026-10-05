export interface LyricWordPart {
    before: string;
    answer?: string;
    after: string;
    syncKey?: string;
    includeInScore?: boolean;
}

export interface LyricWordLine {
  parts: LyricWordPart[];
  dividerAfter?: boolean;
}

export interface LyricWordOption {
  word: string;
}

export interface LyricsWordActivityProps {
  step: string;
  title: string;
  description?: string;
  words: LyricWordOption[];
  lyrics: LyricWordLine[];
}
