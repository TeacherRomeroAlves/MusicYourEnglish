import type { OrderItem } from "./types";

interface OrderCardProps {
  item: OrderItem;
}

export default function OrderCard({ item }: OrderCardProps) {
  return (
    <button
      className="order-card"
      type="button"
      data-line={item.id}
    >
      {item.text}
    </button>
  );
}