export const flowerInAHurricane = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/5dPwBWvmcbQ",
    title: "Flower in a Hurricane by Justice on YouTube",
  },
  vocabulary: [
    { word: "hurricane", meaning: "a very strong storm with fast winds and heavy rain" },
    { word: "hesitate", meaning: "to wait before doing something because you are not sure" },
    { word: "trust", meaning: "to believe someone is honest and will not hurt you" },
    { word: "walk away", meaning: "to leave a person, place, or difficult situation" },
    { word: "flood", meaning: "a lot of water covering land that is usually dry" },
    { word: "second chance", meaning: "a time when you can try again after something goes wrong" },
    { word: "last breath", meaning: "the final time someone breathes before they die" },
    { word: "now and then", meaning: "sometimes, but not very often" },
  ],
};

export const flowerInAHurricaneChorus = {
  icons: [
    { id: "love", symbol: "❤️", ariaLabel: "love" },
    { id: "pay", symbol: "💸", ariaLabel: "pay" },
    { id: "flower", symbol: "🌸", ariaLabel: "flower" },
    { id: "hurricane", symbol: "🌀", ariaLabel: "hurricane" },
    { id: "sun", symbol: "☀️", ariaLabel: "sun" },
    { id: "die", symbol: "💀", ariaLabel: "die" },
  ],
  lyrics: [
    { parts: [{ before: "Only", match: "love", after: "never hesitates", syncKey: "flower-love" }] },
    { parts: [{ before: "Only trust has a price to", match: "pay", after: "", syncKey: "flower-pay" }] },
    { parts: [
      { before: "Like a", match: "flower", after: "in a", syncKey: "flower-flower" },
      { before: "", match: "hurricane", after: "", syncKey: "flower-hurricane" },
    ] },
    { parts: [{ before: "We see the", match: "sun", after: "rise into another day" }], dividerAfter: true },
    { parts: [{ before: "Only", match: "love", after: "never hesitates", syncKey: "flower-love" }] },
    { parts: [{ before: "Only trust has a price to", match: "pay", after: "", syncKey: "flower-pay" }] },
    { parts: [
      { before: "Like a", match: "flower", after: "in a", syncKey: "flower-flower" },
      { before: "", match: "hurricane", after: "", syncKey: "flower-hurricane" },
    ] },
    { parts: [{ before: "I will", match: "die", after: "before I walk away, walk away" }] },
  ],
};

export const flowerInAHurricaneVersesOneAndTwo = {
  lyrics: [
    { items: [{ before: "Thunder", answer: "crashes", after: "", options: ["crashes", "crash"] }] },
    { items: [{ before: "Floods and flashes", answer: "", after: "", options: [] }] },
    { items: [{ before: "And my heart", answer: "is", after: "aching", options: ["is", "are"] }] },
    { items: [{ before: "Until I'm washed away once more", answer: "", after: "", options: [] }] },
    { items: [{ before: "Let's", answer: "take", after: "it fast, just like a flash", options: ["take", "took"] }] },
    { items: [{ before: "And in a moment, we'll be gone like a second chance", answer: "", after: "", options: [] }] },
    { items: [{ before: "You and me, we don't let this life", answer: "go", after: "rushing past", options: ["go", "went"] }] },
    { items: [{ before: "I'll live it to the very last breath", answer: "", after: "", options: [] }] },
  ],
};

export const flowerInAHurricaneVerseThree = {
  words: ["now and then", "coming to an end"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "You know, I think about it", answer: "now and then", after: "" }] },
    { parts: [{ before: "Is it a matter of not if, but when?", after: "" }] },
    { parts: [{ before: "Something beautiful", answer: "coming to an end", after: "" }] },
    { parts: [{ before: "And if we ever get there...", after: "" }] },
  ],
};
