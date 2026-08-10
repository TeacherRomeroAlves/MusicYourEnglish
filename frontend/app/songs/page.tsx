import SongLibrary from "@/components/SongLibrary";
import { songCatalog } from "@/data/songCatalog";

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
          <h1 id="library-title">Find the right song for your next English lesson.</h1>
          <p>Explore interactive lessons by level, genre, artist, or topic. Every song combines listening with English you can use.</p>
        </div>
        <div className="library-wave" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => <i key={index} />)}
        </div>
      </section>
      <SongLibrary songs={songCatalog} />
    </main>
  );
}
