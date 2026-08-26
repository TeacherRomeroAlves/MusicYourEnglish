"use client";

import MatchingWordCard from "./MatchingWordCard";

interface MeaningDropZoneProps {
  meaning: string;
  placedWord: string | null;
  isDragOver: boolean;
  isDraggingWord: (word: string) => boolean;
  onDragStart: (word: string) => void;
  onDragEnd: () => void;
  onSpeak: (word: string) => void;
  onDragOver: () => void;
  onDragLeave: () => void;
  onDrop: () => void;
  onSelectZone: () => void;
  onSelectWord: (word: string) => void;
}

export default function MeaningDropZone({
  meaning,
  placedWord,
  isDragOver,
  isDraggingWord,
  onDragStart,
  onDragEnd,
  onSpeak,
  onDragOver,
  onDragLeave,
  onDrop,
  onSelectZone,
  onSelectWord,
}: MeaningDropZoneProps) {
  const className = ["drop-zone", isDragOver ? "drag-over" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      aria-label={`Place the selected word beside: ${meaning}`}
      onClick={onSelectZone}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelectZone();
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
      <p className="meaning-text">{meaning}</p>

      {placedWord ? (
        <MatchingWordCard
          word={placedWord}
          isPlaced
          isDragging={isDraggingWord(placedWord)}
          isSelected={false}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onSelect={onSelectWord}
          onSpeak={onSpeak}
        />
      ) : null}
    </div>
  );
}
