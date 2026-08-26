"use client";

import { useRegisterActivityResult } from "@/hooks/useActivityResults";
import { usePartialWordLyrics } from "@/hooks/usePartialWordLyrics";
import type { PartialWordLyricsActivityProps } from "./types";

export default function PartialWordLyricsActivity({ step, title, description, lyrics }: PartialWordLyricsActivityProps) {
  const { values, handleChange, handleReset } = usePartialWordLyrics();
  const answerLines = lyrics
    .map((line, index) => ({ ...line, valueKey: String(index) }))
    .filter((line) => line.answer);

  useRegisterActivityResult(`${step}:${title}`, {
    correct: answerLines.filter((line) => (values[line.valueKey] ?? "").toLowerCase() === line.answer?.toLowerCase()).length,
    answered: answerLines.filter((line) => Boolean((values[line.valueKey] ?? "").trim())).length,
    total: answerLines.length,
  });

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>
        <h2>{title}</h2>
        {description && <p className="section-note">{description}</p>}
      </div>

      <div className="lyrics-card" aria-label={title}>
        {lyrics.map((line, index) => {
          const value = values[String(index)] ?? "";

          return (
            <p className="lyric-line" key={index}>
              {line.before}{" "}
              {line.answer && (
                <span className="partial-word">
                  <span>{line.prefix}</span>
                  <input
                    type="text"
                    value={value}
                    maxLength={line.answer.length}
                    placeholder={"-".repeat(line.answer.length)}
                    aria-label={`Complete the word beginning with ${line.prefix ?? "the letters shown"}`}
                    style={{ width: `${Math.max(3, line.answer.length + 1)}ch` }}
                    onChange={(event) => handleChange(String(index), event.target.value, line.answer?.length ?? 0)}
                  />
                  <span>{line.suffix}</span>
                </span>
              )}{" "}
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
