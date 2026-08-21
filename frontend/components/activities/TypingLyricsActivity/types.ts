export interface TypingBlank {
    before: string;
    answer: string;
    after: string;
    syncKey?: string;
}

export interface TypingLyricsActivityProps {
    step: string;
    title: string;
    description?: string;
    lyrics: TypingBlank[];
    wordBank?: string[];
    wordBankLabel?: string;
}
