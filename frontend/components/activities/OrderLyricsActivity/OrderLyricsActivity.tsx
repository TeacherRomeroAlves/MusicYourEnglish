"use client";

import OrderCard from "./OrderCard";
import type { OrderLyricsActivityProps } from "./types";
import { useOrderLyrics } from "@/hooks/useOrderLyrics";
import { useRegisterActivityResult } from "@/hooks/useActivityResults";

export default function OrderLyricsActivity({ step, title, description, items, }: OrderLyricsActivityProps) {
  const { orderedItems, selectedId, draggedId, handleSelect, handleDragStart, handleDragEnd, handleDrop, handleReset } = useOrderLyrics(items);
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

      <div className="order-rearrange-list" aria-label="Scrambled lyric lines">
        {orderedItems.map((item) => (
          <OrderCard
            key={item.id}
            item={item}
            selected={selectedId === item.id}
            dragging={draggedId === item.id}
            onClick={() => handleSelect(item.id)}
            onDragStart={() => handleDragStart(item.id)}
            onDragEnd={handleDragEnd}
            onDrop={() => handleDrop(item.id)}
          />
        ))}
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
