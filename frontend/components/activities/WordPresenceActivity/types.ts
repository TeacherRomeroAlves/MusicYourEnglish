export interface WordPresenceOption {
  id: string;
  word: string;
  isPresent: boolean;
}

export interface WordPresenceLine {
  before: string;
  option?: WordPresenceOption;
  after?: string;
}

export interface WordPresenceActivityProps {
  step: string;
  title: string;
  description: string;
  lyrics: WordPresenceLine[];
  maximumSelections: number;
}
