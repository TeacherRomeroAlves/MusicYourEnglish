export const flowers = {
  spotify: {
    embedUrl: "https://open.spotify.com/embed/track/7DSAEUvxU8FajXtRloy8M0?utm_source=generator",
    title: "Flowers by Miley Cyrus on Spotify",
  },
  vocabulary: [
    { word: "myself", meaning: "the same person as me, used when I do something for me" },
    { word: "cherry red", meaning: "a bright, deep red color like a cherry" },
    { word: "remorse", meaning: "a strong feeling of sadness about something wrong you did" },
    { word: "regret", meaning: "to feel sorry about something you did or did not do" },
    { word: "forgive", meaning: "to stop feeling angry with someone for something they did" },
    { word: "sand", meaning: "very small grains of rock found on beaches" },
    { word: "kinda", meaning: "an informal way to say kind of or a little" },
    { word: "nails", meaning: "the hard parts at the ends of your fingers and toes" },
  ],
};

export const flowersVerseOneAndPreChorus = {
  lyrics: [
    { items: [
      { before: "We were", answer: "good", after: ", we were", options: ["good", "gold"] },
      { before: "", answer: "gold", after: "", options: ["gold", "good"] },
    ] },
    { items: [{ before: "Kinda dream that", answer: "can't", after: "be sold", options: ["can't", "cannot"] }] },
    { items: [{ before: "We were", answer: "right", after: "until we weren't", options: ["right", "left"] }] },
    { items: [{ before: "Built a", answer: "home", after: "and watched it burn", options: ["home", "house"] }] },
    { items: [
      { before: "Mm, I didn't wanna", answer: "leave", after: "you", options: ["leave", "left"] },
      { before: "I didn't wanna", answer: "lie", after: "", options: ["lie", "fight"] },
    ] },
    { items: [{ before: "Started to cry, but then remembered I...", answer: "", after: "", options: [] }] },
  ],
};

export const flowersChorus = {
  words: [
    "buy myself flowers",
    "Talk to myself for hours",
    "take myself dancing",
    "hold my own hand",
    "love me better than you can",
  ].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "I can", answer: "buy myself flowers", after: "" }] },
    { parts: [{ before: "Write my name in the sand", after: "" }] },
    { parts: [{ before: "", answer: "Talk to myself for hours", after: "" }] },
    { parts: [{ before: "Say things you don't understand", after: "" }] },
    { parts: [{ before: "I can", answer: "take myself dancing", after: "" }] },
    { parts: [{ before: "And I can", answer: "hold my own hand", after: "" }] },
    { parts: [{ before: "Yeah, I can", answer: "love me better than you can", after: "" }] },
  ],
};

export const flowersVerseTwoAndPreChorus = {
  icons: [
    { id: "nails", symbol: "💅", ariaLabel: "nails" },
    { id: "roses", symbol: "🌹", ariaLabel: "roses" },
    { id: "word", symbol: "💬", ariaLabel: "word" },
    { id: "baby", symbol: "👶", ariaLabel: "baby" },
    { id: "fight", symbol: "🥊", ariaLabel: "fight" },
    { id: "cry", symbol: "😭", ariaLabel: "cry" },
  ],
  lyrics: [
    { parts: [{ before: "Paint my", match: "nails", after: "cherry red" }] },
    { parts: [{ before: "Match the", match: "roses", after: "that you left" }] },
    { parts: [{ before: "No remorse, no regret", after: "" }] },
    { parts: [{ before: "I forgive every", match: "word", after: "you said" }] },
    { parts: [{ before: "Ooh, I didn't wanna leave you,", match: "baby", after: "" }] },
    { parts: [{ before: "I didn't wanna", match: "fight", after: "" }] },
    { parts: [{ before: "Started to", match: "cry", after: ", but then remembered I" }] },
  ],
};
