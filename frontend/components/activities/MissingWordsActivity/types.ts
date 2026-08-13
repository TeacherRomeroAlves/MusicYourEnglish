export interface MissingWordOption {
  word: string;
  isMissing: boolean;
}

export interface MissingWordsLyricPart {
  before: string;
  option: MissingWordOption;
  after: string;
}

export interface MissingWordsLyricLine {
  parts: MissingWordsLyricPart[];
}

export interface MissingWordsActivityProps {
  step: string;
  title: string;
  description: string;
  lyrics: MissingWordsLyricLine[];
  maximumSelections: number;
}
