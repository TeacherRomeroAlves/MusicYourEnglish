export const stupidSong = {
  youtube: { embedUrl: "https://www.youtube.com/embed/Rt9tW3cMLhI", title: "stupid song by Olivia Rodrigo on YouTube" },
  vocabulary: [
    { word: "come undone", meaning: "to lose control or begin to fall apart" },
    { word: "blue", meaning: "sad or unhappy" },
    { word: "blunt", meaning: "a cigar containing cannabis" },
    { word: "aflame", meaning: "burning or on fire" },
    { word: "spark", meaning: "a tiny piece of fire or the start of a strong feeling" },
    { word: "boulevard", meaning: "a wide street, often with trees" },
    { word: "wax", meaning: "a soft material that melts when heated" },
    { word: "skip", meaning: "to choose not to do something" },
  ],
};

export const stupidSongVerseOne = {
  words: ["has never looked", "are smoking", "makes", "are", "has never been", "can't help"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "New York City", answer: "has never looked", after: "so blue" }] },
    { parts: [{ before: "My friends", answer: "are smoking", after: "blunts in the bathroom" }] },
    { parts: [{ before: "They say that honest love is a cage", after: "" }] },
    { parts: [{ before: "That", answer: "makes", after: "you feel free" }] },
    { parts: [{ before: "And all the girls at this party", answer: "are", after: "so cool" }] },
    { parts: [{ before: "That", answer: "has never been", after: "a thing that I could do" }] },
    { parts: [{ before: "But I", answer: "can't help", after: "but imagine" }] },
    { parts: [{ before: "What you say when you speak with me", after: "" }] },
  ],
};

export const stupidSongChorusPartOne = { lines: [
  { id: "spark", before: "You're a", answer: "spark in the dark", after: "" },
  { id: "aflame", before: "And my clothes all caught aflame", answer: "", after: "" },
  { id: "feel", before: "You should feel", answer: "how I feel", after: "" },
  { id: "name", before: "When somebody says your name", answer: "", after: "" },
  { id: "car", before: "I'm a", answer: "car speeding down", after: "" },
  { id: "boulevard", before: "The boulevard without a brake", answer: "", after: "" },
  { id: "want", before: "And", answer: "I want you more than", after: "" },
  { id: "song", before: "Any stupid song could ever say", answer: "", after: "" },
] };

export const stupidSongChorusPartTwo = { lyrics: [
  { items: [{ before: "I'm a heart", answer: "made", after: "of wax", options: ["made", "make"] }] },
  { items: [{ before: "And I'm", answer: "melting", after: "in the sun", options: ["melting", "melted"] }] },
  { items: [{ before: "I'm a thread on your shirt", answer: "", after: "", options: [] }] },
  { items: [{ before: "That is coming undone", answer: "", after: "", options: [] }] },
  { items: [{ before: "I feel right, I", answer: "feel", after: "wrong", options: ["feel", "feeling"] }] },
  { items: [{ before: "I feel totally insane", answer: "", after: "", options: [] }] },
  { items: [{ before: "And I", answer: "want", after: "you more than", options: ["want", "wanted"] }] },
  { items: [{ before: "Any stupid song", answer: "could", after: "ever say", options: ["could", "can"] }] },
] };

export const stupidSongVerseTwo = {
  icons: [
    { id: "park", symbol: "🌳", ariaLabel: "park" }, { id: "two", symbol: "2️⃣", ariaLabel: "two" },
    { id: "dress", symbol: "👗", ariaLabel: "dress" }, { id: "shy", symbol: "🫣", ariaLabel: "shy" },
  ],
  lyrics: [
    { parts: [{ before: "Walking through the", match: "park", after: "with my head high" }] },
    { parts: [{ before: "Past all the college girls and the drunk guys", after: "" }] },
    { parts: [{ before: "And if there is a God", after: "" }] },
    { parts: [{ before: "He's the bond that's between us", match: "two", after: "" }] },
    { parts: [{ before: "Seven nights alone and a skipped meal", after: "" }] },
    { parts: [{ before: "I'm sleeping in my", match: "dress", after: "and my high heels" }] },
    { parts: [{ before: "And I'm too", match: "shy", after: "to say what I see" }] },
    { parts: [{ before: "When I dream of you", after: "" }] },
  ],
};

export const stupidSongBridge = {
  words: ["before", "4:00", "more", "thing", "mine", "plus", "for", "my"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Every night like the one", answer: "before", after: "" }] },
    { parts: [{ before: "Dream of you from like 1:00 to", answer: "4:00", after: "" }] },
    { parts: [{ before: "Positively and truly sure", after: "" }] },
    { parts: [{ before: "Nobody's wanted somebody", answer: "more", after: "" }] },
    { parts: [{ before: "It's the", answer: "thing", after: "that I can't ignore" }] },
    { parts: [{ before: "Tell your friends that you're", answer: "mine", after: ", I'm yours" }] },
    { parts: [{ before: "With the hand on my heart, I swore", after: "" }] },
  ],
};
