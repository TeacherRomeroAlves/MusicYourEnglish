interface ChoiceButtonProps {
    option: string;
}

export default function ChoiceButton({ option, }: ChoiceButtonProps) {
    return (
        <button className="choice-btn" type="button">
        {option}
        </button>
    );
}