interface LyricWordCardProps {
  itemId: string;
  word: string;
  onSelect: (word: string) => void;
}

export default function LyricWordCard({ itemId, word, onSelect }: LyricWordCardProps) {
  return (
    <button
      className="lyric-word-card"
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onSelect(itemId);
      }}
    >
      {word}
    </button>
  );
}
