import LyricWordCard from "./LyricWordCard";

interface WordDropZoneProps {
  slotId: string;
  match: string;
  placedWordId: string | null;
  placedWord: string | null;
  isSelected: boolean;
  onSelectSlot: () => void;
  onSelectWord: (word: string) => void;
}

export default function WordDropZone({
  slotId,
  match,
  placedWordId,
  placedWord,
  isSelected,
  onSelectSlot,
  onSelectWord,
}: WordDropZoneProps) {
  const wordCount = match.trim().split(/\s+/).length;
  const className = [
    "word-drop-zone",
    wordCount >= 4 ? "word-drop-zone--sentence" : wordCount > 1 ? "word-drop-zone--phrase" : "",
    isSelected ? "is-selected" : "",
  ]
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
      onClick={onSelectSlot}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelectSlot();
        }
      }}
    >
      {placedWord ? (
        <LyricWordCard
          itemId={placedWordId ?? placedWord}
          word={placedWord}
          onSelect={onSelectWord}
        />
      ) : null}
    </span>
  );
}
