interface LyricWordCardProps {
  itemId: string;
  word: string;
  isDragging: boolean;
  onDragStart: (word: string) => void;
  onDragEnd: () => void;
  onSelect: (word: string) => void;
}

export default function LyricWordCard({ itemId, word, isDragging, onDragStart, onDragEnd, onSelect }: LyricWordCardProps) {
  const className = ["lyric-word-card", isDragging ? "dragging is-selected" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={className}
      draggable
      type="button"
      aria-pressed={isDragging}
      onDragStart={() => onDragStart(itemId)}
      onDragEnd={onDragEnd}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(itemId);
      }}
    >
      {word}
    </button>
  );
}
