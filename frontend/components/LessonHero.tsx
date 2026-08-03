interface LessonHeroProps {
    title: string;
    artist: string;
    description: string;
    imageUrl?: string;
}
  
export default function LessonHero({title, artist, description, imageUrl, }: LessonHeroProps) {
    return (
        <section className="hero">
            <div className="hero-layout">
                <div>
                <p className="eyebrow">Song Lesson</p>
                
                <h1>Music Your English</h1>

                <p className="hero-text">
                Song: <strong>"{title}"</strong> by {artist}
                </p>

                <p className="hero-text hero-subtle">
                    {description}
                </p>
                </div>

                {imageUrl && (
                    <img
                        className="hero-artist-image"
                        src={imageUrl}
                        alt={artist}
                    />
                )}
            </div>
        </section>
    );
}