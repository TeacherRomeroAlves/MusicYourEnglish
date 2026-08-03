import ChoiceButton from "./ChoiceButton";

interface ChoiceSlotProps {
  options: string[];
}

export default function ChoiceSlot({ options, }: ChoiceSlotProps) {
  return (
    <span className="choice-slot">
      <span className="choice-group">
        {options.map((option) => (
          <ChoiceButton
            key={option}
            option={option}
          />
        ))}
      </span>
    </span>
  );
}