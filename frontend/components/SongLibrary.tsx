"use client";

import { useDeferredValue, useState } from "react";
import SongCard from "./SongCard";
import { USER_LEVELS, type SongMeta } from "@/data/songCatalog";

export default function SongLibrary({ songs }: { songs: SongMeta[] }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");
  const [genre, setGenre] = useState("all");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const genres = [...new Set(songs.map((song) => song.genre))];

  const filteredSongs = songs.filter((song) => {
    const matchesQuery = !deferredQuery || [song.title, song.artist, song.topic]
      .some((value) => value.toLowerCase().includes(deferredQuery));
    const matchesLevel = level === "all" || song.level === level;
    const matchesGenre = genre === "all" || song.genre === genre;
    return matchesQuery && matchesLevel && matchesGenre;
  });

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
        {(query || level !== "all" || genre !== "all") && (
          <button type="button" onClick={clearFilters}>Clear filters</button>
        )}
      </div>

      {filteredSongs.length ? (
        <div className="library-grid">
          {filteredSongs.map((song) => <SongCard key={song.slug} song={song} />)}
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
