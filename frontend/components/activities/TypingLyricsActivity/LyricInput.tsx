interface LyricInputProps {
    answer: string;
    value: string;
    onChange: (value: string) => void;
}

export default function LyricInput({ answer, value, onChange }: LyricInputProps) {
    return (
    <input
        className="lyric-input"
        type="text"
        maxLength={answer.length}
        aria-label={`Type the ${answer.length}-letter answer`}
        style={{ width: `calc(${Math.max(3, answer.length + 1)}ch + 1rem)` }}
        data-answer={answer}
        value={value}
        onChange={(event) => onChange(event.target.value)}
    />
    );
}
