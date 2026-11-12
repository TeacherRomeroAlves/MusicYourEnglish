import type { SongMeta } from "@/data/songCatalog";
import { SONG_SORT_METADATA } from "@/data/songSortMetadata";

export const SONG_SORT_OPTIONS = [
  { value: "random", label: "Random order" },
  { value: "recent", label: "Recently added" },
  { value: "newest", label: "Newest releases" },
  { value: "oldest", label: "Oldest releases" },
  { value: "az", label: "A to Z" },
] as const;

export type SongSortOrder = (typeof SONG_SORT_OPTIONS)[number]["value"];
const titleOrder = new Intl.Collator("en", { sensitivity: "base", numeric: true });

export function sortSongs(songs: readonly SongMeta[], order: SongSortOrder): SongMeta[] {
  // The caller supplies a stable shuffled sequence for random order.
  if (order === "random") return [...songs];
  return [...songs].sort((first, second) => {
    const a = SONG_SORT_METADATA[first.slug];
    const b = SONG_SORT_METADATA[second.slug];
    const alphabetical = titleOrder.compare(first.title, second.title) || first.slug.localeCompare(second.slug);
    if (order === "az") return alphabetical;
    if (order === "recent") return Date.parse(b.addedAt) - Date.parse(a.addedAt) || alphabetical;
    if (a.releaseYear === null) return b.releaseYear === null ? alphabetical : 1;
    if (b.releaseYear === null) return -1;
    const difference = a.releaseYear - b.releaseYear;
    return (order === "newest" ? -difference : difference) || alphabetical;
  });
}
