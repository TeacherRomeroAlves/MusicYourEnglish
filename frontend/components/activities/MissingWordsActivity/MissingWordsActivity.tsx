"use client";

import { useRegisterActivityResult } from "@/hooks/useActivityResults";
import { useMissingWords } from "@/hooks/useMissingWords";
import type { MissingWordsActivityProps } from "./types";

export default function MissingWordsActivity({
  step,
  title,
  description,
  options,
  maximumSelections,
}: MissingWordsActivityProps) {
  const { shuffledOptions, selectedWords, handleToggle, handleReset } = useMissingWords(options, maximumSelections);
  const correctSelections = options.filter((option) => option.isMissing && selectedWords.includes(option.word)).length;

  useRegisterActivityResult(`${step}:${title}`, {
    correct: correctSelections,
    answered: selectedWords.length,
    total: maximumSelections,
  });

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>
        <h2>{title}</h2>
        <p className="section-note">{description}</p>
      </div>

      <div className="missing-word-options" aria-label="Words to check">
        {shuffledOptions.map((option) => {
          const isSelected = selectedWords.includes(option.word);
          return (
            <button
              className={`missing-word-option${isSelected ? " is-selected" : ""}`}
              key={option.word}
              type="button"
              aria-pressed={isSelected}
              onClick={() => handleToggle(option.word)}
            >
              {option.word}
            </button>
          );
        })}
      </div>
      <p className="selection-count" aria-live="polite">
        Selected: {selectedWords.length} of {maximumSelections}
      </p>

      <div className="actions">
        <button className="action-btn secondary" type="button" onClick={handleReset}>Reset Section</button>
      </div>
    </section>
  );
}
