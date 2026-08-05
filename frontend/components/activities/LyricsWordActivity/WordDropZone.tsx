import LyricWordCard from "./LyricWordCard";

interface WordDropZoneProps {
  slotId: string;
  match: string;
  placedWord: string | null;
  isDragOver: boolean;
  isDraggingWord: (word: string) => boolean;
  onDragStart: (word: string) => void;
  onDragEnd: () => void;
  onDragOver: () => void;
  onDragLeave: () => void;
  onDrop: () => void;
}

export default function WordDropZone({
  slotId,
  match,
  placedWord,
  isDragOver,
  isDraggingWord,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop,
}: WordDropZoneProps) {
  const className = ["word-drop-zone", isDragOver ? "drag-over" : ""]
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
      {placedWord ? (
        <LyricWordCard
          word={placedWord}
          isDragging={isDraggingWord(placedWord)}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        />
      ) : null}
    </span>
  );
}
