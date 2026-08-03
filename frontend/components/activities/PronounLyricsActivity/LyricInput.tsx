interface LyricInputProps {
    answer: string;
    maxLength?: number;
    syncKey?: string;
    ariaLabel?: string;
}

export default function LyricInput({
    answer,
    maxLength,
    syncKey,
    ariaLabel,
}: LyricInputProps) {
    return (
    <input
        className="lyric-input"
        type="text"
        maxLength={maxLength}
        data-answer={answer}
        data-sync-key={syncKey}
        aria-label={ariaLabel}
    />
    );
}