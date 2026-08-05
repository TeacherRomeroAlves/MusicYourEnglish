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
}: InlineDropZoneProps) {
  const className = ["inline-drop-zone", isDragOver ? "drag-over" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={className}
      data-match={match}
      data-slot-id={slotId}
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
        />
      ) : null}
    </span>
  );
}
