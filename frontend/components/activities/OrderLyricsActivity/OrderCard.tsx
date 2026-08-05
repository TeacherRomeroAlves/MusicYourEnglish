import type { OrderItem } from "./types";

interface OrderCardProps {
  item: OrderItem;
  onClick: () => void;
}

export default function OrderCard({ item, onClick }: OrderCardProps) {
  return (
    <button
      className="order-card"
      type="button"
      data-line={item.id}
      onClick={onClick}
    >
      {item.text}
    </button>
  );
}
