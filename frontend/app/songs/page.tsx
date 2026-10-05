import SongLibrary from "@/components/SongLibrary";
import { publicSongCatalog } from "@/data/songCatalog";

export const metadata = {
  title: "Song Library | Music Your English",
  description: "Explore interactive English lessons by song, level, and genre.",
};

export default function SongsPage() {
  return (
    <main className="library-page">
      <section className="library-hero" aria-labelledby="library-title">
        <div>
          <p className="eyebrow">Song library</p>
          <h1 id="library-title">Find the right song for your <span className="text-highlight">next English lesson.</span></h1>
          <p>Explore interactive lessons by level, genre, artist, or topic. Every song combines listening with English you can use.</p>
        </div>
        <div className="library-wave" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => <i key={index} />)}
        </div>
      </section>
      <aside className="library-feedback-card" aria-labelledby="library-feedback-title">
        <div className="library-feedback-card__copy">
          <p className="library-feedback-card__eyebrow">Do you like our platform?</p>
          <h2 id="library-feedback-title">Your feedback can make every lesson better.</h2>
          <p>We are still improving the platform. Tell us what works, what needs attention, or what you would love to see next. It takes less than two minutes.</p>
        </div>
        <a
          className="button library-feedback-card__button"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeOPF6KSC_AeLO1EG7sn-_qZ8h7K2clnojW46OkE6YzMlPELw/viewform?usp=header"
          target="_blank"
          rel="noreferrer"
        >
          Share Your Feedback <span aria-hidden="true">↗</span>
        </a>
      </aside>
      <SongLibrary songs={publicSongCatalog} />
    </main>
  );
}
