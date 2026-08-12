export const wonderwall = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/6hzrDeceEKc",
    title: "Wonderwall by Oasis on YouTube",
  },
  vocabulary: [
    { word: "wonderwall", meaning: "a person who is very important to you" },
    { word: "winding", meaning: "having many turns and curves" },
    { word: "backbeat", meaning: "a strong beat in music" },
    { word: "blinding", meaning: "so bright that it is hard to see" },
    { word: "realize", meaning: "to understand something clearly" },
  ],
};

export const wonderwallFirstStanza = {
  words: [
    { word: "day" },
    { word: "they" },
    { word: "realized" },
    { word: "believe" },
    { word: "now" },
  ],
  lyrics: [
    { parts: [{ before: "Today is gonna be the", answer: "day", after: "" }] },
    { parts: [{ before: "That", answer: "they", after: "are gonna throw it back to you" }] },
    { parts: [{ before: "By now you should've somehow", after: "" }] },
    { parts: [{ before: "", answer: "realized", after: "what you gotta do" }] },
    { parts: [{ before: "I don't", answer: "believe", after: "that anybody" }] },
    { parts: [{ before: "Feels the way I do, about you", answer: "now", after: "" }] },
  ],
};

export const wonderwallSecondStanza = {
  icons: [
    { id: "street", symbol: "🛣️", ariaLabel: "street" },
    { id: "fire", symbol: "🔥", ariaLabel: "fire" },
    { id: "heart", symbol: "❤️", ariaLabel: "heart" },
    { id: "doubt", symbol: "❓", ariaLabel: "doubt" },
    { id: "now", symbol: "⏰", ariaLabel: "now" },
  ],
  lyrics: [
    { parts: [{ before: "Backbeat, the word was on the", match: "street", after: "" }] },
    { parts: [
      { before: "That the", match: "fire", after: "in your" },
      { before: "", match: "heart", after: "is out" },
    ] },
    { parts: [{ before: "I'm sure you've heard it all before", match: "", after: "" }] },
    { parts: [{ before: "But you never really had a", match: "doubt", after: "" }] },
    { parts: [{ before: "I don't believe that anybody", match: "", after: "" }] },
    { parts: [{ before: "Feels the way I do about you", match: "now", after: "" }] },
  ],
};

export const wonderwallPreChorus = {
  items: [
    {
      id: "pre-chorus-1",
      text: "And all the roads we have to walk are winding (second time: all the roads that lead you there)",
    },
    {
      id: "pre-chorus-2",
      text: "And all the lights that lead us there are blinding (second time: all the lights that light the way)",
    },
    { id: "pre-chorus-3", text: "There are many things that I" },
    { id: "pre-chorus-4", text: "Would like to say to you, but I don't know how" },
    { id: "chorus-1", text: "Because maybe, you're gonna be the one that saves me" },
    { id: "chorus-2", text: "And after all, you're my wonderwall" },
  ],
};
