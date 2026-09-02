"use client";

import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { useWordPresence } from "@/hooks/useWordPresence";
import type { WordPresenceActivityProps } from "./types";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function WordPresenceActivity({
  step,
  title,
  description,
  lyrics,
  maximumSelections,
}: WordPresenceActivityProps) {
  const { selectedIds, handleToggle, handleReset } = useWordPresence(maximumSelections);
  const options = lyrics.flatMap((line) => line.option ? [line.option] : []);
  const correct = options.filter((option) => option.isPresent && selectedIds.includes(option.id)).length;

  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct,
    answered: selectedIds.length,
    total: maximumSelections,
    fields: Object.fromEntries([
      ...options.filter((option) => selectedIds.includes(option.id)).map((option) => [option.id, buildActivityField(option.id, option.isPresent ? option.id : "__not-selected__")] as const),
      ...(selectedIds.length < maximumSelections ? [["__selection__", { status: "unanswered" as const, value: String(selectedIds.length) }] as const] : []),
    ]),
  });

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>
        <h2>{title}</h2>
        <p className="section-note">{getActivityInstruction(description)}</p>
      </div>

      <div className="lyrics-card missing-word-lyrics" aria-label={title}>
        {lyrics.map((line, index) => {
          const option = line.option;
          const isSelected = Boolean(option && selectedIds.includes(option.id));
          return (
            <p className="lyric-line" key={`${option?.id ?? "line"}-${index}`}>
              {line.before}{" "}
              {option && (
                <ReviewMarker status={getStatus(option.id, isSelected ? option.id : "")}>
                <button
                  className={`missing-word-option${isSelected ? " is-selected" : ""}`}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleToggle(option.id)}
                >
                  {option.word}
                </button>
                </ReviewMarker>
              )}{" "}
              {line.after}
            </p>
          );
        })}
      </div>

      <ReviewMarker block status={getStatus("__selection__", String(selectedIds.length))}><p className="selection-count" aria-live="polite">
        Activated: {selectedIds.length} of {maximumSelections}
      </p></ReviewMarker>
      <div className="actions">
        <button className="action-btn secondary" type="button" onClick={handleReset}>Reset Section</button>
      </div>
    </section>
  );
}
