"use client";

import { useRegisterActivityResult } from "@/hooks/useActivityResults";
import { useWordPresence } from "@/hooks/useWordPresence";
import type { WordPresenceActivityProps } from "./types";
import { getActivityInstruction } from "@/lib/activityInstructions";

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

  useRegisterActivityResult(`${step}:${title}`, {
    correct,
    answered: selectedIds.length,
    total: maximumSelections,
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
                <button
                  className={`missing-word-option${isSelected ? " is-selected" : ""}`}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleToggle(option.id)}
                >
                  {option.word}
                </button>
              )}{" "}
              {line.after}
            </p>
          );
        })}
      </div>

      <p className="selection-count" aria-live="polite">
        Activated: {selectedIds.length} of {maximumSelections}
      </p>
      <div className="actions">
        <button className="action-btn secondary" type="button" onClick={handleReset}>Reset Section</button>
      </div>
    </section>
  );
}
