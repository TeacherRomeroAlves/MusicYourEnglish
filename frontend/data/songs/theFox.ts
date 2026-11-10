export const theFoxVocabulary = [
  { word: "seal", meaning: "an animal that swims in the sea and has flippers" },
  { word: "tweet, blub, toot", meaning: "words that sound like a bird, bubbles, or a horn" },
  { word: "disguise", meaning: "clothes or a look that hide who you are" },
  { word: "fur", meaning: "the hair on an animal's body" },
  { word: "mice", meaning: "more than one mouse" },
  { word: "tiny", meaning: "very small" },
  { word: "stand still", meaning: "to stand without moving" },
  { word: "Morse code", meaning: "a way to send messages with short and long sounds or signals" },
  { word: "the woods", meaning: "a place with many trees" },
];

export const theFoxIcons = [
  { id: "cat", symbol: "🐱", ariaLabel: "cat" },
  { id: "mouse", symbol: "🐭", ariaLabel: "mouse" },
  { id: "frog", symbol: "🐸", ariaLabel: "frog" },
  { id: "elephant", symbol: "🐘", ariaLabel: "elephant" },
  { id: "fish", symbol: "🐟", ariaLabel: "fish" },
  { id: "fox", symbol: "🦊", ariaLabel: "fox" },
];

export const theFoxVerseOne = [
  {"parts": [{"before": "Dog goes woof, ", "after": "goes meow", "match": "cat"}]},
  {"parts": [{"before": "Bird goes tweet, and", "after": "goes squeak", "match": "mouse"}]},
  {"parts": [{"before": "Cow goes moo.", "after": "goes croak, and the", "match": "frog"}, {"before": "", "after": "goes toot", "match": "elephant"}]},
  {"parts": [{"before": "Ducks say quack and", "after": "go blub, and the seal goes ow ow ow", "match": "fish"}]},
  {"parts": [{"before": "But there's one sound that no one knows...", "after": ""}]},
  {"parts": [{"before": "What does the", "after": "say?", "match": "fox"}]},
  {"parts": [{"before": "What the fox say?", "after": ""}]},
  {"parts": [{"before": "?????????", "after": ""}]},
];

export const theFoxVerseTwo = {
  words: ["blue", "pointy", "Tiny", "red", "beautiful", "friendly"].map((word) => ({ word })),
  lyrics: [
    {"parts": [{"before": "Big", "answer": "blue", "after": "eyes, "}, {"before": "", "answer": "pointy", "after": "nose, chasing mice, and digging holes"}]},
    {"parts": [{"before": "", "answer": "Tiny", "after": "paws, up the hill, suddenly you're standing still"}]},
    {"parts": [{"before": "Your fur is", "answer": "red", "after": ", so"}, {"before": "", "answer": "beautiful", "after": ", like an angel in disguise"}]},
    {"parts": [{"before": "But if you meet a", "answer": "friendly", "after": "horse, will you communicate by morse?"}]},
    {"parts": [{"before": "How will you speak to that horse?", "after": ""}]},
    {"parts": [{"before": "What does the fox say?!", "after": ""}]},
    {"parts": [{"before": "What the fox say?", "after": ""}]},
    {"parts": [{"before": "?????????", "after": ""}]},
  ],
};

export const theFoxVerseThree = [
  {"items": [{"before": "The secret of the fox, ancient mystery", "after": "", "answer": "", "options": []}]},
  {"items": [{"before": "Somewhere deep in the woods, I know you're hiding", "after": "", "answer": "", "options": []}]},
  {"items": [{"before": "", "after": "is your sound?", "answer": "What", "options": ["What", "Will"]}, {"before": "", "after": "we ever know?", "answer": "Will", "options": ["Will", "What"]}]},
  {"items": [{"before": "", "after": "always be a mystery", "answer": "Will", "options": ["Will", "Want"]}, {"before": "", "after": "do you say?", "answer": "what", "options": ["what", "Will"]}]},
  {"items": [{"before": "You're my guardian angel hiding in the woods", "after": "", "answer": "", "options": []}]},
  {"items": [{"before": "", "after": "is your sound?", "answer": "What", "options": ["What", "Will"]}]},
  {"items": [{"before": "", "after": "we ever know?", "answer": "Will", "options": ["Will", "Want"]}]},
  {"items": [{"before": "I", "after": "to know!", "answer": "want", "options": ["want", "will"]}]},
];
