export const noStressJustVibes = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/vZV6_JzfU3g",
    title: "No Stress, Just Vibes by AI IRIE FM on YouTube",
  },
  vocabulary: [
    { word: "stress", meaning: "feeling worried because life seems hard or too busy" },
    { word: "vibes", meaning: "the feelings you get from a person, place, or music" },
    { word: "mind", meaning: "the part of you that thinks and feels" },
    { word: "key", meaning: "the most important thing you need to make something work" },
    { word: "flow", meaning: "to move easily and smoothly, like water" },
    { word: "fade away", meaning: "to slowly become less strong and then disappear" },
    { word: "rush", meaning: "doing something very quickly because you have little time" },
    { word: "let out", meaning: "to allow something inside to come out" },
  ],
};

export const noStressJustVibesChorus = {
  lyrics: [
    { before: "No", answer: "stress", scrambled: "sserts", after: ", just", syncKey: "no-stress-chorus-stress" },
    { before: "", answer: "vibes", scrambled: "sebiv", after: "", syncKey: "no-stress-chorus-vibes", continuePreviousLine: true },
    { before: "Let it", answer: "flow", scrambled: "wolf", after: ", feel" },
    { before: "", answer: "alive", scrambled: "viela", after: "", continuePreviousLine: true },
    { before: "No", answer: "stress", scrambled: "sserts", after: ", just", syncKey: "no-stress-chorus-stress" },
    { before: "", answer: "vibes", scrambled: "sebiv", after: "", syncKey: "no-stress-chorus-vibes", continuePreviousLine: true },
    { before: "We're", answer: "alright", scrambled: "thgirla", after: ", feeling" },
    { before: "", answer: "right", scrambled: "thgir", after: "", continuePreviousLine: true },
  ],
};

export const noStressJustVibesOpeningVerses = {
  icons: [
    { id: "light", symbol: "🌅", ariaLabel: "morning light" },
    { id: "mind", symbol: "🧠", ariaLabel: "mind" },
    { id: "smile", symbol: "😊", ariaLabel: "smile" },
    { id: "key", symbol: "🔑", ariaLabel: "key" },
    { id: "way", symbol: "🛤️", ariaLabel: "way or path" },
  ],
  lyrics: [
    { parts: [{ before: "Morning", match: "light", after: "on my face" }] },
    { parts: [{ before: "Slow steps, easy pace", after: "" }] },
    { parts: [{ before: "No pressure in my", match: "mind", after: "" }] },
    { parts: [{ before: "Leave the noise behind", after: "" }], dividerAfter: true },
    { parts: [{ before: "Little", match: "smile", after: ", feeling free" }] },
    { parts: [{ before: "Just being me, that's the", match: "key", after: "" }] },
    { parts: [{ before: "Nothing heavy in my", match: "way", after: "" }] },
    { parts: [{ before: "Just living day by day", after: "" }] },
  ],
};

export const noStressJustVibesMiddleVerses = {
  words: ["high", "deep", "simple", "Good", "slow", "sweet"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Sun is", answer: "high", after: ", sky so wide" }] },
    { parts: [{ before: "Feel the rhythm", answer: "deep", after: "inside" }] },
    { parts: [{ before: "Every worry fades away", after: "" }] },
    { parts: [{ before: "In this moment we can stay", after: "" }], dividerAfter: true },
    { parts: [{ before: "Simple life,", answer: "simple", after: "sound" }] },
    { parts: [{ before: "", answer: "Good", after: "energy all around" }] },
    { parts: [{ before: "Take it", answer: "slow", after: ", feel the beat" }] },
    { parts: [{ before: "Let your heart stay light and", answer: "sweet", after: "" }] },
  ],
};

export const noStressJustVibesClosingVerses = {
  words: ["just breathe", "right now", "just flow", "calm inside"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "No rush,", answer: "just breathe", after: "" }] },
    { parts: [{ before: "Everything you need", after: "" }] },
    { parts: [{ before: "Right here,", answer: "right now", after: "" }] },
    { parts: [{ before: "Let your spirit out", after: "" }], dividerAfter: true },
    { parts: [{ before: "No fear,", answer: "just flow", after: "" }] },
    { parts: [{ before: "Take it nice and slow", after: "" }] },
    { parts: [{ before: "Feel the", answer: "calm inside", after: "" }] },
    { parts: [{ before: "Just ride the vibe", after: "" }] },
  ],
};
