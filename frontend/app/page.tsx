import "./globals.css"
import "../styles/variables.css"
import "../styles/layout.css"
import "../styles/cards.css"
import "../styles/home.css"
import "../styles/responsive.css"

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Choose a Song</p>

        <h1>Music Your English</h1>

        <p className="hero-text hero-subtle">
          Pick a song lesson to practice English with listening, vocabulary,
          and discussion activities.
        </p>
      </section>

      <section className="card">
        <div className="section-heading">
          <p className="section-kicker">Available Lessons</p>

          <h2>Song Menu</h2>

          <p className="section-note">
            Start with the lesson below. We can add more songs here anytime.
          </p>
        </div>

        <div className="song-grid">
          <a className="song-link-card" href="/songs/count-on-me">
            <img
              className="song-card-image"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/BrunoMars.jpg"
              alt="Bruno Mars"
            />

            <p className="song-tag">Bruno Mars</p>

            <h3>Count on Me</h3>

            <p className="song-description">
              Friendship, support, and helping the people who matter to us.
            </p>

            <span className="song-link-label">Open lesson</span>
          </a>

          <a className="song-link-card" href="/songs/golden">
            <div
              className="song-card-art song-card-art--golden"
              aria-hidden="true"
            />

            <p className="song-tag">Huntr/x</p>

            <h3>Golden</h3>

            <p className="song-description">
              Confidence, inner strength, and facing fears.
            </p>

            <span className="song-link-label">Open lesson</span>
          </a>

          <article
            className="song-link-card song-link-card--placeholder"
            aria-disabled="true"
          >
            <p className="song-tag">Coming Next</p>

            <h3>Your Next Song</h3>

            <p className="song-description">
              This space is ready for another lesson whenever you want to build
              one.
            </p>

            <span className="song-link-label">Ready to add</span>
          </article>
        </div>
      </section>
    </main>
  );
}