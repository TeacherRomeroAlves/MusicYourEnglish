import type { SongMeta } from "@/data/songCatalog";
import type { LessonLearningTags } from "@/data/lessonTaxonomy";

export interface SongFilters {
  query: string;
  level: string;
  genre: string;
  grammar: string;
  languageFocus: string;
  activityType: string;
}

export const EMPTY_SONG_FILTERS: SongFilters = {
  query: "", level: "all", genre: "all", grammar: "all", languageFocus: "all", activityType: "all",
};

const GENRE_GROUPS: Record<string, string[]> = {
  "Alt. Rock": ["Rock"],
  "Alternative rock": ["Rock"],
  "Country rap": ["Country", "Hiphop/Rap"],
  "Electronic / Pop-rock": ["Eletronic music", "Pop", "Rock"],
  "Folk pop": ["Pop"],
  "Hip-hop": ["Hiphop/Rap"],
  "Pop punk": ["Rock"],
  "Pop rap": ["Pop", "Hiphop/Rap"],
  "Punk rock": ["Rock"],
};

export function getFilterGenres(genre: string) {
  return GENRE_GROUPS[genre] ?? [genre];
}

function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function matchesSongFilters(song: SongMeta, filters: SongFilters) {
  const tags = song.learning;
  const haystack = normalizeSearch([
    song.title, song.artist, song.topic, song.genre,
    ...tags.grammar, ...tags.languageFocus, ...tags.activityTypes,
  ].join(" "));
  const terms = normalizeSearch(filters.query).trim().split(/\s+/).filter(Boolean);
  return terms.every((term) => haystack.includes(term))
    && (filters.level === "all" || song.level === filters.level)
    && (filters.genre === "all" || getFilterGenres(song.genre).includes(filters.genre))
    && (filters.grammar === "all" || tags.grammar.some((tag) => tag === filters.grammar))
    && (filters.languageFocus === "all" || tags.languageFocus.some((tag) => tag === filters.languageFocus))
    && (filters.activityType === "all" || tags.activityTypes.some((tag) => tag === filters.activityType));
}

const VERB_TOPICS = new Set<LessonLearningTags["grammar"][number]>([
  "Simple present", "Simple past", "Present continuous", "Present perfect",
  "Present perfect continuous", "Future forms", "Verb be", "There is / There are",
  "Can", "Could", "Would", "Conditionals", "Gerunds and infinitives",
]);

export function hasVerbPractice(song: SongMeta) {
  return song.learning.grammar.some((topic) => VERB_TOPICS.has(topic));
}

export function getLessonHighlights(song: SongMeta) {
  return [
    { group: "Grammar", label: song.learning.grammar[0] },
    { group: "Language focus", label: song.learning.languageFocus[0] },
    { group: "Activity type", label: song.learning.activityTypes[0] },
  ].filter((tag) => Boolean(tag.label));
}
