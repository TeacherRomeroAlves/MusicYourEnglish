export interface TypingBlank {
    before: string;
    answer: string;
    after: string;
    syncKey?: string;
    continuePreviousLine?: boolean;
}

export interface TypingLyricsActivityProps {
    step: string;
    title: string;
    description?: string;
    lyrics: TypingBlank[];
    wordBank?: string[];
    wordBankLabel?: string;
    allowedLetters?: string[];
}
