"use client";

import PronounChart from "./PronounChart";
import LyricInput from "./LyricInput";
import { Fragment } from "react";
import type { PronounLyricsActivityProps } from "./types";
import { buildPronounInputId, usePronounLyrics } from "@/hooks/usePronounLyrics";
import { useRegisterActivityResult } from "@/hooks/useActivityResults";

export default function PronounLyricsActivity({ step, title, description, pronouns, lyrics, }: PronounLyricsActivityProps) {
  const { getValue, results, handleChange, handleReset } = usePronounLyrics(lyrics);
  useRegisterActivityResult(`${step}:${title}`, results);
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

      <PronounChart pronouns={pronouns} />

      <div className="lyrics-card" aria-label={title}>
        {lyrics.map((line, index) => (
          <Fragment key={index}>
            <p className="lyric-line">
              {line.parts.map((part, i) => {
                const inputId = buildPronounInputId(index, i);
                return <span key={inputId}>
                  {part.before}

                  {part.answer && (
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
