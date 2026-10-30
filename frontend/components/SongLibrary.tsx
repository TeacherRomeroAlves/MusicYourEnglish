"use client";

import { useDeferredValue, useEffect, useRef, useState } from "react";
import SongCard from "./SongCard";
import AuthButton from "./AuthButton";
import { USER_LEVELS, type SongMeta } from "@/data/songCatalog";
import { shuffleArray } from "@/lib/shuffleArray";
import { GRAMMAR_TOPICS, LANGUAGE_FOCUSES, ACTIVITY_TYPES } from "@/data/lessonTaxonomy";
import { EMPTY_SONG_FILTERS, getFilterGenres, hasVerbPractice, matchesSongFilters, type SongFilters } from "@/lib/songFilters";

const MORE_FILTER_GROUPS = [
  { key: "grammar", field: "grammar", label: "Grammar", options: GRAMMAR_TOPICS, help: "Verb forms and sentence patterns" },
  { key: "languageFocus", field: "languageFocus", label: "Language Focus", options: LANGUAGE_FOCUSES, help: "Words, expressions, and pronunciation" },
  { key: "activityType", field: "activityTypes", label: "Activity Type", options: ACTIVITY_TYPES, help: "How students complete the lyrics" },
] as const;

const FILTER_LABELS = {
  level: "Level", genre: "Genre", grammar: "Grammar", languageFocus: "Language focus", activityType: "Activity type",
} as const;

const DEEPER_TOPIC_SLUGS: SongMeta["slug"][] = [
  "manchild",
  "the-man",
  "hero-of-war",
  "bad-life",
  "nine-to-five",
  "self-dysmorphia",
];

interface SongRailProps {
  title: string;
  description: string;
  songs: SongMeta[];
  compact?: boolean;
}

function SongRail({ title, description, songs, compact = false }: SongRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const songSequence = songs.map((song) => song.slug).join("|");

  useEffect(() => {
    if (trackRef.current) trackRef.current.scrollLeft = 0;
  }, [songSequence]);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.max(track.clientWidth * 0.82, 260), behavior: "smooth" });
  };

  return (
    <section className={`song-rail${compact ? " song-rail--compact" : ""}`} aria-label={title}>
      <div className="song-rail__header">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="song-rail__controls" aria-label={`${title} carousel controls`}>
          <button type="button" onClick={() => scroll(-1)} aria-label={`Scroll ${title} left`}>←</button>
          <button type="button" onClick={() => scroll(1)} aria-label={`Scroll ${title} right`}>→</button>
        </div>
      </div>
      <div className="song-rail__viewport">
        <div className="song-rail__track" ref={trackRef} tabIndex={0}>
          {songs.map((song) => <SongCard key={song.slug} song={song} compact={compact} />)}
        </div>
      </div>
    </section>
  );
}

export default function SongLibrary({ songs }: { songs: SongMeta[] }) {
  const [filters, setFilters] = useState<SongFilters>(EMPTY_SONG_FILTERS);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [orderedSongs, setOrderedSongs] = useState(() => songs);
  const deferredQuery = useDeferredValue(filters.query);
  const genres = [...new Set(songs.flatMap((song) => getFilterGenres(song.genre)))]
    .sort((first, second) => first.localeCompare(second));

  useEffect(() => {
    const timeout = window.setTimeout(() => setOrderedSongs(shuffleArray(songs)), 0);
    return () => window.clearTimeout(timeout);
  }, [songs]);

  const filteredSongs = orderedSongs.filter((song) => matchesSongFilters(song, { ...filters, query: deferredQuery }));
  const activeFilters = (Object.keys(FILTER_LABELS) as Array<keyof typeof FILTER_LABELS>)
    .filter((key) => filters[key] !== "all");
  const hasActiveFilters = Boolean(filters.query.trim() || activeFilters.length);
  const moreFilterCount = MORE_FILTER_GROUPS.filter((group) => filters[group.key] !== "all").length;
  const verbSongs = orderedSongs.filter(hasVerbPractice);
  const accessibleSongs = orderedSongs.filter((song) =>
    song.level === "Beginner" || song.level === "Elementary",
  );
  const deeperTopicSongs = orderedSongs.filter((song) =>
    DEEPER_TOPIC_SLUGS.includes(song.slug),
  );

  const clearFilters = () => {
    setFilters(EMPTY_SONG_FILTERS);
  };

  const updateFilter = (key: keyof SongFilters, value: string) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="library-catalogue" aria-labelledby="catalogue-title">
      <div className="library-toolbar">
        <div className="library-search">
          <label htmlFor="song-search">Search songs</label>
          <input
            id="song-search"
            type="search"
            value={filters.query}
            placeholder="Song, artist, topic, or learning focus"
            onChange={(event) => updateFilter("query", event.target.value)}
          />
        </div>
        <div className="filter-field">
          <label htmlFor="level-filter">Level</label>
          <select id="level-filter" value={filters.level} onChange={(event) => updateFilter("level", event.target.value)}>
            <option value="all">All levels</option>
            {USER_LEVELS.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="genre-filter">Genre</label>
          <select id="genre-filter" value={filters.genre} onChange={(event) => updateFilter("genre", event.target.value)}>
            <option value="all">All genres</option>
            {genres.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div className="library-filter-toggle-row">
          <button className="library-filter-toggle" type="button" aria-expanded={showMoreFilters} aria-controls="library-more-filters" onClick={() => setShowMoreFilters((current) => !current)}>
            More Filters {moreFilterCount > 0 && <span className="library-filter-count">{moreFilterCount}</span>}
            <span aria-hidden="true">{showMoreFilters ? "-" : "+"}</span>
          </button>
          <p>Find the grammar, language focus, or activity you need.</p>
        </div>
        <div className="library-more-filters" id="library-more-filters" hidden={!showMoreFilters}>
          {MORE_FILTER_GROUPS.map((group) => (
            <div className="filter-field" key={group.key}>
              <label htmlFor={`filter-${group.key}`}>{group.label}</label>
              <select id={`filter-${group.key}`} value={filters[group.key]} onChange={(event) => updateFilter(group.key, event.target.value)} aria-describedby={`filter-${group.key}-help`}>
                <option value="all">{group.key === "grammar" ? "Any grammar" : group.key === "languageFocus" ? "Any language focus" : "Any activity type"}</option>
                {group.options.filter((option) => songs.some((song) => song.learning[group.field].some((tag) => tag === option))).map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
              <small id={`filter-${group.key}-help`}>{group.help}</small>
            </div>
          ))}
        </div>
      </div>

      {activeFilters.length > 0 && <ul className="library-active-filters" aria-label="Active filters">
        {activeFilters.map((key) => <li key={key}>
          <button type="button" onClick={() => updateFilter(key, "all")} aria-label={`Remove ${FILTER_LABELS[key]} filter: ${filters[key]}`}>
            <span>{FILTER_LABELS[key]}: <strong>{filters[key]}</strong></span><span aria-hidden="true">&times;</span>
          </button>
        </li>)}
      </ul>}

      <div className="catalogue-status" aria-live="polite">
        <p id="catalogue-title">
          <strong>{filteredSongs.length}</strong> {filteredSongs.length === 1 ? "lesson" : "lessons"} available
        </p>
        {hasActiveFilters && (
          <button type="button" onClick={clearFilters}>Clear filters</button>
        )}
      </div>

      {filteredSongs.length ? (
        <div className="library-rails">
          {hasActiveFilters ? (
            <SongRail title="Search results" description="Lessons matching your current search and filters." songs={filteredSongs} />
          ) : (
            <>
              <SongRail title="All lessons" description="Explore every song currently available in the library." songs={orderedSongs} />
              <SongRail title="Songs with verb activities" description="Practice verb forms and tenses while listening in context." songs={verbSongs} compact />
              <SongRail title="Beginner-friendly picks" description="A comfortable place to start with clear, guided activities." songs={accessibleSongs} compact />
              <SongRail title="Deeper topics" description="Explore songs that open conversations about relationships, identity, conflict, and emotional health." songs={deeperTopicSongs} compact />
              <aside className="library-signup-card" aria-labelledby="library-signup-title">
                <div className="library-signup-card__copy">
                  <p className="library-signup-card__eyebrow">Your learning, in one place</p>
                  <h2 id="library-signup-title">Keep the music going.</h2>
                  <p>Sign in with an email link and come back to your lessons whenever you like.</p>
                </div>
                <ul className="library-signup-card__benefits">
                  <li>Pick up where you left off</li>
                  <li>See your lesson scores</li>
                  <li>Keep favorite songs and written homework</li>
                </ul>
                <div className="library-signup-card__action">
                  <AuthButton variant="library" />
                  <span>No password needed</span>
                </div>
              </aside>
            </>
          )}
        </div>
      ) : (
        <div className="library-empty">
          <span aria-hidden="true" />
          <h2>No lessons match those filters.</h2>
          <p>Try removing a filter or choosing another learning focus, level, or genre.</p>
          <button className="button button--secondary" type="button" onClick={clearFilters}>Show all songs</button>
        </div>
      )}
    </section>
  );
}
