import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";
import { songCatalog, type SongMeta } from "@/data/songCatalog";
import { createClient } from "@/lib/supabase/server";
import RestartLessonButton from "@/components/learning/RestartLessonButton";

interface LearningRecord {
  song_slug: SongMeta["slug"];
  progress_percent: number;
  score_correct: number | null;
  score_total: number | null;
  homework_answer: string;
  is_favorite: boolean;
  last_opened_at: string;
  completed_at: string | null;
}

const formatDate = (value: string) => new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(value));

export default async function MyLearningPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <main className="learning-page">
        <section className="learning-signin">
          <p className="eyebrow">Your learning space</p>
          <h1>Keep your English progress in one place.</h1>
          <p>Log in to save favorite songs, homework, scores, and lesson progress across your devices.</p>
          <div className="learning-signin__auth"><AuthButton /></div>
        </section>
      </main>
    );
  }

  const { data } = await supabase
    .from("user_song_learning")
    .select("song_slug, progress_percent, score_correct, score_total, homework_answer, is_favorite, last_opened_at, completed_at")
    .order("updated_at", { ascending: false });
  const records = (data ?? []) as LearningRecord[];
  const recordBySlug = new Map(records.map((record) => [record.song_slug, record]));
  const favorites = songCatalog.filter((song) => recordBySlug.get(song.slug)?.is_favorite);
  const history = records
    .filter((record) => record.progress_percent > 0 || record.score_total || record.homework_answer)
    .map((record) => ({ record, song: songCatalog.find((song) => song.slug === record.song_slug) }))
    .filter((item): item is { record: LearningRecord; song: SongMeta } => Boolean(item.song));
  const completed = records.filter((record) => record.completed_at).length;
  const scored = records.filter((record) => record.progress_percent > 0 && record.score_total);
  const averageScore = scored.length
    ? Math.round(scored.reduce((sum, record) => sum + ((record.score_correct ?? 0) / (record.score_total || 1)) * 100, 0) / scored.length)
    : 0;

  return (
    <main className="learning-page">
      <section className="learning-hero">
        <div>
          <p className="eyebrow">My Learning</p>
          <h1>Your music. Your English progress.</h1>
          <p>Return to lessons, review your scores, and keep written homework safely connected to your account.</p>
        </div>
        <div className="learning-stats" aria-label="Learning summary">
          <div><strong>{completed}</strong><span>Lessons completed</span></div>
          <div><strong>{favorites.length}</strong><span>Favorite songs</span></div>
          <div><strong>{averageScore}%</strong><span>Average score</span></div>
        </div>
      </section>

      <section className="learning-section" aria-labelledby="favorites-title">
        <div className="learning-section__heading">
          <div><p className="section-kicker">Saved songs</p><h2 id="favorites-title">Your favorites</h2></div>
          <Link href="/songs">Explore songs</Link>
        </div>
        {favorites.length ? (
          <div className="learning-favorites">
            {favorites.map((song) => (
              <Link key={song.slug} href={`/songs/${song.slug}`} className="learning-favorite-card">
                <span><Image src={song.coverImage} alt="" fill sizes="88px" /></span>
                <div><strong>{song.title}</strong><small>{song.artist}</small></div>
              </Link>
            ))}
          </div>
        ) : <p className="learning-empty">Save songs from the library and they will appear here.</p>}
      </section>

      <section className="learning-section" aria-labelledby="history-title">
        <div className="learning-section__heading"><div><p className="section-kicker">Recent activity</p><h2 id="history-title">Lesson history</h2></div></div>
        {history.length ? (
          <div className="learning-history">
            {history.map(({ record, song }) => (
              <article className="learning-history-card" key={song.slug}>
                <Image src={song.coverImage} alt={`${song.title} cover`} width={76} height={76} />
                <div className="learning-history-card__main">
                  <div><h3>{song.title}</h3><p>{song.artist} · Last opened {formatDate(record.last_opened_at)}</p></div>
                  <div className="learning-progress"><span style={{ width: `${record.progress_percent}%` }} /><small>{record.progress_percent}% answered</small></div>
                </div>
                <div className="learning-history-card__details">
                  <strong>{record.score_total ? `${record.score_correct ?? 0} / ${record.score_total}` : "No score yet"}</strong>
                  <span>{record.homework_answer ? "Homework saved" : "No homework yet"}</span>
                </div>
                <div className="learning-history-card__actions">
                  <Link className="button button--card" href={`/songs/${song.slug}`}>{record.completed_at ? "Review lesson" : "Continue"}</Link>
                  <RestartLessonButton slug={song.slug} />
                </div>
              </article>
            ))}
          </div>
        ) : <p className="learning-empty">Start a song lesson and your progress will appear here.</p>}
      </section>
    </main>
  );
}
