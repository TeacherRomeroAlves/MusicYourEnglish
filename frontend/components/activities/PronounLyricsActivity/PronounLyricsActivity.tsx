"use client";

import PronounChart from "./PronounChart";
import LyricInput from "./LyricInput";
import { Fragment } from "react";
import type { PronounLyricsActivityProps } from "./types";
import { buildPronounInputId, usePronounLyrics } from "@/hooks/usePronounLyrics";
import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function PronounLyricsActivity({ step, title, description, chartLabel, pronouns, lyrics, }: PronounLyricsActivityProps) {
  const { getValue, results, handleChange, handleReset } = usePronounLyrics(lyrics);
  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  const answerParts = lyrics.flatMap((line, lineIndex) => line.parts.flatMap((part, partIndex) => part.answer
    ? [{ fieldId: buildPronounInputId(lineIndex, partIndex), answer: part.answer, syncKey: part.syncKey }]
    : []));
  useRegisterActivityResult(activityId, {
    ...results,
    fields: Object.fromEntries(answerParts.map(({ fieldId, answer, syncKey }) => [fieldId, buildActivityField(getValue(fieldId, syncKey), answer)])),
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

      <PronounChart pronouns={pronouns} label={chartLabel} />

      <div className="lyrics-card" aria-label={title}>
        {lyrics.map((line, index) => (
          <Fragment key={index}>
            <p className="lyric-line">
              {line.parts.map((part, i) => {
                const inputId = buildPronounInputId(index, i);
                return <span key={inputId}>
                  {part.before}

                  {part.answer && (
                    <ReviewMarker status={getStatus(inputId, getValue(inputId, part.syncKey))}>
                    <LyricInput
                      answer={part.answer}
                      maxLength={part.maxLength}
                      syncKey={part.syncKey}
                      value={getValue(inputId, part.syncKey)}
                      onChange={(value) => handleChange(
                        inputId,
                        value,
                        part.maxLength ?? part.answer!.length,
                        part.syncKey,
                      )}
                    />
                    </ReviewMarker>
                  )}

                  {part.after}
                </span>;
              })}
            </p>

            {line.dividerAfter && (
              <div className="lyric-divider-space" />
            )}
          </Fragment>
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
