import IconCard from "./IconCard";
import InlineDropZone from "./InlineDropZone";
import { IconItem, LyricLine, IconLyricsActivityProps } from "./types";

export default function IconLyricsActivity({ step, title, description, icons, lyrics }: IconLyricsActivityProps) {
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

            <div className="icon-bank" aria-label="Icon bank">
                {icons.map((icon) => (
                <IconCard key={icon.id} icon={icon}/>
                ))}
            </div>

            <div className="lyrics-card" aria-label={title}>
                {lyrics.map((line, index) => (
                    <p key={index} className="lyric-line">
                    {line.parts.map((part, i) => (
                        <span key={i}>
                        {part.before}
                        {part.match && (
                            <InlineDropZone match={part.match} />
                        )}
                        {part.after}
                        </span>
                    ))}
                    </p>
                ))}
            </div>

            <div className="actions">
                <button className="action-btn secondary" type="button">
                Reset Stanza
                </button>
            </div>
        </section>
    );
}