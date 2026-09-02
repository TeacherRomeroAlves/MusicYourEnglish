"use client";

import OrderCard from "./OrderCard";
import type { OrderLyricsActivityProps } from "./types";
import { useOrderLyrics } from "@/hooks/useOrderLyrics";
import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function OrderLyricsActivity({ step, title, description, items, }: OrderLyricsActivityProps) {
  const { orderedItems, selectedId, draggedId, handleSelect, handleDragStart, handleDragEnd, handleDrop, handleReset } = useOrderLyrics(items);
  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct: orderedItems.filter((item, index) => item.text === items[index]?.text).length,
    answered: orderedItems.length,
    total: items.length,
    fields: Object.fromEntries(orderedItems.map((item, index) => [item.id, buildActivityField(String(index), String(items.findIndex((expected) => expected.id === item.id)))])),
  });
  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>

        <h2>{title}</h2>

        {description && (
          <p className="section-note">
            {getActivityInstruction(description)}
          </p>
        )}
      </div>

      <div className="order-rearrange-list" aria-label="Scrambled lyric lines">
        {orderedItems.map((item) => (
          <ReviewMarker key={item.id} block status={getStatus(item.id, String(orderedItems.findIndex((ordered) => ordered.id === item.id)))}><OrderCard
            item={item}
            selected={selectedId === item.id}
            dragging={draggedId === item.id}
            onClick={() => handleSelect(item.id)}
            onDragStart={() => handleDragStart(item.id)}
            onDragEnd={handleDragEnd}
            onDrop={() => handleDrop(item.id)}
          /></ReviewMarker>
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
