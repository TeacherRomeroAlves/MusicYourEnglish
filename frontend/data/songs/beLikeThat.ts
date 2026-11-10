export const beLikeThatVocabulary = [
  { word: "wonder", meaning: "to think about something you want to know" },
  { word: "be in someone's shoes", meaning: "to be in the same situation as another person" },
  { word: "would rather", meaning: "would like one thing more than another" },
  { word: "hold onto", meaning: "to keep something and not let it go" },
  { word: "whole", meaning: "all of something" },
];

export const beLikeThatVerseOne = {
  words: ["being", "wonders", "can't", "left", "says", "be", "tell", "wanted"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "He spent his whole life", answer: "being", after: "too young" }] },
    { parts: [{ before: "To live the life that's in his dreams.", after: "" }] },
    { parts: [{ before: "And at night he lies awake and he", answer: "wonders", after: "" }] },
    { parts: [{ before: "Why", answer: "can't", after: "that be me?" }] },
    { parts: [{ before: "'Cause in his life he is filled with all these good intentions", after: "" }] },
    { parts: [{ before: "He's", answer: "left", after: "a lot of things he'd rather not mention right now" }] },
    { parts: [{ before: "But just before he", answer: "says", after: "goodnight" }] },
    { parts: [{ before: "He looks up with a little smile at me and he says", after: "" }] },
  ],
};

export const beLikeThatChorus = {
  items: [
    "If I could be like that",
    "I would give anything",
    "Just to live one day in those shoes",
    "If I could be like that",
    "What would I do?",
  ].map((text, index) => ({ id: `be-like-that-chorus-${index}`, text })),
  notes: [
    "1st chorus: Now and dreams we run",
    "2nd chorus: I'm falling into the same dreams / We run away",
    "3rd chorus: I feel I'm falling in, to this again",
  ],
};

export const beLikeThatVerseTwo = {
  icons: [
    { id: "park", symbol: "🏞️", ariaLabel: "park" },
    { id: "people", symbol: "👥", ariaLabel: "people" },
    { id: "home", symbol: "🏠", ariaLabel: "home" },
    { id: "bed", symbol: "🛏️", ariaLabel: "bed" },
    { id: "street", symbol: "🛣️", ariaLabel: "street" },
  ],
  lyrics: [
    { parts: [{ before: "She spends her days up in the North", match: "park", after: "" }] },
    { parts: [{ before: "Watching the", match: "people", after: "as they pass" }] },
    { parts: [{ before: "And all she wants is just a little piece of this dream", after: "" }] },
    { parts: [{ before: "Is that too much to ask?", after: "" }] },
    { parts: [{ before: "With a safe", match: "home", after: ", and a warm" }, { before: "", match: "bed", after: "" }] },
    { parts: [{ before: "On a quiet little", match: "street", after: "" }] },
    { parts: [{ before: "All she wants is just that something to hold onto", after: "" }] },
    { parts: [{ before: "That's all she needs", after: "" }] },
  ],
};
