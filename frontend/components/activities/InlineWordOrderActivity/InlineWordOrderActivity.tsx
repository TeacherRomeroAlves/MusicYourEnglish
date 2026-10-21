"use client";

import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { useInlineWordOrder } from "@/hooks/useInlineWordOrder";
import type { InlineWordOrderActivityProps } from "./types";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

function getInsertionIndex(sequence: HTMLElement, pointerX: number, pointerY: number) {
  const words = Array.from(sequence.querySelectorAll<HTMLButtonElement>(".inline-order-word"));
  const index = words.findIndex((word) => {
    const bounds = word.getBoundingClientRect();
    return pointerY < bounds.top || (pointerY <= bounds.bottom && pointerX < bounds.left + bounds.width / 2);
  });
  return index === -1 ? words.length : index;
}

export default function InlineWordOrderActivity({
  step,
  title,
  description,
  lines,
}: InlineWordOrderActivityProps) {
  const {
    getState,
    selected,
    dragged,
    insertion,
    handleSelect,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleReset,
  } = useInlineWordOrder(lines);

  const interactiveLines = lines.filter((line) => line.answer && line.includeInScore !== false);
  const results = interactiveLines.map((line) => {
    const state = getState(line);
    return {
      correct: state.words.join(" ") === line.answer,
      answered: state.touched,
    };
  });

  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct: results.filter((result) => result.correct).length,
    answered: results.filter((result) => result.answered).length,
    total: interactiveLines.length,
    fields: Object.fromEntries(interactiveLines.map((line) => {
      const state = getState(line);
      const value = state.words.join(" ");
      return [line.id, state.touched ? buildActivityField(value, line.answer) : { status: "unanswered" as const, value }];
    })),
  });

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>
        <h2>{title}</h2>
        <p className="section-note">{getActivityInstruction(description)}</p>
      </div>

      <div className="lyrics-card inline-order-lyrics" aria-label={title}>
        {lines.map((line) => {
          const key = line.syncKey ?? line.id;
          const state = getState(line);
          return (
            <p className={`lyric-line${line.note ? " lyric-line--note" : ""}`} key={line.id}>
              {line.before}{" "}
              {line.answer && <ReviewMarker status={getStatus(line.id, state.words.join(" "))}><span
                className="inline-order-sequence"
                onDragOver={(event) => {
                  if (dragged?.key !== key) return;
                  event.preventDefault();
                  event.dataTransfer.dropEffect = "move";
                  handleDragOver(line.id, getInsertionIndex(event.currentTarget, event.clientX, event.clientY));
                }}
                onDragLeave={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) handleDragLeave();
                }}
                onDrop={(event) => {
                  if (dragged?.key !== key) return;
                  event.preventDefault();
                  handleDrop(key, getInsertionIndex(event.currentTarget, event.clientX, event.clientY));
                }}
              >
                {state.words.map((word, index) => (
                  <button
                    className={`inline-order-word${selected[key] === index ? " is-selected" : ""}${dragged?.key === key && dragged.index === index ? " is-dragging" : ""}${insertion?.lineId === line.id && insertion.index === index ? " inline-order-word--insert-before" : ""}${insertion?.lineId === line.id && insertion.index === state.words.length && index === state.words.length - 1 ? " inline-order-word--insert-after" : ""}`}
                    key={`${word}-${index}`}
                    type="button"
                    draggable
                    aria-pressed={selected[key] === index}
                    onClick={() => handleSelect(key, index)}
                    onDragStart={(event) => {
                      event.dataTransfer.setData("text/plain", word);
                      event.dataTransfer.effectAllowed = "move";
                      handleDragStart(key, index);
                    }}
                    onDragEnd={handleDragEnd}
                  >
                    {word}
                  </button>
                ))}
              </span></ReviewMarker>}{" "}
              {line.after}
            </p>
          );
        })}
      </div>

      <div className="actions">
        <button className="action-btn secondary" type="button" onClick={handleReset}>Reset Verse</button>
      </div>
    </section>
  );
}
