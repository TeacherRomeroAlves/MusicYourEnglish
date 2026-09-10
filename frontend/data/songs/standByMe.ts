export const standByMe = {
  spotify: {
    embedUrl: "https://open.spotify.com/embed/track/0ESte8aeUq4grkBsxE3ZGD?utm_source=generator",
    title: "Stand by Me by Ben E. King on Spotify",
  },
  vocabulary: [
    { word: "stand by someone", meaning: "to stay with and support someone during a difficult time" },
    { word: "afraid", meaning: "feeling fear or worry" },
    { word: "tumble", meaning: "to fall suddenly or quickly" },
    { word: "crumble", meaning: "to break into many small pieces" },
    { word: "shed a tear", meaning: "to cry or let a tear fall from your eye" },
    { word: "as long as", meaning: "only if something continues to happen or be true" },
    { word: "out of sight", meaning: "in a place where someone or something cannot be seen" },
    { word: "darling", meaning: "a loving name for someone who is very important to you" },
  ],
};

export const standByMeVerseOne = {
  lyrics: [
    { items: [{ before: "When the night", answer: "has", after: "come", options: ["has", "have"] }] },
    { items: [{ before: "And the land", answer: "is", after: "dark", options: ["is", "are"] }] },
    { items: [{ before: "And the moon is the only light we", answer: "will", after: "see", options: ["will", "are"] }] },
    { items: [{ before: "No, I", answer: "won't", after: "be afraid", options: ["won't", "will"], syncKey: "stand-by-me-wont" }] },
    { items: [{ before: "Oh, I", answer: "won't", after: "be afraid", options: ["won't", "will"], syncKey: "stand-by-me-wont" }] },
    { items: [{ before: "Just as long as you stand", answer: "", after: "", options: [] }] },
    { items: [{ before: "Stand by me", answer: "", after: "", options: [] }] },
    { items: [{ before: "So darlin', darlin', stand by me", answer: "", after: "", options: [] }] },
    { items: [{ before: "Oh, stand by me", answer: "", after: "", options: [] }] },
  ],
};

export const standByMeVerseTwo = {
  icons: [
    { id: "sky", symbol: "🌤️", ariaLabel: "blue sky" },
    { id: "mountain", symbol: "⛰️", ariaLabel: "mountain" },
    { id: "sea", symbol: "🌊", ariaLabel: "sea" },
    { id: "tear", symbol: "💧", ariaLabel: "tear" },
    { id: "stand", symbol: "🧍", ariaLabel: "stand" },
  ],
  lyrics: [
    { parts: [{ before: "If the", match: "sky", after: "that we look upon" }] },
    { parts: [{ before: "Should tumble and fall", after: "" }] },
    { parts: [{ before: "Or the", match: "mountain", after: "should crumble to the" }, { before: "", match: "sea", after: "" }] },
    { parts: [{ before: "I won't cry, I won't cry", after: "" }] },
    { parts: [{ before: "No, I won't shed a", match: "tear", after: "" }] },
    { parts: [{ before: "Just as long as you", match: "stand", after: "" }] },
    { parts: [{ before: "Stand by me", after: "" }] },
  ],
};
