"use client";

import OrderCard from "./OrderCard";
import type { OrderLyricsActivityProps } from "./types";
import { useOrderLyrics } from "@/hooks/useOrderLyrics";
import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

function getInsertionIndex(list: HTMLElement, pointerY: number) {
  const rows = Array.from(list.querySelectorAll<HTMLElement>("[data-order-row]"));
  const index = rows.findIndex((row) => {
    const bounds = row.getBoundingClientRect();
    return pointerY < bounds.top + bounds.height / 2;
  });
  return index === -1 ? rows.length : index;
}

export default function OrderLyricsActivity({ step, title, description, items, }: OrderLyricsActivityProps) {
  const { orderedItems, selectedId, draggedId, insertionIndex, handleSelect, handleDragStart, handleDragOver, handleDragEnd, handleDrop, handleReset } = useOrderLyrics(items);
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

      <div
        className="order-rearrange-list"
        aria-label="Scrambled lyric lines"
        onDragOver={(event) => {
          if (!draggedId) return;
          event.preventDefault();
          event.dataTransfer.dropEffect = "move";
          handleDragOver(getInsertionIndex(event.currentTarget, event.clientY));
        }}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) handleDragOver(null);
        }}
        onDrop={(event) => {
          if (!draggedId) return;
          event.preventDefault();
          handleDrop(getInsertionIndex(event.currentTarget, event.clientY));
        }}
      >
        {orderedItems.map((item, index) => (
          <div key={item.id} data-order-row className={`order-rearrange-row${draggedId && insertionIndex === index ? " order-rearrange-row--insert-before" : ""}${draggedId && insertionIndex === orderedItems.length && index === orderedItems.length - 1 ? " order-rearrange-row--insert-after" : ""}`}>
          <ReviewMarker block status={getStatus(item.id, String(index))}><OrderCard
            item={item}
            selected={selectedId === item.id}
            dragging={draggedId === item.id}
            onClick={() => handleSelect(item.id)}
            onDragStart={() => handleDragStart(item.id)}
            onDragEnd={handleDragEnd}
          /></ReviewMarker>
          </div>
        ))}
      </div>

      <div className="actions">
        <button
          className="action-btn secondary"
          type="button"
          onClick={handleReset}
        >
          Reset Verse
        </button>
      </div>
    </section>
  );
}
