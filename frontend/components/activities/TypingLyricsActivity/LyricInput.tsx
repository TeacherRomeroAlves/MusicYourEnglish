interface LyricInputProps {
    answer: string;
}

export default function LyricInput({ answer, }: LyricInputProps) {
    return (
    <input
        className="lyric-input"
        type="text"
        maxLength={answer.length}
        data-answer={answer}
    />
    );
}