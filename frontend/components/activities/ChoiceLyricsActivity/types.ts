export interface ChoiceItem {
    before: string;
    answer: string;
    after: string;
    options: string[];
    syncKey?: string;
}

export interface ChoiceLine {
    items: ChoiceItem[];
}

export interface ChoiceLyricsActivityProps {
    step: string;
    title: string;
    description?: string;

    lyrics: ChoiceLine[];
}
