import type { OrderItem } from "./types";

interface OrderCardProps {
  item: OrderItem;
  onClick: () => void;
  selected?: boolean;
  dragging?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onDrop?: () => void;
}

export default function OrderCard({ item, onClick, selected = false, dragging = false, onDragStart, onDragEnd, onDrop }: OrderCardProps) {
  return (
    <button
      className={`order-card${selected ? " selected" : ""}${dragging ? " dragging" : ""}`}
      type="button"
      data-line={item.id}
      draggable
      aria-pressed={selected}
      onClick={onClick}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        onDrop?.();
      }}
    >
      <span className="order-card__handle" aria-hidden="true">↕</span>
      {item.text}
    </button>
  );
}
