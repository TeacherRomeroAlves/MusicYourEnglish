"use client";

interface MatchingWordCardProps {
  word: string;
  isPlaced?: boolean;
  isDragging: boolean;
  onDragStart: (word: string) => void;
  onDragEnd: () => void;
  onSpeak: (word: string) => void;
}

export default function MatchingWordCard({
  word,
  isPlaced = false,
  isDragging,
  onDragStart,
  onDragEnd,
  onSpeak,
}: MatchingWordCardProps) {
  const className = [
    "word-card",
    isPlaced ? "placed-card" : "",
    isDragging ? "dragging" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={className}
      draggable
      onDragStart={() => onDragStart(word)}
      onDragEnd={onDragEnd}
    >
      <span>{word}</span>

      <button
        className="speak-btn"
        type="button"
        onClick={() => onSpeak(word)}
      >
        Listen
      </button>
    </div>
  );
}
