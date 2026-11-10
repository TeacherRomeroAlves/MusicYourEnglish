export const helpVocabulary = [
  { word: "haze", meaning: "smoke or mist in the air that makes it hard to see" },
  { word: "now and then", meaning: "sometimes, but not often" },
  { word: "self-assured", meaning: "sure of yourself and what you can do" },
  { word: "change my mind", meaning: "to decide to do or think something different" },
  { word: "appreciate", meaning: "to be glad about something someone does for you" },
  { word: "feel down", meaning: "to feel sad" },
  { word: "get my feet back on the ground", meaning: "to feel in control again after a hard time" },
  { word: "be around", meaning: "to be nearby or there for someone" },
];

export const helpOpening = [
  { items: [{ before: "Help! I need", answer: "somebody", after: "", options: ["somebody","everybody"] }] },
  { items: [{ before: "Help! Not just", answer: "anybody", after: "", options: ["anybody","nobody"] }] },
  { items: [{ before: "Help! You know I need", answer: "someone", after: ", help", options: ["someone","anybody"] }] },
  { items: [{ before: "When I was younger, so much younger than today", answer: "", after: "", options: [] }] },
  { items: [{ before: "I never needed anybody's help in", answer: "any", after: "way", options: ["any","every"] }] },
  { items: [{ before: "But now these days are gone", answer: "", after: "", options: [] }] },
  { items: [{ before: "I'm not so self assured", answer: "", after: "", options: [] }] },
  { items: [{ before: "And now I find I've changed", answer: "my", after: "mind", options: ["my","your"] }] },
  { items: [{ before: "And opened up the", answer: "doors", after: "", options: ["doors","windows"] }] },
];

export const helpChorus = {
  words: ["can", "down", "do", "around", "back", "ground", "please"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Help me if you", answer: "can", after: ", I'm feeling" }, { before: "", answer: "down", after: "" }] },
    { parts: [{ before: "And I", answer: "do", after: "appreciate you being" }, { before: "", answer: "around", after: "" }] },
    { parts: [{ before: "Help me get my feet", answer: "back", after: "on the" }, { before: "", answer: "ground", after: "" }] },
    { parts: [{ before: "Won't you", answer: "please", after: ", please help me?" }] },
  ],
};

export const helpVerseTwo = [
  { before: "And now my life has changed in so", answer: "many", scrambled: "ynam", after: "ways" },
  { before: "My independence seems to vanish in the haze", answer: "", scrambled: "", after: "" },
  { before: "But", answer: "every", scrambled: "revye", after: "now and then I feel so insecure" },
  { before: "I know that I just need you like", answer: "", scrambled: "", after: "" },
  { before: "I've", answer: "never", scrambled: "venre", after: "done before" },
];
