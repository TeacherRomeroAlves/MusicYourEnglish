"use client";

import LyricInput from "./LyricInput";
import type { TypingLyricsActivityProps } from "./types";
import { useTypingLyrics } from "@/hooks/useTypingLyrics";
import { useRegisterActivityResult } from "@/hooks/useActivityResults";

export default function TypingLyricsActivity({ step, title, description, lyrics, }: TypingLyricsActivityProps) {
  const { values, handleChange, handleReset } = useTypingLyrics();
  const answerLines = lyrics.map((line, index) => ({ ...line, index })).filter((line) => line.answer);
  useRegisterActivityResult(`${step}:${title}`, {
    correct: answerLines.filter(({ answer, index }) => (values[index] ?? "").trim().toLowerCase() === answer.toLowerCase()).length,
    answered: answerLines.filter(({ index }) => Boolean((values[index] ?? "").trim())).length,
    total: answerLines.length,
  });
  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>

        <h2>{title}</h2>

        {description && (
          <p className="section-note">
            {description}
          </p>
        )}
      </div>

      <div
        className="lyrics-card"
        aria-label={title}
      >
        {lyrics.map((line, index) => (
          <p
            key={index}
            className="lyric-line"
          >
            {line.before}{" "}
            {line.answer && (
                <>
                    <LyricInput
                      answer={line.answer}
                      value={values[index] ?? ""}
                      onChange={(value) => handleChange(index, value, line.answer.length)}
                    />{" "}
                </>
            )}
            {line.after}
          </p>
        ))}
      </div>

      <div className="actions">
        <button
          className="action-btn secondary"
          type="button"
          onClick={handleReset}
        >
          Reset Section
        </button>
      </div>
    </section>
  );
}
