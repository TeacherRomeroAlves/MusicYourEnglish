import LyricWordCard from "./LyricWordCard";

interface WordDropZoneProps {
  slotId: string;
  match: string;
  placedWordId: string | null;
  placedWord: string | null;
  isDragOver: boolean;
  isDraggingWord: (word: string) => boolean;
  onDragStart: (word: string) => void;
  onDragEnd: () => void;
  onDragOver: () => void;
  onDragLeave: () => void;
  onDrop: () => void;
  onSelectWord: (word: string) => void;
}

export default function WordDropZone({
  slotId,
  match,
  placedWordId,
  placedWord,
  isDragOver,
  isDraggingWord,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop,
  onSelectWord,
}: WordDropZoneProps) {
  const className = ["word-drop-zone", isDragOver ? "drag-over" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={className}
      data-match={match}
      data-slot-id={slotId}
      role="button"
      tabIndex={0}
      aria-label={`Place the selected word in the ${match} blank`}
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
      {placedWord ? (
        <LyricWordCard
          itemId={placedWordId ?? placedWord}
          word={placedWord}
          isDragging={isDraggingWord(placedWordId ?? placedWord)}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onSelect={onSelectWord}
        />
      ) : null}
    </span>
  );
}
