export interface UnscrambleLyricsLine {
  before: string;
  answer: string;
  scrambled: string;
  after: string;
  syncKey?: string;
}

export interface UnscrambleLyricsActivityProps {
  step: string;
  title: string;
  description?: string;
  lyrics: UnscrambleLyricsLine[];
}
