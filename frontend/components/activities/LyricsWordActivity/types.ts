export interface LyricWordPart {
    before: string;
    answer?: string;
    after: string;
}

export interface LyricWordLine {
    parts: LyricWordPart[];
    dividerAfter?: boolean;
}
  
export interface LyricsWordActivityProps {
    step: string;
    title: string;
    description?: string;

    words: {
    word: string;
    }[];

    lyrics: LyricWordLine[];
}