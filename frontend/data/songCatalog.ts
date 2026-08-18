export const USER_LEVELS = [
  "Beginner",
  "Elementary",
  "Pre-intermediate",
  "Intermediate+",
] as const;

export type UserLevel = (typeof USER_LEVELS)[number];

export interface SongMeta {
  slug: "count-on-me" | "golden" | "monsters" | "the-fate-of-ophelia" | "wonderwall" | "manchild" | "bad-life" | "hills-of-st-ann";
  title: string;
  artist: string;
  level: UserLevel;
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
    level: "Beginner",
    duration: "35 min",
    topic: "Friendship and support",
    genre: "Pop",
    description: "Practice the language of friendship, trust, and helping the people who matter.",
    activities: ["Emoji gaps", "Word bank", "Word choice"],
    coverImage: "/images/songs/count-on-me/cover.jpg",
    coverClass: "song-art--count-on-me",
  },
  {
    slug: "golden",
    title: "Golden",
    artist: "HUNTR/X",
    level: "Elementary",
    duration: "40 min",
    topic: "Confidence and inner strength",
    genre: "K-pop",
    description: "Explore confidence, identity, and the language we use to talk about becoming stronger.",
    activities: ["Emoji gaps", "Word choice", "Sentence order"],
    coverImage: "/images/songs/golden/cover.jpg",
    coverClass: "song-art--golden",
  },
  {
    slug: "monsters",
    title: "Monsters",
    artist: "All Time Low",
    level: "Pre-intermediate",
    duration: "45 min",
    topic: "Fear and difficult emotions",
    genre: "Pop punk",
    description: "Work with real language for intense feelings, difficult choices, and personal reflection.",
    activities: ["Pronouns", "Emoji gaps", "Present continuous"],
    coverImage: "/images/songs/monsters/cover.jpg",
    coverClass: "song-art--monsters",
  },
  {
    slug: "the-fate-of-ophelia",
    title: "The Fate of Ophelia",
    artist: "Taylor Swift",
    level: "Pre-intermediate",
    duration: "45 min",
    topic: "Love and fate",
    genre: "Pop",
    description: "Explore how the song connects love, destiny, loyalty, and the power to change another person's life.",
    activities: ["Word choice", "Emoji gaps", "Sentence order"],
    coverImage: "/images/songs/the-fate-of-ophelia/cover.webp",
    coverClass: "song-art--the-fate-of-ophelia",
  },
  {
    slug: "wonderwall",
    title: "Wonderwall",
    artist: "Oasis",
    level: "Beginner",
    duration: "35 min",
    topic: "Hope and relationships",
    genre: "Rock",
    description: "Practice everyday words while exploring hope, uncertainty, and an important relationship.",
    activities: ["Word bank", "Emoji gaps", "Sentence order"],
    coverImage: "/images/songs/wonderwall/cover.jpg",
    coverClass: "song-art--wonderwall",
  },
  {
    slug: "manchild",
    title: "Manchild",
    artist: "Sabrina Carpenter",
    level: "Elementary",
    duration: "40 min",
    topic: "Dating and maturity",
    genre: "Pop",
    description: "Practice verb tenses and everyday vocabulary while discussing dating, maturity, and responsibility.",
    activities: ["Tense choice", "Unscramble", "Missing words"],
    coverImage: "/images/songs/manchild/cover.jpg",
    coverClass: "song-art--manchild",
  },
  {
    slug: "bad-life",
    title: "Bad Life",
    artist: "Bring Me the Horizon and Sigrid",
    level: "Intermediate+",
    duration: "50 min",
    topic: "Mental health and resilience",
    genre: "Alternative rock",
    description: "Explore language about difficult emotions, resilience, and remembering that a bad day is not a bad life.",
    activities: ["Word bank", "Word ordering", "Unscramble"],
    coverImage: "/images/songs/bad-life/cover.jpg",
    coverClass: "song-art--bad-life",
  },
  {
    slug: "hills-of-st-ann",
    title: "Hills of St. Ann",
    artist: "Stephen Marley",
    level: "Elementary",
    duration: "40 min",
    topic: "Home, culture, and spirituality",
    genre: "Reggae",
    description: "Explore simple language about nature, home, faith, and Jamaican identity through reggae.",
    activities: ["Emoji gaps", "Word choice", "Missing words"],
    coverImage: "/images/songs/hills-of-st-ann/cover.png",
    coverClass: "song-art--hills-of-st-ann",
  },
];

export function getSongMeta(slug: SongMeta["slug"]) {
  const song = songCatalog.find((item) => item.slug === slug);
  if (!song) throw new Error(`Unknown song: ${slug}`);
  return song;
}

export function getSongMetaByTitle(title: string) {
  return songCatalog.find((song) => song.title === title);
}
