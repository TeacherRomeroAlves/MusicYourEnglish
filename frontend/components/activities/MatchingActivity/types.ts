export interface MatchingWord {
  word: string;
  meaning: string;
}

export interface MatchingActivityProps {
  step: string;
  title: string;
  description?: string;
  words: MatchingWord[];
}

export type MatchingFeedbackTone = "default" | "success" | "warning";

export interface MatchingFeedback {
  message: string;
  tone: MatchingFeedbackTone;
}

export interface MatchingResults {
  correct: number;
  placed: number;
  total: number;
}
