import type { IconItem } from "./types";
import IconCard from "./IconCard";

interface InlineDropZoneProps {
  slotId: string;
  match: string;
  placedIcon: IconItem | null;
  isDragOver: boolean;
  isDraggingIcon: (iconId: string) => boolean;
  onDragStart: (iconId: string) => void;
  onDragEnd: () => void;
  onDragOver: () => void;
  onDragLeave: () => void;
  onDrop: () => void;
  onSelectIcon: (iconId: string) => void;
}

export default function InlineDropZone({
  slotId,
  match,
  placedIcon,
  isDragOver,
  isDraggingIcon,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop,
  onSelectIcon,
}: InlineDropZoneProps) {
  const className = ["inline-drop-zone", isDragOver ? "drag-over" : ""]
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
      onClick={onDrop}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onDrop();
        }
      }}
      onDragOver={(event) => {
        event.preventDefault();
        onDragOver();
      }}
      onDragLeave={onDragLeave}
      onDrop={(event) => {
        event.preventDefault();
        onDrop();
      }}
    >
      {placedIcon ? (
        <IconCard
          icon={placedIcon}
          isDragging={isDraggingIcon(placedIcon.id)}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onSelect={onSelectIcon}
        />
      ) : null}
    </span>
  );
}
