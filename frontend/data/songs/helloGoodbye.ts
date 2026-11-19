import type { LyricsWordActivityProps } from "@/components/activities/LyricsWordActivity/types";

export const helloGoodbyeVocabulary = [
  { word: "hello", meaning: "a word you say when you meet someone" },
  { word: "goodbye", meaning: "a word you say when you leave someone" },
  { word: "high", meaning: "far above the ground" },
  { word: "low", meaning: "near the ground; not high" },
  { word: "I don't know", meaning: "I do not have the answer" },
];

export const helloGoodbyeActivity: Pick<LyricsWordActivityProps, "words" | "lyrics"> = {
  words: ["I say no", "I say go", "I say hello", "you say goodbye", "you say low", "I don't know"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "You say yes,", answer: "I say no", after: "" }] },
    { parts: [{ before: "You say stop and", answer: "I say go", after: ", oh no" }], dividerAfter: true },
    { parts: [{ before: "You say goodbye and", answer: "I say hello", after: "" }] },
    { parts: [{ before: "Hello hello", after: "" }] },
    { parts: [{ before: "I don't know why", answer: "you say goodbye", after: ", I say hello..." }], dividerAfter: true },
    { parts: [{ before: "I say high,", answer: "you say low", after: "" }] },
    { parts: [{ before: "You say why and I say", answer: "I don't know", after: ", oh no" }] },
  ],
};
