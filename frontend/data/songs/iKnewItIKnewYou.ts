export const iKnewVocabulary = [
  { word: "mood ring", meaning: "a ring that changes colour with temperature and is said to show how you feel" },
  { word: "blues", meaning: "sad feelings" },
  { word: "blades of grass", meaning: "the thin, green leaves of grass" },
  { word: "matter", meaning: "to be important" },
  { word: "bare", meaning: "not covered; bare feet have no shoes or socks" },
  { word: "a while", meaning: "a period of time" },
  { word: "daze", meaning: "a feeling of being confused and not thinking clearly" },
  { word: "cry rivers", meaning: "to cry a lot because you are very sad" },
];

export const iKnewVerseOne = {
  words: ["being", "memorized", "been", "has", "seeing", "see", "memory", "have"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "I knew you", after: "" }] },
    { parts: [{ before: "Through the daze of the blades of the grass in summer", after: "" }] },
    { parts: [{ before: "Parachutes for the free fall of", answer: "being", after: "younger" }] },
    { parts: [{ before: "I", answer: "memorized", after: "the sound of your bare footsteps" }] },
    { parts: [{ before: "Running wild, it's", answer: "been", after: "a long time" }] },
    { parts: [{ before: "Life", answer: "has", after: "ways of leaving those days behind" }] },
    { parts: [{ before: "But", answer: "seeing", after: "you tonight" }] },
  ],
};

export const iKnewChorus = [
  { before: "I remembered I", prefix: "lo", answer: "ved", after: "you" },
  { before: "Came back when it", prefix: "mat", answer: "tered", after: ", I saw you" },
  { before: "", prefix: "Sta", answer: "nding", after: "there in the light of the window" },
  { before: "", prefix: "Wea", answer: "ring", after: "that same smile" },
  { before: "Man, it's", prefix: "b", answer: "een", after: "a while" },
  { before: "But I", prefix: "kn", answer: "ew", after: "it, I knew you" },
];

export const iKnewIcons = [
  { id: "ring", symbol: "💍", ariaLabel: "ring" },
  { id: "drive", symbol: "🚗", ariaLabel: "drive" },
  { id: "time", symbol: "⏰", ariaLabel: "time" },
  { id: "love", symbol: "❤️", ariaLabel: "love" },
];

export const iKnewVerseTwo = [
  { parts: [{ before: "I knew you", after: "" }] },
  { parts: [{ before: "All your blues like a mood", match: "ring", after: "changing colors" }] },
  { parts: [{ before: "You did too", after: "" }] },
  { parts: [{ before: "There were times we could fight like brothers", after: "" }] },
  { parts: [{ before: "I watched you", match: "drive", after: "around the bend for" }] },
  { parts: [{ before: "What I thought would be the last", match: "time", after: "I saw my friend" }] },
  { parts: [{ before: "But", match: "love", after: "has ways of bringing things back to life" }] },
  { parts: [{ before: 'All you said was, "Hi"', after: "" }] },
];

export const iKnewFinal = {
  words: ["rivers", "mind", "eye", "light", "window", "smile"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Oh, the", answer: "rivers", after: "I cried when we said goodbye" }] },
    { parts: [{ before: "Wondering if I'd made it up in my", answer: "mind", after: "" }] },
    { parts: [{ before: "But now you look me in the", answer: "eye", after: "" }] },
    { parts: [{ before: "And you told me I loved you", after: "" }] },
    { parts: [{ before: "Came back when it mattered, I saw you", after: "" }] },
    { parts: [{ before: "Standing there in the", answer: "light", after: "of the" }, { before: "", answer: "window", after: "" }] },
    { parts: [{ before: "Wearing that same", answer: "smile", after: "" }] },
    { parts: [{ before: "Yeah, it's been a while, oh...", after: "" }] },
    { parts: [{ before: "But I knew it, I knew you...", after: "" }] },
  ],
};
