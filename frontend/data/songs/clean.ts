export const cleanVocabulary = [
  { word: "covenant", meaning: "a serious promise or agreement, here between God and people" },
  { word: "forgive", meaning: "to stop being angry with someone for doing something wrong" },
  { word: "sin", meaning: "something a person does that goes against God's teachings" },
  { word: "retreat", meaning: "to move back or go away" },
  { word: "spared", meaning: "saved from harm or death" },
  { word: "set me free", meaning: "to let me go or take away what holds me back" },
  { word: "purify", meaning: "to make something clean or free from bad things" },
  { word: "holiness", meaning: "being good and close to God" },
  { word: "restored", meaning: "made good or whole again after something was lost or broken" },
];

export const cleanIcons = [
  { id: "blood", symbol: "🩸", ariaLabel: "blood" },
  { id: "snow", symbol: "❄️", ariaLabel: "snow" },
  { id: "powerful", symbol: "💪", ariaLabel: "powerful" },
  { id: "covenant", symbol: "🤝", ariaLabel: "covenant" },
];

export const cleanVerseOne = [
  { parts: [{ before: "Precious", match: "blood", after: "has left me forgiven" }] },
  { parts: [{ before: "Pure like the whitest of", match: "snow", after: "" }] },
  { parts: [{ before: "", match: "powerful", after: "to make sin and shame retreat" }] },
  { parts: [{ before: "This", match: "covenant", after: "is making me whole" }] },
];

export const cleanChorus = {
  words: ["rise", "head", "mercy", "life", "name", "free", "Jesus", "heart"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "So I will", answer: "rise", after: "" }] },
    { parts: [{ before: "And lift my", answer: "head", after: "" }] },
    { parts: [{ before: "For by His", answer: "mercy", after: "" }] },
    { parts: [{ before: "My", answer: "life", after: "was spared" }] },
    { parts: [{ before: "The highest", answer: "name", after: "" }] },
    { parts: [{ before: "Has set me", answer: "free", after: "" }] },
    { parts: [{ before: "Because of", answer: "Jesus", after: "" }] },
    { parts: [{ before: "My", answer: "heart", after: "is clean" }] },
  ],
};

export const cleanVerseTwo = [
  { items: [{ before: "Purify", answer: "my", after: "heart in Your presence", options: ["my", "me"] }] },
  { items: [{ before: "Teach", answer: "me", after: "to discover the joy", options: ["me", "my"] }] },
  { items: [{ before: "Oh holiness that forms as", answer: "you", after: "draw me close", options: ["you", "they"] }] },
  { items: [{ before: "In", answer: "You", after: "what was lost is restored", options: ["You", "me"] }] },
];
