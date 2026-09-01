"use client";

import LyricInput from "./LyricInput";
import type { TypingLyricsActivityProps } from "./types";
import { useTypingLyrics } from "@/hooks/useTypingLyrics";
import { useRegisterActivityResult } from "@/hooks/useActivityResults";
import { getActivityInstruction } from "@/lib/activityInstructions";

export default function TypingLyricsActivity({ step, title, description, lyrics, wordBank, wordBankLabel = "Words in their base form", allowedLetters, }: TypingLyricsActivityProps) {
  const { values, handleChange, handleReset } = useTypingLyrics();
  const answerLines = lyrics
    .map((line, index) => ({ ...line, valueKey: line.syncKey ?? String(index) }))
    .filter((line) => line.answer);
  useRegisterActivityResult(`${step}:${title}`, {
    correct: answerLines.filter(({ answer, valueKey }) => (values[valueKey] ?? "").trim().toLowerCase() === answer.toLowerCase()).length,
    answered: answerLines.filter(({ valueKey }) => Boolean((values[valueKey] ?? "").trim())).length,
    total: answerLines.length,
  });
  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>

        <h2>{title}</h2>

        {description && (
          <p className="section-note">
            {getActivityInstruction(description)}
          </p>
        )}
      </div>

      {wordBank && wordBank.length > 0 && (
        <div className="prompt-box typing-word-chart" aria-label={wordBankLabel}>
          <p className="prompt-label">{wordBankLabel}</p>
          <div className="pronoun-chart">
            {wordBank.map((word) => (
              <span className="pronoun-chip" key={word}>{word}</span>
            ))}
          </div>
        </div>
      )}

      {allowedLetters && allowedLetters.length > 0 && (
        <div className="prompt-box typing-word-chart" aria-label="Letters you can use">
          <p className="prompt-label">Letters you can use</p>
          <div className="letter-chart">
            {allowedLetters.map((letter) => (
              <span className="letter-chip" key={letter}>{letter}</span>
            ))}
          </div>
        </div>
      )}

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
                      value={values[line.syncKey ?? String(index)] ?? ""}
                      onChange={(value) => handleChange(line.syncKey ?? String(index), value, line.answer.length, allowedLetters)}
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
