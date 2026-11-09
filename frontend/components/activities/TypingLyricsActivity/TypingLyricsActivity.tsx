"use client";

import { Fragment } from "react";
import LyricInput from "./LyricInput";
import type { TypingLyricsActivityProps } from "./types";
import { useTypingLyrics } from "@/hooks/useTypingLyrics";
import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function TypingLyricsActivity({ step, title, description, lyrics, wordBank, wordBankLabel = "Words in their base form", allowedLetters, }: TypingLyricsActivityProps) {
  const { values, handleChange, handleReset } = useTypingLyrics();
  const parts = lyrics.map((line, index) => ({ ...line, fieldId: String(index), valueKey: line.syncKey ?? String(index) }));
  const answerLines = parts.filter((line) => line.answer);
  const rows: (typeof parts)[] = [];
  for (const part of parts) {
    if (part.continuePreviousLine && rows.length) rows[rows.length - 1].push(part);
    else rows.push([part]);
  }
  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct: answerLines.filter(({ answer, valueKey }) => (values[valueKey] ?? "").trim().toLowerCase() === answer.toLowerCase()).length,
    answered: answerLines.filter(({ valueKey }) => Boolean((values[valueKey] ?? "").trim())).length,
    total: answerLines.length,
    fields: Object.fromEntries(answerLines.map(({ answer, fieldId, valueKey }) => [fieldId, buildActivityField(values[valueKey] ?? "", answer)])),
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
        {rows.map((row) => (
          <p key={row[0].fieldId} className="lyric-line">
            {row.map(({ before, answer, after, fieldId, valueKey }, index) => (
              <Fragment key={fieldId}>
                {index > 0 && " "}
                {before}{before && " "}
                {answer && (
                  <ReviewMarker status={getStatus(fieldId, values[valueKey] ?? "")}>
                    <LyricInput
                      answer={answer}
                      value={values[valueKey] ?? ""}
                      onChange={(value) => handleChange(valueKey, value, answer.length, allowedLetters)}
                    />{" "}
                  </ReviewMarker>
                )}
                {after}
              </Fragment>
            ))}
          </p>
        ))}
      </div>

      <div className="actions">
        <button
          className="action-btn secondary"
          type="button"
          onClick={handleReset}
        >
          Reset Verse
        </button>
      </div>
    </section>
  );
}
