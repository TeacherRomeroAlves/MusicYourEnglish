"use client";

import type { SongMeta } from "@/data/songCatalog";
import { useFavorites } from "./FavoritesProvider";

export default function FavoriteButton({ slug, variant = "card" }: { slug: SongMeta["slug"]; variant?: "card" | "lesson" }) {
  const { favorites, loading, toggleFavorite } = useFavorites();
  const isFavorite = favorites.has(slug);

  return (
    <button
      className={`favorite-button favorite-button--${variant}${isFavorite ? " is-favorite" : ""}`}
      type="button"
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "Remove from favorite songs" : "Save as a favorite song"}
      disabled={loading}
      onClick={() => toggleFavorite(slug)}
    >
      <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
      {variant === "lesson" && <strong>{isFavorite ? "Saved" : "Save song"}</strong>}
    </button>
  );
}
