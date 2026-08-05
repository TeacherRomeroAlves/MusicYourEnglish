interface ChoiceButtonProps {
    option: string;
    selected: boolean;
    onClick: () => void;
}

export default function ChoiceButton({ option, selected, onClick }: ChoiceButtonProps) {
    return (
        <button
          className={`choice-btn${selected ? " selected" : ""}`}
          type="button"
          onClick={onClick}
        >
        {option}
        </button>
    );
}
