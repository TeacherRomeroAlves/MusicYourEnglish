export const fridayImInLove = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/mGgMZpGYiy8",
    title: "Friday I'm in Love by The Cure on YouTube",
  },
  vocabulary: [
    { word: "days of the week", meaning: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday" },
    { word: "fall apart", meaning: "to break or become emotionally upset" },
    { word: "instead", meaning: "in place of something else" },
    { word: "dress up", meaning: "to wear special or formal clothes" },
    { word: "frown", meaning: "an unhappy expression on your face" },
    { word: "sleek", meaning: "smooth, neat, and stylish" },
    { word: "shriek", meaning: "a short, loud, high sound" },
    { word: "gorgeous", meaning: "very beautiful or attractive" },
  ],
};

const repeatedDays = [
  "Monday", "Monday", "Tuesday", "Tuesday", "Wednesday",
  "Wednesday", "Thursday", "Thursday", "Friday", "Friday",
];

export const fridayFirstStanza = {
  words: repeatedDays.map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "I don't care if", answer: "Monday", after: "is blue" }] },
    { parts: [
      { before: "", answer: "Tuesday", after: "is grey and" },
      { before: "", answer: "Wednesday", after: "too" },
    ] },
    { parts: [{ before: "", answer: "Thursday", after: ", I don't care about you" }] },
    { parts: [{ before: "It's", answer: "Friday", after: ", I'm in love" }] },
    { parts: [{ before: "", answer: "Monday", after: "you can fall apart" }] },
    { parts: [
      { before: "", answer: "Tuesday", after: "," },
      { before: "", answer: "Wednesday", after: "break my heart" },
    ] },
    { parts: [{ before: "Oh,", answer: "Thursday", after: "doesn't even start" }] },
    { parts: [{ before: "It's", answer: "Friday", after: ", I'm in love" }] },
  ],
};

export const fridaySecondStanza = {
  lyrics: [
    { items: [{ before: "Saturday,", answer: "wait", after: "", options: ["wait", "late"], syncKey: "friday-wait" }] },
    { items: [{ before: "And Sunday always comes too", answer: "late", after: "", options: ["late", "wait"], syncKey: "friday-late" }] },
    { items: [{ before: "But Friday, never hesitate", answer: "", after: "", options: [] }] },
    { items: [{ before: "I don't care if Monday's", answer: "black", after: "", options: ["black", "back"] }] },
    { items: [{ before: "Tuesday, Wednesday, heart", answer: "attack", after: "", options: ["attack", "effect"] }] },
    { items: [{ before: "Thursday, never looking", answer: "back", after: "", options: ["back", "black"] }] },
    { items: [{ before: "It's Friday, I'm in love", answer: "", after: "", options: [] }] },
  ],
};

export const fridayThirdStanza = {
  icons: [
    { id: "head", symbol: "🙂", ariaLabel: "head" },
    { id: "bed", symbol: "🛏️", ariaLabel: "bed" },
    { id: "walls", symbol: "🧱", ariaLabel: "walls" },
  ],
  iconLyrics: [
    { parts: [{ before: "Monday you can hold your ", match: "head", after: "" }] },
    { parts: [{ before: "Tuesday, Wednesday, stay in ", match: "bed", after: "" }] },
    { parts: [{ before: "Or Thursday watch the ", match: "walls", after: " instead" }] },
    { parts: [{ before: "It's Friday, I'm in love", after: "" }] },
  ],
  choiceLyrics: [
    { items: [{ before: "Saturday,", answer: "wait", after: "", options: ["wait", "late"], syncKey: "friday-wait" }] },
    { items: [{ before: "And Sunday always comes too", answer: "late", after: "", options: ["late", "wait"], syncKey: "friday-late" }] },
    { items: [{ before: "But Friday, never hesitate", answer: "", after: "", options: [] }] },
  ],
};

const plainLine = (text: string) => ({
  parts: [{ before: text, option: { word: "", isMissing: false }, after: "" }],
});

export const fridayFourthStanza = {
  lyrics: [
    { parts: [{ before: "Dressed up to the", option: { word: "green", isMissing: true }, after: "eyes" }] },
    { parts: [{ before: "It's a", option: { word: "wonderful", isMissing: false }, after: "surprise" }] },
    plainLine("To see your shoes and your spirits rise"),
    plainLine("Throw out your frown"),
    { parts: [{ before: "And just", option: { word: "beautiful", isMissing: true }, after: "smile at the sound" }] },
    plainLine("Sleek as a shriek, spinning 'round and 'round"),
    { parts: [{ before: "Always take a", option: { word: "big", isMissing: false }, after: "bite" }] },
    { parts: [{ before: "It's such a", option: { word: "gorgeous", isMissing: false }, after: "sight" }] },
    { parts: [{ before: "To see you eat in the middle of the", option: { word: "dark", isMissing: true }, after: "night" }] },
    plainLine("You can never get enough"),
    plainLine("Enough of this stuff"),
    plainLine("It's Friday, I'm in love"),
  ],
};
