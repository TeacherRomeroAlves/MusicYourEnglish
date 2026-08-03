import PronounChart from "./PronounChart";
import LyricInput from "./LyricInput";
import { Fragment } from "react";
import type { PronounLyricsActivityProps } from "./types";

export default function PronounLyricsActivity({ step, title, description, pronouns, lyrics, }: PronounLyricsActivityProps) {
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
              {line.parts.map((part, i) => (
                <span key={i}>
                  {part.before}

                  {part.answer && (
                    <LyricInput
                      answer={part.answer}
                      maxLength={part.maxLength}
                      syncKey={part.syncKey}
                    />
                  )}

                  {part.after}
                </span>
              ))}
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
        >
          Reset Section
        </button>
      </div>
    </section>
  );
}