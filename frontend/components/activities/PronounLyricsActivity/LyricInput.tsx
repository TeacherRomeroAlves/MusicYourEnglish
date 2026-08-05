interface LyricInputProps {
    answer: string;
    maxLength?: number;
    syncKey?: string;
    ariaLabel?: string;
    value: string;
    onChange: (value: string) => void;
}

export default function LyricInput({
    answer,
    maxLength,
    syncKey,
    ariaLabel,
    value,
    onChange,
}: LyricInputProps) {
    return (
    <input
        className="lyric-input"
        type="text"
        maxLength={maxLength}
        data-answer={answer}
        data-sync-key={syncKey}
        aria-label={ariaLabel}
        value={value}
        onChange={(event) => onChange(event.target.value)}
    />
    );
}
