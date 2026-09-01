"use client";

import type { UnscrambleLyricsActivityProps } from "./types";
import { useUnscrambleLyrics } from "@/hooks/useUnscrambleLyrics";
import { useRegisterActivityResult } from "@/hooks/useActivityResults";
import { getActivityInstruction } from "@/lib/activityInstructions";

export default function UnscrambleLyricsActivity({
  step,
  title,
  description,
  lyrics,
}: UnscrambleLyricsActivityProps) {
  const { values, handleChange, handleReset } = useUnscrambleLyrics();
  const answerLines = lyrics.filter((line) => line.answer);

  useRegisterActivityResult(`${step}:${title}`, {
    correct: lyrics.filter((line, index) => line.answer && (
      (values[line.syncKey ?? String(index)] ?? "").trim().toLowerCase() === line.answer.toLowerCase()
    )).length,
    answered: lyrics.filter((line, index) => line.answer && Boolean((values[line.syncKey ?? String(index)] ?? "").trim())).length,
    total: answerLines.length,
  });

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>
        <h2>{title}</h2>
        {description && <p className="section-note">{getActivityInstruction(description)}</p>}
      </div>

      <div className="lyrics-card" aria-label={title}>
        {lyrics.map((line, index) => (
          <p className="lyric-line" key={`${line.answer}-${index}`}>
            {line.before}{" "}
            {line.answer && <input
              className="lyric-input unscramble-input"
              type="text"
              maxLength={line.answer.length}
              style={{ width: `${Math.max(112, line.scrambled.length * 12 + 32)}px` }}
              placeholder={line.scrambled}
              aria-label={`Unscramble ${line.scrambled}`}
              value={values[line.syncKey ?? String(index)] ?? ""}
              onChange={(event) => handleChange(line.syncKey ?? String(index), event.target.value, line.answer.length)}
              autoComplete="off"
              spellCheck={false}
            />}{" "}
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
