import type { IconItem } from "./types";

interface IconCardProps {
  icon: IconItem;
  isDragging: boolean;
  onDragStart: (iconId: string) => void;
  onDragEnd: () => void;
}

export default function IconCard({ icon, isDragging, onDragStart, onDragEnd }: IconCardProps) {
  const className = ["icon-card", isDragging ? "dragging" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={className}
      draggable
      type="button"
      aria-label={icon.ariaLabel}
      onDragStart={() => onDragStart(icon.id)}
      onDragEnd={onDragEnd}
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
