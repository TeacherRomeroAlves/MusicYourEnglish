"use client";

import { useDeferredValue, useEffect, useRef, useState } from "react";
import SongCard from "./SongCard";
import { USER_LEVELS, type SongMeta } from "@/data/songCatalog";
import { shuffleArray } from "@/lib/shuffleArray";

const FILTER_GENRE_GROUPS: Record<string, string> = {
  "Alternative rock": "Rock",
  "Country rap": "Hiphop/Rap",
  "Folk pop": "Pop",
  "Hip-hop": "Hiphop/Rap",
  "Pop punk": "Rock",
};

function getFilterGenre(genre: string) {
  return FILTER_GENRE_GROUPS[genre] ?? genre;
}

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
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");
  const [genre, setGenre] = useState("all");
  const [orderedSongs, setOrderedSongs] = useState(() => songs);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const genres = [...new Set(songs.map((song) => getFilterGenre(song.genre)))]
    .sort((first, second) => first.localeCompare(second));

  useEffect(() => {
    const timeout = window.setTimeout(() => setOrderedSongs(shuffleArray(songs)), 0);
    return () => window.clearTimeout(timeout);
  }, [songs]);

  const filteredSongs = orderedSongs.filter((song) => {
    const matchesQuery = !deferredQuery || [song.title, song.artist, song.topic]
      .some((value) => value.toLowerCase().includes(deferredQuery));
    const matchesLevel = level === "all" || song.level === level;
    const matchesGenre = genre === "all" || getFilterGenre(song.genre) === genre;
    return matchesQuery && matchesLevel && matchesGenre;
  });
  const hasActiveFilters = Boolean(query || level !== "all" || genre !== "all");
  const loveSongs = orderedSongs.filter((song) =>
    /love|relationship|friendship|dating|connection/i.test(`${song.topic} ${song.description}`),
  );
  const verbSongs = orderedSongs.filter((song) =>
    song.activities.some((activity) => /verb|present|past|continuous|be and have|word formation/i.test(activity)),
  );
  const accessibleSongs = orderedSongs.filter((song) =>
    song.level === "Beginner" || song.level === "Elementary",
  );

  const clearFilters = () => {
    setQuery("");
    setLevel("all");
    setGenre("all");
  };

  return (
    <section className="library-catalogue" aria-labelledby="catalogue-title">
      <div className="library-toolbar">
        <div className="library-search">
          <label htmlFor="song-search">Search songs</label>
          <input
            id="song-search"
            type="search"
            value={query}
            placeholder="Song, artist, or topic"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="filter-field">
          <label htmlFor="level-filter">Level</label>
          <select id="level-filter" value={level} onChange={(event) => setLevel(event.target.value)}>
            <option value="all">All levels</option>
            {USER_LEVELS.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="genre-filter">Genre</label>
          <select id="genre-filter" value={genre} onChange={(event) => setGenre(event.target.value)}>
            <option value="all">All genres</option>
            {genres.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
      </div>

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
              <SongRail title="Songs to discuss love" description="Use music to talk about love, friendship, dating, and relationships." songs={loveSongs} compact />
              <SongRail title="Songs with verb activities" description="Practice verb forms and tenses while listening in context." songs={verbSongs} compact />
              <SongRail title="Beginner-friendly picks" description="A comfortable place to start with clear, guided activities." songs={accessibleSongs} compact />
            </>
          )}
        </div>
      ) : (
        <div className="library-empty">
          <span aria-hidden="true" />
          <h2>No lessons match those filters.</h2>
          <p>Try another level, genre, or search term.</p>
          <button className="button button--secondary" type="button" onClick={clearFilters}>Show all songs</button>
        </div>
      )}
    </section>
  );
}
