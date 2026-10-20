import type { IconItem } from "./types";

interface IconCardProps {
  icon: IconItem;
  onSelect: (iconId: string) => void;
}

export default function IconCard({ icon, onSelect }: IconCardProps) {
  return (
    <button
      className="icon-card"
      type="button"
      aria-label={icon.ariaLabel}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(icon.id);
      }}
    >
      {icon.dark ? (
        <span className="dark-icon">
          <span className="icon-symbol">{icon.symbol}</span>
        </span>
      ) : (
        <span className="icon-symbol">{icon.symbol}</span>
      )}
    </button>
  );
}
