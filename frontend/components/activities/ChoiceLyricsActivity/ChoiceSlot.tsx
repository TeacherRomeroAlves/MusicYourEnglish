import ChoiceButton from "./ChoiceButton";

interface ChoiceSlotProps {
  options: string[];
  selectedOption?: string;
  onSelect: (option: string) => void;
}

export default function ChoiceSlot({ options, selectedOption, onSelect }: ChoiceSlotProps) {
  return (
    <span className="choice-slot">
      <span className="choice-group">
        {options.map((option) => (
          <ChoiceButton
            key={option}
            option={option}
            selected={selectedOption === option}
            onClick={() => onSelect(option)}
          />
        ))}
      </span>
    </span>
  );
}
