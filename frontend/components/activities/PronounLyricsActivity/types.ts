export interface PronounPart {
    before: string;
    answer?: string;
    after: string;
    maxLength?: number;
    syncKey?: string;
}

export interface PronounLyricLine {
    parts: PronounPart[];
    dividerAfter?: boolean;
}

export interface PronounLyricsActivityProps {
    step: string;
    title: string;
    description?: string;

    pronouns: string[];

    lyrics: PronounLyricLine[];
}