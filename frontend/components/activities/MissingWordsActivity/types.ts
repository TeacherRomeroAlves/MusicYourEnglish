export interface MissingWordOption {
  word: string;
  isMissing: boolean;
}

export interface MissingWordsActivityProps {
  step: string;
  title: string;
  description: string;
  options: MissingWordOption[];
  maximumSelections: number;
}
