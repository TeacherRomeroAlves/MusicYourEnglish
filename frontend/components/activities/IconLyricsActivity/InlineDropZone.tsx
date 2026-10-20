import type { IconItem } from "./types";
import IconCard from "./IconCard";

interface InlineDropZoneProps {
  slotId: string;
  match: string;
  placedIcon: IconItem | null;
  isSelected: boolean;
  onSelectSlot: () => void;
  onSelectIcon: (iconId: string) => void;
}

export default function InlineDropZone({
  slotId,
  match,
  placedIcon,
  isSelected,
  onSelectSlot,
  onSelectIcon,
}: InlineDropZoneProps) {
  const className = ["inline-drop-zone", isSelected ? "is-selected" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={className}
      data-match={match}
      data-slot-id={slotId}
      role="button"
      tabIndex={0}
      aria-label={`Place the selected icon in the ${match} blank`}
      onClick={onSelectSlot}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelectSlot();
        }
      }}
    >
      {placedIcon ? (
        <IconCard
          icon={placedIcon}
          onSelect={onSelectIcon}
        />
      ) : null}
    </span>
  );
}
