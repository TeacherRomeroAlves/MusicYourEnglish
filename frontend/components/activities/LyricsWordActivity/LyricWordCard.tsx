interface LyricWordCardProps {
    word: string;
}

export default function LyricWordCard({ word, }: LyricWordCardProps) {
    return (
        <button
            className="lyric-word-card"
            draggable
            type="button"
        >
            {word}
        </button>
    );
}