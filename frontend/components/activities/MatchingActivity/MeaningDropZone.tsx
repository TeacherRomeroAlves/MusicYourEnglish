"use client";

import MatchingWordCard from "./MatchingWordCard";

interface MeaningDropZoneProps {
  meaning: string;
  placeholderWord: string;
  placedWord: string | null;
  result?: "correct" | "incorrect" | "incomplete";
  isDragOver: boolean;
  isSelected: boolean;
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
  placeholderWord,
  placedWord,
  result,
  isDragOver,
  isSelected,
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
  const className = ["drop-zone", isDragOver ? "drag-over" : "", isSelected ? "is-selected" : "", result ? `matching-result--${result}` : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={className}
      role="button"
      aria-pressed={isSelected}
      tabIndex={0}
      aria-label={`Place the selected word beside: ${meaning}${result ? `. Answer ${result}` : ""}`}
      onClick={onSelectZone}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
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

      <div className="matching-answer-slot">
        <div className="word-card placed-card matching-answer-placeholder" aria-hidden="true">
          <span>{placeholderWord}</span>
          <span className="speak-btn">Listen</span>
        </div>
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
    </div>
  );
}
