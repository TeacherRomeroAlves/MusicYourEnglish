export const nineToFive = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/UbxUSsFXYo4",
    title: "9 to 5 by Dolly Parton on YouTube",
  },
  vocabulary: [
    { word: "tumble", meaning: "to fall or move quickly and without control" },
    { word: "folks", meaning: "an informal word for people" },
    { word: "yawn", meaning: "to open your mouth when you are tired" },
    { word: "9 to 5", meaning: "a job with regular daytime working hours" },
    { word: "barely", meaning: "only just; almost not" },
    { word: "drive someone crazy", meaning: "to make someone very annoyed or upset" },
    { word: "shatter", meaning: "to break suddenly into many small pieces" },
    { word: "ladder", meaning: "an object with steps used for climbing" },
  ],
};

export const nineToFiveFirstStanza = {
  lyrics: [
    { items: [{ before: "Tumble outta bed and I stumble to the kitchen", answer: "", after: "", options: [] }] },
    { items: [{ before: "Pour myself a cup", answer: "of", after: "ambition", options: ["of", "out"] }] },
    { items: [{ before: "And yawn and stretch and try to come", answer: "to", after: "life", options: ["to", "in"] }] },
    { items: [{ before: "Jump", answer: "in", after: "the shower and the blood starts pumping", options: ["in", "on"] }] },
    { items: [{ before: "Out", answer: "on", after: "the street the traffic's jumping", options: ["on", "behind"] }] },
    { items: [{ before: "With folks like me", answer: "on", after: "the job from 9 to 5", options: ["on", "of"] }] },
  ],
};

const repeatedChorus = [
  { before: "9 to 5, what a way to make a", prefix: "l", answer: "iving", after: "", syncKey: "nine-living" },
  { before: "Barely getting by, it's all", prefix: "t", answer: "aking", after: "and no", syncKey: "nine-taking" },
  { before: "", prefix: "g", answer: "iving", after: "", syncKey: "nine-giving" },
  { before: "They just use your mind and they never give you", prefix: "c", answer: "redit", after: "", syncKey: "nine-credit" },
  { before: "It's enough to", prefix: "d", answer: "rive", after: "you crazy if you let it", syncKey: "nine-drive" },
];

export const nineToFiveFirstChorus = {
  lyrics: [
    ...repeatedChorus,
    { before: "9 to 5, for", prefix: "ser", answer: "vice", after: "and devotion" },
    { before: "You would think that I would deserve a fat promotion", after: "" },
    { before: "Want to move ahead but the", prefix: "b", answer: "oss", after: "won't seem to let me" },
    { before: "I swear", answer: "some", suffix: "times", after: "that man is out to get me" },
  ],
};

export const nineToFiveThirdStanza = {
  icons: [
    { id: "dream", symbol: "💭", ariaLabel: "dream" },
    { id: "ladder", symbol: "🪜", ariaLabel: "ladder" },
    { id: "boat", symbol: "⛵", ariaLabel: "boat" },
    { id: "day", symbol: "☀️", ariaLabel: "day" },
  ],
  lyrics: [
    { parts: [{ before: "They let you", match: "dream", after: "just to watch 'em shatter" }] },
    { parts: [{ before: "You're just a step on the boss man's", match: "ladder", after: "" }] },
    { parts: [{ before: "But you got dreams he'll never take away", after: "" }] },
    { parts: [{ before: "You're in the same", match: "boat", after: "with a lotta your friends" }] },
    { parts: [{ before: "Waiting for the", match: "day", after: "your ship will come in" }] },
    { parts: [{ before: "And the tide is gonna turn and it's all gonna roll your way", after: "" }] },
  ],
};

export const nineToFiveSecondChorus = {
  lyrics: [
    ...repeatedChorus,
    { before: "9 to 5, yeah, they got you", prefix: "w", answer: "here", after: "they want you" },
    { before: "There's a better", prefix: "l", answer: "ife", after: "and you think about it, don't you?" },
    { before: "It's a rich man's game no matter what they call it", after: "" },
    { before: "And you spend your life putting money in his", answer: "wal", suffix: "let", after: "" },
  ],
};
