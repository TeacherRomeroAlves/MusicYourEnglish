interface LyricWordCardProps {
  word: string;
  isDragging: boolean;
  onDragStart: (word: string) => void;
  onDragEnd: () => void;
  onSelect: (word: string) => void;
}

export default function LyricWordCard({ word, isDragging, onDragStart, onDragEnd, onSelect }: LyricWordCardProps) {
  const className = ["lyric-word-card", isDragging ? "dragging is-selected" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={className}
      draggable
      type="button"
      aria-pressed={isDragging}
      onDragStart={() => onDragStart(word)}
      onDragEnd={onDragEnd}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(word);
      }}
    >
      {word}
    </button>
  );
}
