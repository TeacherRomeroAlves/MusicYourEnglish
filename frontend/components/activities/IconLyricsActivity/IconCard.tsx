import { IconItem } from "./types";

interface IconCardProps {
  icon: IconItem;
}

export default function IconCard({ icon }: IconCardProps) {
  return (
    <button className="icon-card" draggable type="button" aria-label={icon.ariaLabel}>
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