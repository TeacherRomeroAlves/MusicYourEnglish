import Image from "next/image";

interface MovieLessonCardProps {
  id: string;
  movieTitle: string;
  poster: string;
  posterWidth: number;
  posterHeight: number;
  href: string;
  note?: string;
}

export function getMovieLessonDescription(movieTitle: string, note?: string) {
  return `Enjoyed learning with this song? Visit our sister project, Movie Your English, to practice English with ${movieTitle}. Explore the movie lesson and keep learning with familiar characters.${note ? ` ${note}` : ""}`;
}

export default function MovieLessonCard({ id, movieTitle, poster, posterWidth, posterHeight, href, note }: MovieLessonCardProps) {
  return (
    <aside className="cultural-note cultural-note--with-poster" aria-labelledby={id}>
      <Image
        className="cultural-note__poster"
        src={poster}
        alt={`${movieTitle} movie poster`}
        width={posterWidth}
        height={posterHeight}
        sizes="(max-width: 960px) 260px, 220px"
      />
      <div className="cultural-note__content">
        <p className="section-kicker">Keep learning with movies</p>
        <h2 id={id}>Practice with {movieTitle}, too</h2>
        <p>{getMovieLessonDescription(movieTitle, note)}</p>
        <a className="button button--primary cultural-note__action" href={href} target="_blank" rel="noopener noreferrer">
          Explore {movieTitle} on Movie Your English
        </a>
      </div>
    </aside>
  );
}
