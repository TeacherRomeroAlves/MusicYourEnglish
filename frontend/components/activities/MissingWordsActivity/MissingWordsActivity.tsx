"use client";

import { useRegisterActivityResult } from "@/hooks/useActivityResults";
import { useMissingWords } from "@/hooks/useMissingWords";
import type { MissingWordsActivityProps } from "./types";

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

      <div className="lyrics-card missing-word-lyrics" aria-label={title}>
        {lyrics.map((line, lineIndex) => (
          <p className="lyric-line" key={lineIndex}>
            {line.parts.map((part, partIndex) => {
              const isSelected = Boolean(part.option.word) && selectedWords.includes(part.option.word);
              return (
                <span key={`${part.option.word}-${partIndex}`}>
                  {part.before}{" "}
                  {part.option.word && <button
                    className={`missing-word-option${isSelected ? " is-selected" : ""}`}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handleToggle(part.option.word)}
                  >
                    {part.option.word}
                  </button>}{" "}
                  {part.after}{" "}
                </span>
              );
            })}
          </p>
        ))}
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
