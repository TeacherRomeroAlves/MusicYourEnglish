"use client";

interface MatchingWordCardProps {
  word: string;
  isPlaced?: boolean;
  isDragging: boolean;
  onDragStart: (word: string) => void;
  onDragEnd: () => void;
  onSelect: (word: string) => void;
  onSpeak: (word: string) => void;
}

export default function MatchingWordCard({
  word,
  isPlaced = false,
  isDragging,
  onDragStart,
  onDragEnd,
  onSelect,
  onSpeak,
}: MatchingWordCardProps) {
  const className = [
    "word-card",
    isPlaced ? "placed-card" : "",
    isDragging ? "dragging" : "",
    isDragging ? "is-selected" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={className}
      draggable
      role="button"
      tabIndex={0}
      aria-pressed={isDragging}
      onDragStart={() => onDragStart(word)}
      onDragEnd={onDragEnd}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(word);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(word);
        }
      }}
    >
      <span>{word}</span>

      <button
        className="speak-btn"
        type="button"
        aria-label={`Listen to the pronunciation of ${word}`}
        onClick={(event) => {
          event.stopPropagation();
          onSpeak(word);
        }}
      >
        Listen
      </button>
    </div>
  );
}
