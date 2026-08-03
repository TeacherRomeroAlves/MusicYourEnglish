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