interface LyricWordCardProps {
  word: string;
  isDragging: boolean;
  onDragStart: (word: string) => void;
  onDragEnd: () => void;
}

export default function LyricWordCard({ word, isDragging, onDragStart, onDragEnd }: LyricWordCardProps) {
  const className = ["lyric-word-card", isDragging ? "dragging" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={className}
      draggable
      type="button"
      onDragStart={() => onDragStart(word)}
      onDragEnd={onDragEnd}
    >
      {word}
    </button>
  );
}
