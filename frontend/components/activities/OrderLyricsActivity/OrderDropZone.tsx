import OrderCard from "./OrderCard";
import type { OrderItem } from "./types";

interface OrderDropZoneProps {
    item?: OrderItem;
    number: number;
    onClick: () => void;
}
  
export default function OrderDropZone({ item, number, onClick }: OrderDropZoneProps) {
    return (
      <div
        className="order-drop-zone"
        data-match={item?.id}
      >
        <span className="order-number">
          {number}
        </span>
        {item && <OrderCard item={item} onClick={onClick} />}
      </div>
    );
}
