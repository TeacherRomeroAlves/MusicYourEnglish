"use client";

import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { useMissingWords } from "@/hooks/useMissingWords";
import type { MissingWordsActivityProps } from "./types";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function MissingWordsActivity({
  step,
  title,
  description,
  lyrics,
  maximumSelections,
}: MissingWordsActivityProps) {
  const { selectedWords, handleToggle, handleReset } = useMissingWords(maximumSelections);
  const options = lyrics.flatMap((line) => line.parts.map((part) => part.option)).filter((option) => option.word);
  const correctSelections = options.filter((option) => option.isMissing && selectedWords.includes(option.word)).length;

  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct: correctSelections,
    answered: selectedWords.length,
    total: maximumSelections,
    fields: Object.fromEntries([
      ...options.filter((option) => selectedWords.includes(option.word)).map((option) => [option.word, buildActivityField(option.word, option.isMissing ? option.word : "__not-selected__")] as const),
      ...(selectedWords.length < maximumSelections ? [["__selection__", { status: "unanswered" as const, value: String(selectedWords.length) }] as const] : []),
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
        {lyrics.map((line, lineIndex) => (
          <p className="lyric-line" key={lineIndex}>
            {line.parts.map((part, partIndex) => {
              const isSelected = Boolean(part.option.word) && selectedWords.includes(part.option.word);
              return (
                <span key={`${part.option.word}-${partIndex}`}>
                  {part.before}{" "}
                  {part.option.word && <ReviewMarker status={getStatus(part.option.word, isSelected ? part.option.word : "")}><button
                    className={`missing-word-option${isSelected ? " is-selected" : ""}`}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handleToggle(part.option.word)}
                  >
                    {part.option.word}
                  </button></ReviewMarker>}{" "}
                  {part.after}{" "}
                </span>
              );
            })}
          </p>
        ))}
      </div>
      <ReviewMarker block status={getStatus("__selection__", String(selectedWords.length))}><p className="selection-count" aria-live="polite">
        Selected: {selectedWords.length} of {maximumSelections}
      </p></ReviewMarker>

      <div className="actions">
        <button className="action-btn secondary" type="button" onClick={handleReset}>Reset Section</button>
      </div>
    </section>
  );
}
