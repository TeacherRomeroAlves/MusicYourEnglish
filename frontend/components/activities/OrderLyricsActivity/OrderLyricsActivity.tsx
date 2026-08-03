import OrderCard from "./OrderCard";
import OrderDropZone from "./OrderDropZone";
import type { OrderLyricsActivityProps } from "./types";

export default function OrderLyricsActivity({ step, title, description, items, }: OrderLyricsActivityProps) {
  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>

        <h2>{title}</h2>

        {description && (
          <p className="section-note">
            {description}
          </p>
        )}
      </div>

      <div className="order-layout">
        <div className="order-bank">
          {items.map((item) => (
            <OrderCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div className="order-list">
          {items.map((item, index) => (
            <OrderDropZone
              key={item.id}
              id={item.id}
              number={index + 1}
            />
          ))}
        </div>
      </div>

      <div className="actions">
        <button
          className="action-btn secondary"
          type="button"
        >
          Reset Section
        </button>
      </div>
    </section>
  );
}