"use client";
import OrderCard from "./OrderCard";
import OrderDropZone from "./OrderDropZone";
import type { OrderLyricsActivityProps } from "./types";
import { useOrderLyrics } from "@/hooks/useOrderLyrics";
import { useRegisterActivityResult } from "@/hooks/useActivityResults";

export default function OrderLyricsActivity({ step, title, description, items, }: OrderLyricsActivityProps) {
  const { bankItems, orderedItems, handleSelect, handleReset } = useOrderLyrics(items);
  useRegisterActivityResult(`${step}:${title}`, {
    correct: orderedItems.filter((item, index) => item.text === items[index]?.text).length,
    answered: orderedItems.length,
    total: items.length,
  });
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
          {bankItems.map((item) => (
            <OrderCard
              key={item.id}
              item={item}
              onClick={() => handleSelect(item.id)}
            />
          ))}
        </div>

        <div className="order-list">
          {items.map((_, index) => (
            <OrderDropZone
              key={index}
              item={orderedItems[index]}
              number={index + 1}
              onClick={() => {
                const item = orderedItems[index];
                if (item) handleSelect(item.id);
              }}
            />
          ))}
        </div>
      </div>

      <div className="actions">
        <button
          className="action-btn secondary"
          type="button"
          onClick={handleReset}
        >
          Reset Section
        </button>
      </div>
    </section>
  );
}
