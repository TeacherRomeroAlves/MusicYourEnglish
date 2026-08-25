export const USER_LEVELS = [
  "Beginner",
  "Elementary",
  "Pre-intermediate",
  "Intermediate+",
] as const;

export type UserLevel = (typeof USER_LEVELS)[number];

export interface SongMeta {
  slug: "count-on-me" | "golden" | "monsters" | "the-fate-of-ophelia" | "wonderwall" | "manchild" | "bad-life" | "hills-of-st-ann" | "happy" | "friday-im-in-love" | "ordinary" | "nice-to-meet-you" | "waiting-for-love" | "cold" | "im-pretty";
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
    activities: ["Emoji gaps", "Simple verbs", "Vocabulary"],
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
    activities: ["Two-letter words", "Emoji gaps", "Sentence order"],
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
    activities: ["Emoji gaps", "Pronouns", "Present continuous"],
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
    activities: ["Two-letter words", "Emoji gaps", "Verb forms"],
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
    activities: ["Emoji gaps", "Sentence order", "Vocabulary"],
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
    activities: ["Simple present", "Simple past", "Missing words"],
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
    activities: ["Vocabulary", "Word order", "Idioms"],
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
    activities: ["Emoji gaps", "Missing words", "Vocabulary"],
    coverImage: "/images/songs/hills-of-st-ann/cover.png",
    coverClass: "song-art--hills-of-st-ann",
  },
  {
    slug: "happy",
    title: "Happy",
    artist: "NF",
    level: "Intermediate+",
    duration: "50 min",
    topic: "Happiness and asking for help",
    genre: "Hip-hop",
    description: "Explore honest language about mental health, asking for help, and imagining a happier life.",
    activities: ["Vocabulary", "Sentence order", "Relative clauses"],
    coverImage: "/images/songs/happy/cover.png",
    coverClass: "song-art--happy",
  },
  {
    slug: "friday-im-in-love",
    title: "Friday I'm in Love",
    artist: "The Cure",
    level: "Beginner",
    duration: "40 min",
    topic: "Days of the week and positive feelings",
    genre: "Alternative rock",
    description: "Practice days, colors, and simple descriptive words through an upbeat song about Friday.",
    activities: ["Days of the week", "Adjectives", "Colors"],
    coverImage: "/images/songs/friday-im-in-love/cover.jpg",
    coverClass: "song-art--friday-im-in-love",
  },
  {
    slug: "ordinary",
    title: "Ordinary",
    artist: "Alex Warren",
    level: "Pre-intermediate",
    duration: "45 min",
    topic: "Love and extraordinary connections",
    genre: "Pop",
    description: "Practice word formation and mixed verb forms while exploring a love that makes ordinary life feel special.",
    activities: ["Emoji gaps", "Word formation", "Mixed verb forms"],
    coverImage: "/images/songs/ordinary/cover.jpg",
    coverClass: "song-art--ordinary",
  },
  {
    slug: "nice-to-meet-you",
    title: "Nice To Meet You",
    artist: "Myles Smith",
    level: "Beginner",
    duration: "40 min",
    topic: "Meeting people and enjoying the moment",
    genre: "Folk pop",
    description: "Practice simple words and expressions through a song about meeting someone new and dancing together.",
    activities: ["Could", "Ain't", "Word formation"],
    coverImage: "/images/songs/nice-to-meet-you/cover.jpg",
    coverClass: "song-art--nice-to-meet-you",
  },
  {
    slug: "waiting-for-love",
    title: "Waiting For Love",
    artist: "Avicii",
    level: "Beginner",
    duration: "40 min",
    topic: "Love, hope, and perseverance",
    genre: "Electronic dance music",
    description: "Practice days of the week and simple verb forms through a hopeful song about waiting for love.",
    activities: ["Days of the week", "Be and have", "Emoji gaps"],
    coverImage: "/images/songs/waiting-for-love/cover.jpg",
    coverClass: "song-art--waiting-for-love",
  },
  {
    slug: "cold",
    title: "Cold",
    artist: "BigXthaPlug feat. Post Malone",
    level: "Pre-intermediate",
    duration: "45 min",
    topic: "Love, distance, and personal growth",
    genre: "Country rap",
    description: "Practice informal pronunciation and complete clauses through a song about emotional distance and learning to love.",
    activities: ["-ing pronunciation", "Restricted letters", "Clause gaps"],
    coverImage: "/images/songs/cold/cover.jpg",
    coverClass: "song-art--cold",
  },
  {
    slug: "im-pretty",
    title: "I'm Pretty",
    artist: "KATSEYE",
    level: "Beginner",
    duration: "40 min",
    topic: "Healing, confidence, and self-image",
    genre: "Pop",
    description: "Practice phrasal verbs and simple vocabulary through a song about heartbreak, healing, and hiding difficult feelings.",
    activities: ["Phrasal verbs", "Emoji gaps", "Vocabulary"],
    coverImage: "/images/songs/im-pretty/cover.jpg",
    coverClass: "song-art--im-pretty",
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
