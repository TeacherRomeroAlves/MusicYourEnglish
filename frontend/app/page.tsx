import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { songCatalog } from "@/data/songCatalog";
import LibraryPreviewVisual from "@/components/LibraryPreviewVisual";

const processSteps = [
  ["Choose a song", "Pick a lesson based on your level, interests, or favorite artist."],
  ["Get ready", "Answer the warm-up questions, explore key vocabulary, and discuss the new words before listening."],
  ["Listen actively", "Complete interactive activities while listening to the song."],
  ["Use real English", "Discuss the song's meaning and message, share your opinion, and practice speaking and writing."],
  ["Track your progress", "Check your answers, view your score, and save your student report."],
];

const studentBenefits = [
  "Interactive listening activities",
  "Vocabulary with pronunciation",
  "Instant answer checking",
  "Speaking and writing practice",
  "Downloadable progress reports",
];

const teacherBenefits = [
  "Ready-to-use lesson sequences",
  "Different activity formats",
  "Student scores and reports",
  "Homework and discussion prompts",
  "Lessons organized by level and topic",
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="home-hero__content">
          <p className="eyebrow">Learn English through music</p>
          <h1 id="hero-title">Turn the <span className="text-highlight">songs you love</span> into real English practice.</h1>
          <p className="home-hero__lead">
            Improve your listening, learn vocabulary in context, and speak with confidence through interactive music lessons.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" href="/songs">Explore Songs</Link>
            <Link className="button button--secondary" href="#how-it-works">See How It Works</Link>
          </div>
          <div className="trust-line" aria-label="Learning features">
            <span>Interactive listening</span>
            <span>Vocabulary in context</span>
            <span>Speaking and writing practice</span>
          </div>
        </div>

        <div className="learning-player" aria-label="Preview of an interactive music lesson">
          <div className="learning-player__topline"><span>Now learning</span><span>Lesson 03 / 06</span></div>
          <div className="learning-player__track">
            <div className="mini-cover">
              <Image
                src="/brand/music-your-english-logo.png"
                alt="Music Your English"
                width={56}
                height={56}
                priority
              />
            </div>
            <div className="learning-player__track-info">
              <strong>Count on Me</strong>
              <span>Bruno Mars</span>
            </div>
            <button type="button" aria-label="Play lesson preview" disabled><span aria-hidden="true">▶</span></button>
          </div>
          <div className="equalizer" aria-hidden="true">
            {Array.from({ length: 32 }, (_, index) => <i key={index} style={{ "--bar": (index % 7) + 2 } as CSSProperties} />)}
          </div>
          <div className="preview-lyric">
            <span>Listen and complete</span>
            <p>You can <strong>count</strong> on me like one, two, three.</p>
          </div>
          <div className="preview-vocab">
            <span>Vocabulary in context</span>
            <strong>count on</strong><p>to trust someone to help you</p>
          </div>
          <div className="player-progress"><span /><small>Listening practice · 58%</small></div>
        </div>
      </section>

      <section className="home-section library-preview" aria-labelledby="library-preview-title">
        <div className="library-preview__content">
          <p className="eyebrow">Find your next lesson</p>
          <h2 id="library-preview-title">A song library built for <span className="text-highlight">real English practice.</span></h2>
          <p>Browse every available lesson in one place, then filter by English level or musical genre to find the right fit.</p>
          <Link className="button button--primary" href="/songs">Explore the song library</Link>
        </div>
        <LibraryPreviewVisual songs={songCatalog} />
      </section>

      <section className="home-section process-section" id="how-it-works" aria-labelledby="process-title">
        <div className="section-intro section-intro--wide">
          <p className="eyebrow">How it works</p>
          <h2 id="process-title">More than just <span className="text-highlight">filling in the lyrics.</span></h2>
        </div>
        <div className="process-grid">
          {processSteps.map(([title, text], index) => (
            <article className="process-card" key={title} tabIndex={0}>
              <div className="process-icon" aria-hidden="true"><span>{index + 1}</span><i /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section paths-section" aria-label="Learning paths">
        <article className="path-panel path-panel--student">
          <p className="eyebrow">For students</p>
          <h2>Learn with music you actually enjoy.</h2>
          <p>Practice at your own pace, understand real English, and turn every song into a memorable learning experience.</p>
          <ul>{studentBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
          <Link className="button button--light" href="/songs">Start Learning</Link>
        </article>
        <article className="path-panel path-panel--teacher" id="for-teachers">
          <p className="eyebrow">For teachers</p>
          <h2>Bring ready-made <span className="text-highlight">music lessons</span> to your classroom.</h2>
          <p>Save preparation time with structured lessons from warm-up discussion to listening, vocabulary, speaking, and writing.</p>
          <ul>{teacherBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
          <Link className="button button--secondary" href="/songs">Explore Teacher Resources</Link>
        </article>
      </section>

      <section className="home-section music-benefits" aria-labelledby="music-title">
        <div className="benefit-heading">
          <p className="eyebrow">Why music?</p>
          <h2 id="music-title">English is easier to remember <span className="text-highlight">when you can feel it.</span></h2>
        </div>
        <div className="benefit-list">
          <article><span>01</span><div><h3>Train your ears</h3><p>Hear natural pronunciation, rhythm, connected speech, and real vocabulary.</p></div></article>
          <article><span>02</span><div><h3>Remember more</h3><p>Music, repetition, and emotion help new language stay in your memory.</p></div></article>
          <article><span>03</span><div><h3>Speak with confidence</h3><p>Use each song as a starting point for meaningful conversations and writing.</p></div></article>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="final-cta__wave" aria-hidden="true" />
        <p className="eyebrow">Press play on progress</p>
        <h2 id="cta-title">Your next English lesson is already playing.</h2>
        <p>Choose a song and discover how much English you can learn from the music you love.</p>
        <Link className="button button--light" href="/songs">Explore Songs</Link>
        <a className="teacher-link" href="#for-teachers">Are you a teacher? Discover classroom-ready lessons.</a>
      </section>
    </main>
  );
}
