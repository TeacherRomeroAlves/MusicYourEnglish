import { ListeningActivityProps } from "./types";

export default function ListeningActivity({ step, title, description, embedUrl, embedTitle, }: ListeningActivityProps) {
  const isYouTube = embedUrl.includes("youtube.com/embed/");

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

      <div className={`video-frame ${isYouTube ? "youtube-frame" : "spotify-frame"}`}>
        <iframe
          src={embedUrl}
          title={embedTitle}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
  );
}
