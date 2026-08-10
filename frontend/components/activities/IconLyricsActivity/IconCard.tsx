import type { IconItem } from "./types";

interface IconCardProps {
  icon: IconItem;
  isDragging: boolean;
  onDragStart: (iconId: string) => void;
  onDragEnd: () => void;
  onSelect: (iconId: string) => void;
}

export default function IconCard({ icon, isDragging, onDragStart, onDragEnd, onSelect }: IconCardProps) {
  const className = ["icon-card", isDragging ? "dragging is-selected" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={className}
      draggable
      type="button"
      aria-label={icon.ariaLabel}
      aria-pressed={isDragging}
      onDragStart={() => onDragStart(icon.id)}
      onDragEnd={onDragEnd}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(icon.id);
      }}
    >
      {icon.dark ? (
        <span className="dark-icon">
          <span className="icon-symbol">{icon.symbol}</span>
        </span>
      ) : (
        <span className="icon-symbol">{icon.symbol}</span>
      )}
    </button>
  );
}
