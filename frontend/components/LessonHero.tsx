import Image from "next/image";
import FavoriteButton from "@/components/learning/FavoriteButton";
import { getSongMetaByTitle } from "@/data/songCatalog";

interface LessonHeroProps {
    title: string;
    artist: string;
    description: string;
    level: string;
    topic: string;
    coverImage: string;
    coverClass: string;
}
  
export default function LessonHero({ title, artist, description, level, topic, coverImage, coverClass }: LessonHeroProps) {
    const slug = getSongMetaByTitle(title)?.slug;
    return (
        <section className="lesson-hero">
          <div className={`lesson-cover ${coverClass}`}>
            <Image
              className="lesson-cover__image"
              src={coverImage}
              alt={`${title} by ${artist} cover artwork`}
              fill
              sizes="(max-width: 580px) 100vw, (max-width: 820px) 190px, 250px"
              priority
            />
            <span className="lesson-cover__badge">Song lesson</span>
          </div>
          <div className="lesson-hero__content">
            <p className="eyebrow">Interactive song lesson</p>
            <h1>{title}</h1>
            <p className="lesson-artist">{artist}</p>
            <p className="lesson-description">{description}</p>
            {slug && <FavoriteButton slug={slug} variant="lesson" />}
            <dl className="lesson-meta">
              <div><dt>Level</dt><dd>{level}</dd></div>
              <div><dt>Topic</dt><dd>{topic}</dd></div>
            </dl>
          </div>
        </section>
    );
}
