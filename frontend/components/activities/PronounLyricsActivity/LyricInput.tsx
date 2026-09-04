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
        style={{ width: `calc(${Math.max(3, answer.length + 1)}ch + 1rem)` }}
        value={value}
        onChange={(event) => onChange(event.target.value)}
    />
    );
}
