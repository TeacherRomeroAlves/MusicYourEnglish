"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import type { SongMeta } from "@/data/songCatalog";
import { shuffleArray } from "@/lib/shuffleArray";

export default function LibraryPreviewVisual({ songs }: { songs: SongMeta[] }) {
  const [featuredSongs, setFeaturedSongs] = useState(() => songs.slice(0, 3));

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setFeaturedSongs(shuffleArray(songs).slice(0, 3));
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [songs]);

  return (
    <div className="library-preview__visual">
      <span className="library-preview__label">Now in the library</span>
      <div className="library-cover-stack" aria-label="A selection of available song lessons">
        {featuredSongs.map((song, index) => (
          <Link
            href={`/songs/${song.slug}`}
            className="library-cover"
            key={song.slug}
            aria-label={`Open the ${song.title} lesson`}
            style={{ "--cover-index": index } as CSSProperties}
          >
            <Image
              src={song.coverImage}
              alt={`${song.title} by ${song.artist} cover artwork`}
              fill
              sizes="220px"
            />
          </Link>
        ))}
      </div>
      <p>
        <strong>{songs.length} interactive lessons</strong>
        <span>Reload the page to discover another selection.</span>
      </p>
    </div>
  );
}
