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
}: MeaningDropZoneProps) {
  const className = ["drop-zone", isDragOver ? "drag-over" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={className}
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
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onSpeak={onSpeak}
        />
      ) : null}
    </div>
  );
}
