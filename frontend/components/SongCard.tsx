import Link from "next/link";
import Image from "next/image";
import type { SongMeta } from "@/data/songCatalog";

export default function SongCard({ song, compact = false }: { song: SongMeta; compact?: boolean }) {
  const displayLevel = song.slug === "cold" ? "Pre-Int." : song.level;

  return (
    <article className={`song-card song-card--${song.slug}${compact ? " song-card--compact" : ""}`}>
      <Link
        className="song-art"
        href={`/songs/${song.slug}`}
        aria-label={`Open the ${song.title} lesson`}
      >
        <Image
          src={song.coverImage}
          alt={`${song.title} by ${song.artist} cover artwork`}
          fill
          sizes={compact ? "(max-width: 620px) 62vw, 230px" : "(max-width: 620px) 72vw, 280px"}
        />
      </Link>
      <div className="song-card__body">
        <div className="song-card__meta"><span>{displayLevel} · {song.genre}</span></div>
        <h3>{song.title}</h3>
        <p className="song-card__artist">{song.artist}</p>
        <p className="song-card__topic">{song.topic}</p>
        <div className="activity-badges" aria-label="Language focus">
          {song.activities.map((activity) => <span key={activity}>{activity}</span>)}
        </div>
        <Link className="button button--card" href={`/songs/${song.slug}`} aria-label={`Start ${song.title} lesson`}>
          Start Lesson <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
