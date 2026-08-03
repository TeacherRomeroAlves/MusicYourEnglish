export interface LyricWord {
    word: string;
}

export interface LyricLine {
    before: string;
    answer: string;
    after: string;
}

export interface LyricsWordActivityProps {
    step: string;
    title: string;
    description?: string;

    words: LyricWord[];
    lyrics: LyricLine[];
}