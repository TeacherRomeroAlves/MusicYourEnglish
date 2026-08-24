export const waitingForLove = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/cHHLHGNpCSA",
    title: "Waiting For Love by Avicii on YouTube",
  },
  vocabulary: [
    { word: "will", meaning: "a strong wish or decision to do something" },
    { word: "obstacle", meaning: "something that makes progress difficult" },
    { word: "tyrant", meaning: "a cruel leader who has too much power" },
    { word: "miracle", meaning: "a wonderful event that seems impossible" },
    { word: "days of the week", meaning: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday" },
    { word: "cynical", meaning: "believing that people are usually selfish or dishonest" },
    { word: "irreplaceable", meaning: "so special that nothing else can take its place" },
  ],
};

export const waitingForLoveFirstStanzas = {
  wordBank: ["be", "have"],
  lyrics: [
    { before: "Where there is a will, there", answer: "is", after: "a way, kind of beautiful" },
    { before: "And every night", answer: "has", after: "its day, so magical" },
    { before: "And if there is love in this life, there", answer: "is", after: "no obstacle" },
    { before: "That can't", answer: "be", after: "defeated" },
    { before: "For every tyrant, a tear for the vulnerable", answer: "", after: "" },
    { before: "In every lost soul, the bones of a miracle", answer: "", after: "" },
    { before: "For every dreamer, a dream, we", answer: "are", after: "unstoppable" },
    { before: "With something to believe in", answer: "", after: "" },
  ],
};

export const waitingForLoveChorus = {
  words: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "", answer: "Monday", after: "left me broken" }] },
    { parts: [{ before: "", answer: "Tuesday", after: ", I was through with hoping" }] },
    { parts: [{ before: "", answer: "Wednesday", after: ", my empty arms were open" }] },
    { parts: [{ before: "", answer: "Thursday", after: ", waiting for love, waiting for love" }] },
    { parts: [{ before: "Thank the stars, it's", answer: "Friday", after: "" }] },
    { parts: [{ before: "I'm burning like a fire gone wild on", answer: "Saturday", after: "" }] },
    { parts: [{ before: "Guess I won't be coming to church on", answer: "Sunday", after: "" }] },
    { parts: [{ before: "I'll be waiting for love, waiting for love to come around", after: "" }] },
  ],
};

export const waitingForLoveFourthStanza = {
  icons: [
    { id: "one", symbol: "1️⃣", ariaLabel: "one" },
    { id: "blind", symbol: "🙈", ariaLabel: "blind" },
    { id: "love", symbol: "❤️", ariaLabel: "love" },
  ],
  lyrics: [
    { parts: [{ before: "We are", match: "one", after: "of a kind, irreplaceable" }] },
    { parts: [{ before: "How did I get so", match: "blind", after: "and so cynical?" }] },
    { parts: [{ before: "If there's", match: "love", after: "in this life, we're unstoppable" }] },
    { parts: [{ before: "No, we can't be defeated", after: "" }] },
  ],
};
