export const packItUpVocabulary = [
  { word: "chain reaction", meaning: "when one event makes another happen, then another" },
  { word: "pack it up", meaning: "to put your things together and get ready to leave" },
  { word: "step out", meaning: "to go outside or leave a place for a short time" },
  { word: "bare", meaning: "empty or not covered" },
  { word: "martyr", meaning: "a person who suffers or dies for what they believe" },
  { word: "fire away", meaning: "to start shooting; also, to start asking questions" },
  { word: "chew", meaning: "to break food into small pieces with your teeth" },
  { word: "cuffs", meaning: "metal rings that hold a person's wrists together" },
  { word: "tune", meaning: "the music of a song" },
];

export const packItUpVerseOne = [
  { items: [{ before: "I'm alone, he", answer: "is not", after: "there", options: ["is not","aren't"] }] },
  { items: [{ before: "I don't care if you", answer: "don't", after: "care", options: ["don't","do"] }] },
  { items: [{ before: "He is in line, step right out", answer: "", after: "", options: [] }] },
  { items: [{ before: "All he wants", answer: "is", after: "some good time", options: ["is","isn't"] }] },
  { items: [{ before: "Pack it up, leave it bare", answer: "", after: "", options: [] }] },
  { items: [{ before: "I", answer: "don't", after: "want it anywhere", options: ["don't","doesn't"] }] },
  { items: [{ before: "Different tune, same old lines", answer: "", after: "", options: [] }] },
  { items: [{ before: "Here", answer: "is", after: "the hook, but I won't bite", options: ["is","isn't"] }] },
];

export const packItUpChorus = [
  "I'm not the future",
  "I'm not the past",
  "I'm just a consequence of chain reactions",
  "I'm not your teacher",
  "I'm not your task",
  "I'm just a martyr in this modern dimension",
].map((text, index) => ({ id: `pack-it-up-chorus-${index}`, text }));

export const packItUpIcons = [
  { id: "game", symbol: "🎮", ariaLabel: "game" },
  { id: "time", symbol: "⏰", ariaLabel: "time" },
  { id: "man", symbol: "👨", ariaLabel: "man" },
];

export const packItUpVerseTwo = [
  { parts: [{ before: "Deep in the floor of another memory", after: "" }] },
  { parts: [{ before: "You see the score of a", match: "game", after: "you once forgot" }] },
  { parts: [{ before: "You know you lost", after: "" }] },
  { parts: [{ before: "But if now's the", match: "time", after: "to fire away" }] },
  { parts: [{ before: "He's a", match: "man", after: "" }] },
  { parts: [{ before: "He's a martyr in the crush", after: "" }] },
];

export const packItUpOutro = [
  { items: [{ before: "Think I'll decide to open up", answer: "", after: "", options: [] }] },
  { items: [{ before: "When the meat I chew gets", answer: "tough", after: "", options: ["tough","hard"] }] },
  { items: [{ before: "If you could please release these cuffs", answer: "", after: "", options: [] }] },
  { items: [{ before: "Then I'll start to hear you", answer: "out", after: "", options: ["out","in"] }] },
  { items: [{ before: "I don't wanna save you", answer: "", after: "", options: [] }] },
  { items: [{ before: "I don't wanna take your light for me", answer: "tonight", after: "", options: ["tonight","tomorrow"] }] },
  { items: [{ before: "I don't wanna save you", answer: "", after: "", options: [] }] },
  { items: [{ before: "I don't care to take your light with me tonight", answer: "", after: "", options: [] }] },
];
