export interface SongMeta {
  slug: "count-on-me" | "golden" | "monsters" | "the-fate-of-ophelia";
  title: string;
  artist: string;
  level: string;
  duration: string;
  topic: string;
  genre: string;
  description: string;
  activities: string[];
  coverImage: string;
  coverClass: string;
}

export const songCatalog: SongMeta[] = [
  {
    slug: "count-on-me",
    title: "Count on Me",
    artist: "Bruno Mars",
    level: "A2–B1",
    duration: "35 min",
    topic: "Friendship and support",
    genre: "Pop",
    description: "Practice the language of friendship, trust, and helping the people who matter.",
    activities: ["Nouns", "Verbs", "Word choice"],
    coverImage: "/images/songs/count-on-me/cover.jpg",
    coverClass: "song-art--count-on-me",
  },
  {
    slug: "golden",
    title: "Golden",
    artist: "HUNTR/X",
    level: "A2–B1",
    duration: "40 min",
    topic: "Confidence and inner strength",
    genre: "K-pop",
    description: "Explore confidence, identity, and the language we use to talk about becoming stronger.",
    activities: ["Nouns", "Verbs", "Word order"],
    coverImage: "/images/songs/golden/cover.jpg",
    coverClass: "song-art--golden",
  },
  {
    slug: "monsters",
    title: "Monsters",
    artist: "All Time Low",
    level: "B1–B2",
    duration: "45 min",
    topic: "Fear and difficult emotions",
    genre: "Pop punk",
    description: "Work with real language for intense feelings, difficult choices, and personal reflection.",
    activities: ["Pronouns", "Present continuous", "Word choice"],
    coverImage: "/images/songs/monsters/cover.jpg",
    coverClass: "song-art--monsters",
  },
  {
    slug: "the-fate-of-ophelia",
    title: "The Fate of Ophelia",
    artist: "Taylor Swift",
    level: "B1+",
    duration: "45 min",
    topic: "Love and fate",
    genre: "Pop",
    description: "Explore how the song connects love, destiny, loyalty, and the power to change another person's life.",
    activities: ["Prepositions", "Verb forms", "Word order"],
    coverImage: "/images/songs/the-fate-of-ophelia/cover.webp",
    coverClass: "song-art--the-fate-of-ophelia",
  },
];

export function getSongMeta(slug: SongMeta["slug"]) {
  const song = songCatalog.find((item) => item.slug === slug);
  if (!song) throw new Error(`Unknown song: ${slug}`);
  return song;
}
