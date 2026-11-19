import type { LyricsWordActivityProps } from "@/components/activities/LyricsWordActivity/types";

export const liveTillIDieVocabulary = [
  { word: "fling", meaning: "a short romantic relationship" },
  { word: "over my head", meaning: "above my head" },
  { word: "blues", meaning: "feelings of sadness" },
  { word: "devil and angel", meaning: "a bad spirit and a good spirit in religious stories" },
  { word: "ride high", meaning: "to feel happy because things are going well" },
  { word: "lay low", meaning: "to stay quiet and not get noticed" },
  { word: "someone's number is up", meaning: "it is time for someone to die" },
  { word: "instead", meaning: "in place of something else" },
  { word: "ain't", meaning: "an informal way to say am not, is not, are not, has not, or have not" },
];

export const liveTillIDieOpening: Pick<LyricsWordActivityProps, "words" | "lyrics"> = {
  words: ["laugh", "take", "live", "say", "play", "miss", "have"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "I'm gonna live till I die!", after: "" }] },
    { parts: [{ before: "I'm gonna", answer: "laugh", after: "instead of cry," }] },
    { parts: [{ before: "I'm gonna", answer: "take", after: "the town and turn it upside down," }] },
    { parts: [{ before: "I'm gonna", answer: "live", after: ", live, live until I die." }], dividerAfter: true },
    { parts: [{ before: "They're gonna", answer: "say", after: ' "What a guy!"' }] },
    { parts: [{ before: "I'm gonna", answer: "play", after: "for the sky." }] },
    { parts: [{ before: "Ain't gonna", answer: "miss", after: "a thing," }] },
    { parts: [{ before: "I'm gonna", answer: "have", after: "my fling," }] },
    { parts: [{ before: "I'm gonna live, live, live until I die.", after: "" }] },
  ],
};

export const liveTillIDieIcons = [
  { id: "blues", symbol: "😔", ariaLabel: "blues: feeling sad" },
  { id: "devil", symbol: "😈", ariaLabel: "devil" },
  { id: "angel", symbol: "😇", ariaLabel: "angel" },
  { id: "fly", symbol: "🪽", ariaLabel: "fly" },
  { id: "number", symbol: "🔢", ariaLabel: "number" },
  { id: "cup", symbol: "🥤", ariaLabel: "cup" },
];

export const liveTillIDieLaterVerses = [
  { parts: [{ before: "The", match: "blues", after: "I lay low," }] },
  { parts: [{ before: "I'll make them stay low,", after: "" }] },
  { parts: [{ before: "They'll never trail over my head.", after: "" }] },
  { parts: [{ before: "I'll be a", match: "devil", after: ", till I'm an" }, { before: "", match: "angel", after: ", but until then Hallelujah." }] },
  { parts: [{ before: "Gonna dance, gonna", match: "fly", after: "," }] },
  { parts: [{ before: "I'll take a chance riding high,", after: "" }] },
  { parts: [{ before: "Before my", match: "number", after: "is up," }] },
  { parts: [{ before: "I'm gonna fill my", match: "cup", after: "," }] },
  { parts: [{ before: "I'm gonna live, live, live, until I die!", after: "" }] },
];
