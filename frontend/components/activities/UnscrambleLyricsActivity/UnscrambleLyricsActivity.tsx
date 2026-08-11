"use client";

import type { UnscrambleLyricsActivityProps } from "./types";
import { useUnscrambleLyrics } from "@/hooks/useUnscrambleLyrics";
import { useRegisterActivityResult } from "@/hooks/useActivityResults";

export default function UnscrambleLyricsActivity({
  step,
  title,
  description,
  lyrics,
}: UnscrambleLyricsActivityProps) {
  const { values, handleChange, handleReset } = useUnscrambleLyrics();

  useRegisterActivityResult(`${step}:${title}`, {
    correct: lyrics.filter((line, index) => (
      (values[index] ?? "").trim().toLowerCase() === line.answer.toLowerCase()
    )).length,
    answered: lyrics.filter((_, index) => Boolean((values[index] ?? "").trim())).length,
    total: lyrics.length,
  });

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>
        <h2>{title}</h2>
        {description && <p className="section-note">{description}</p>}
      </div>

      <div className="lyrics-card" aria-label={title}>
        {lyrics.map((line, index) => (
          <p className="lyric-line" key={`${line.answer}-${index}`}>
            {line.before}{" "}
            <input
              className="lyric-input unscramble-input"
              type="text"
              maxLength={line.answer.length}
              placeholder={line.scrambled}
              aria-label={`Unscramble ${line.scrambled}`}
              value={values[index] ?? ""}
              onChange={(event) => handleChange(index, event.target.value, line.answer.length)}
              autoComplete="off"
              spellCheck={false}
            />{" "}
            {line.after}
          </p>
        ))}
      </div>

      <div className="actions">
        <button className="action-btn secondary" type="button" onClick={handleReset}>
          Reset Section
        </button>
      </div>
    </section>
  );
}
