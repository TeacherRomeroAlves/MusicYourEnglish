import LyricWordCard from "./LyricWordCard";
import WordDropZone from "./WordDropZone";
import type { LyricsWordActivityProps } from "./types";

export default function LyricsWordActivity({ step, title, description, words, lyrics, }: LyricsWordActivityProps) {
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
        className="lyric-word-bank"
        aria-label={title}
      >
        {words.map((item) => (
          <LyricWordCard
            key={item.word}
            word={item.word}
          />
        ))}
      </div>

      <div className="lyrics-card">
        {lyrics.map((line, index) => (
          <p
            key={index}
            className="lyric-line"
          >
            {line.before}{" "}
            <WordDropZone match={line.answer} />{" "}
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