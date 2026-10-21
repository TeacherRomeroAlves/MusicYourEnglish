import type { InlineWordOrderLine } from "@/components/activities/InlineWordOrderActivity/types";

export const rip = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/OeRIoWmQA6k",
    title: "R.I.P. by Motionless in White featuring Skylar Grey on YouTube",
  },
  vocabulary: [
    { word: "requiem", meaning: "music or a poem for someone who has died" },
    { word: "emptiness", meaning: "a feeling that something important is missing from your life" },
    { word: "bone", meaning: "one of the hard parts inside your body that give it shape" },
    { word: "recite", meaning: "to say a poem or other words aloud from memory" },
    { word: "RIP", meaning: "short for rest in peace, words used to wish peace to someone who has died" },
    { word: "fate", meaning: "things that seem already decided and outside your control" },
    { word: "dissonance", meaning: "sounds or ideas that do not fit well together" },
    { word: "suffer", meaning: "to feel pain in your body or feel very unhappy" },
  ],
};

export const ripChorus: { lines: InlineWordOrderLine[] } = {
  lines: [
    { id: "rip-chorus-end", before: "If you ever leave,", answer: "it would be the end of me", after: "" },
    { id: "rip-chorus-peace-one", before: "I would die, but", answer: "I'd never rest in peace", after: "", syncKey: "rip-rest-in-peace" },
    { id: "rip-chorus-vocal", before: "Oh-whoa, oh-whoa...", answer: "", after: "" },
    { id: "rip-chorus-sleep", before: "I'd never sleep,", answer: "without you buried next to me", after: "" },
    { id: "rip-chorus-note", before: "(Final chorus: I'd never sleep, buried in your memories)", answer: "", after: "", note: true },
    { id: "rip-chorus-peace-two", before: "I would die, but", answer: "I'd never rest in peace", after: "", syncKey: "rip-rest-in-peace", includeInScore: false },
  ],
};

export const ripVerseOne = {
  words: ["decided", "recited", "fills", "reached", "twist", "deciding", "feeling", "enrich", "excited"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "What's meant to be or meant to break is yet to be", answer: "decided", after: "" }] },
    { parts: [{ before: "A requiem to seal our fate has yet to be", answer: "recited", after: "" }] },
    { parts: [{ before: "Was all this suffering just a waste if emptiness", answer: "fills", after: "the spaces?" }] },
    { parts: [{ before: "The bond has", answer: "reached", after: "the bone" }] },
    { parts: [{ before: "So if love is pain then", answer: "twist", after: "the blade and never let me go" }] },
  ],
};

export const ripVerseTwo = {
  lyrics: [
    { before: "The dissonance that points the blame is louder in the", prefix: "sil", answer: "ence", after: "" },
    { before: "We lost ourselves inside the noise with only scars to", prefix: "gu", answer: "ide", after: "us" },
    { before: "Embrace it, show me your", prefix: "dar", answer: "kest", after: "places" },
    { before: "Tell me you f* hate", prefix: "t", answer: "his", after: "" },
    { before: "We can't go", prefix: "b", answer: "ack", after: ", but this can't be the end" },
  ],
};

export const ripOutro = {
  items: [
    { id: "rip-outro-jump", text: "If you jump, I'll jump too" },
    { id: "rip-outro-anything", text: "'Cause I would do anything for you" },
    { id: "rip-outro-doom", text: "Call it love, call it doom" },
    { id: "rip-outro-without", text: "'Cause there is no me without you" },
  ],
};
