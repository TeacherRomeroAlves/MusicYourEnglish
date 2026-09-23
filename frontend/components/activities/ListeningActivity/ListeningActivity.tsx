import { ListeningActivityProps } from "./types";
import { getActivityInstruction } from "@/lib/activityInstructions";

export default function ListeningActivity({ step, title, description, embedUrl, embedTitle, }: ListeningActivityProps) {
  const isYouTube = embedUrl.includes("youtube.com/embed/");
  const isSpotify = embedUrl.includes("open.spotify.com/embed/");

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>

        <h2>{title}</h2>

        {description && (
          <p className="section-note">
            {getActivityInstruction(description, "listening")}
          </p>
        )}
      </div>

      {isSpotify && (
        <p className="spotify-login-note">
          <strong>Spotify note:</strong> To listen to the full song, you must be logged in to Spotify.
        </p>
      )}

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
