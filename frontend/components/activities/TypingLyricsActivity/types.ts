export interface TypingBlank {
    before: string;
    answer: string;
    after: string;
}

export interface TypingLyricsActivityProps {
    step: string;
    title: string;
    description?: string;
    lyrics: TypingBlank[];
}