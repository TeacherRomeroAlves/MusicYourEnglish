interface OrderDropZoneProps {
    id: string;
    number: number;
}
  
export default function OrderDropZone({ id, number, }: OrderDropZoneProps) {
    return (
      <div
        className="order-drop-zone"
        data-match={id}
      >
        <span className="order-number">
          {number}
        </span>
      </div>
    );
}