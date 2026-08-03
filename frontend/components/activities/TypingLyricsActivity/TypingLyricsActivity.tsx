import LyricInput from "./LyricInput";
import type { TypingLyricsActivityProps } from "./types";

export default function TypingLyricsActivity({ step, title, description, lyrics, }: TypingLyricsActivityProps) {
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
                    <LyricInput answer={line.answer} />{" "}
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
        >
          Reset Section
        </button>
      </div>
    </section>
  );
}