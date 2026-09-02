"use client";

import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { useInlineWordOrder } from "@/hooks/useInlineWordOrder";
import type { InlineWordOrderActivityProps } from "./types";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

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
    handleSelect,
    handleDragStart,
    handleDragEnd,
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
            <p className="lyric-line" key={line.id}>
              {line.before}{" "}
              {line.answer && <ReviewMarker status={getStatus(line.id, state.words.join(" "))}><span className="inline-order-sequence">
                {state.words.map((word, index) => (
                  <button
                    className={`inline-order-word${selected[key] === index ? " is-selected" : ""}${dragged?.key === key && dragged.index === index ? " is-dragging" : ""}`}
                    key={`${word}-${index}`}
                    type="button"
                    draggable
                    aria-pressed={selected[key] === index}
                    onClick={() => handleSelect(key, index)}
                    onDragStart={() => handleDragStart(key, index)}
                    onDragEnd={handleDragEnd}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={(event) => {
                      event.preventDefault();
                      handleDrop(key, index);
                    }}
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
        <button className="action-btn secondary" type="button" onClick={handleReset}>Reset Section</button>
      </div>
    </section>
  );
}
