import ChoiceSlot from "./ChoiceSlot";
import type { ChoiceLyricsActivityProps } from "./types";

export default function ChoiceLyricsActivity({ step, title, description, lyrics, }: ChoiceLyricsActivityProps) {
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

      <div className="lyrics-card choice-lyrics">
        {lyrics.map((line, index) => (
          <p key={index} className="lyric-line">
            {line.items.map((item, itemIndex) => (
              <span key={itemIndex}>
                {item.before}{" "}
                <ChoiceSlot options={item.options} />{" "}
                {item.after}{" "}
              </span>
            ))}
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