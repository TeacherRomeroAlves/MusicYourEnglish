export interface IconItem {
    id: string;
    symbol: string;
    ariaLabel: string;
    dark?: boolean;
}
  
export interface LyricPart {
    before: string;
    match?: string;
    after: string;
}

export interface LyricLine {
    parts: LyricPart[];
}

export interface IconLyricsActivityProps {
    step: string;
    title: string;
    description?: string;
  
    icons: IconItem[];
    lyrics: LyricLine[];
}