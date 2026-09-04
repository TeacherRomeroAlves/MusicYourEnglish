"use client";

import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { usePartialWordLyrics } from "@/hooks/usePartialWordLyrics";
import type { PartialWordLyricsActivityProps } from "./types";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function PartialWordLyricsActivity({ step, title, description, lyrics }: PartialWordLyricsActivityProps) {
  const { getValue, handleChange, handleReset } = usePartialWordLyrics();
  const answerLines = lyrics
    .map((line, index) => ({ ...line, valueKey: String(index) }))
    .filter((line) => line.answer);

  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct: answerLines.filter((line) => getValue(line.valueKey, line.syncKey).toLowerCase() === line.answer?.toLowerCase()).length,
    answered: answerLines.filter((line) => Boolean(getValue(line.valueKey, line.syncKey).trim())).length,
    total: answerLines.length,
    fields: Object.fromEntries(answerLines.map((line) => [line.valueKey, buildActivityField(getValue(line.valueKey, line.syncKey), line.answer ?? "")])),
  });

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>
        <h2>{title}</h2>
        {description && <p className="section-note">{getActivityInstruction(description)}</p>}
      </div>

      <div className="lyrics-card" aria-label={title}>
        {lyrics.map((line, index) => {
          const value = getValue(String(index), line.syncKey);

          return (
            <p className="lyric-line" key={index}>
              {line.before}{" "}
              {line.answer && (
                <ReviewMarker status={getStatus(String(index), value)}>
                <span className="partial-word">
                  <span>{line.prefix}</span>
                  <input
                    type="text"
                    value={value}
                    maxLength={line.answer.length}
                    placeholder={"-".repeat(line.answer.length)}
                    aria-label={`Complete the word beginning with ${line.prefix ?? "the letters shown"}`}
                    style={{ width: `calc(${Math.max(3, line.answer.length + 1)}ch + .5rem)` }}
                    onChange={(event) => handleChange(String(index), event.target.value, line.answer?.length ?? 0, line.syncKey)}
                  />
                  <span>{line.suffix}</span>
                </span>
                </ReviewMarker>
              )}{" "}
              {line.after}
            </p>
          );
        })}
      </div>

      <div className="actions">
        <button className="action-btn secondary" type="button" onClick={() => handleReset(lyrics.flatMap((line) => line.syncKey ?? []))}>Reset Section</button>
      </div>
    </section>
  );
}
