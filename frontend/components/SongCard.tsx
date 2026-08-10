import Link from "next/link";
import Image from "next/image";
import type { SongMeta } from "@/data/songCatalog";

export default function SongCard({ song }: { song: SongMeta }) {
  return (
    <article className="song-card">
      <div className="song-art">
        <Image
          src={song.coverImage}
          alt={`${song.title} by ${song.artist} cover artwork`}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
      </div>
      <div className="song-card__body">
        <div className="song-card__meta"><span>{song.level} · {song.genre}</span></div>
        <h3>{song.title}</h3>
        <p className="song-card__artist">{song.artist}</p>
        <p>{song.topic}</p>
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
