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
        data-answer={answer}
        value={value}
        onChange={(event) => onChange(event.target.value)}
    />
    );
}
