export const manchild = {
  spotify: {
    embedUrl: "https://open.spotify.com/embed/track/699n0PWczOUvXqKSrLplCv?utm_source=generator",
    title: "Manchild by Sabrina Carpenter on Spotify",
  },
  vocabulary: [
    { word: "manchild", meaning: "an adult man who acts like a child" },
    { word: "self-care", meaning: "things you do to care for yourself" },
    { word: "dumb", meaning: "not intelligent or sensible" },
    { word: "blame", meaning: "to say someone caused a problem" },
    { word: "incompetent", meaning: "not able to do something well" },
    { word: "swear", meaning: "to promise that something is true" },
    { word: "outfit", meaning: "a set of clothes worn together" },
    { word: "useless", meaning: "not helpful or effective" },
  ],
};

export const manchildFirstStanza = {
  lyrics: [
    { items: [{ before: "Oh, boy", answer: "", after: "", options: [] }] },
    { items: [{ before: "You", answer: "said", after: "your phone was broken, just forgot to charge it", options: ["said", "say"] }] },
    { items: [{ before: "Whole outfit you're wearing, God, I", answer: "hope", after: "it's ironic", options: ["hope", "hoped"] }] },
    { items: [
      { before: "", answer: "Did", after: "you just say you're finished? Didn't", options: ["Did", "Do"] },
      { before: "", answer: "know", after: "we started", options: ["know", "knew"] },
    ] },
    { items: [{ before: "It's all just so familiar, baby, what", answer: "do", after: "you call it? Stupid", options: ["do", "did"] }] },
    { items: [{ before: "Or", answer: "is", after: "it slow? Maybe it's useless", options: ["is", "was"] }] },
    { items: [{ before: "But there", answer: "is", after: "a cuter word for it, I know", options: ["is", "was"] }] },
  ],
};

export const manchildChorus = {
  lyrics: [
    { before: "Man-child / Why you always", answer: "come", scrambled: "oemc", after: "running to me?", syncKey: "come" },
    { before: "F* my life / Won't you let an", answer: "innocent", scrambled: "intnecon", after: "woman be?" },
    { before: "", answer: "Never", scrambled: "eervn", after: "heard of self-care" },
    { before: "Half your brain just ain't", answer: "there", scrambled: "ehert", after: "" },
    { before: "Man-child / Why you always", answer: "come", scrambled: "oemc", after: "running, taking all my loving from me?", syncKey: "come" },
  ],
};

export const manchildSecondStanza = {
  icons: [
    { id: "dumb", symbol: "🤪", ariaLabel: "dumb" },
    { id: "earth", symbol: "🌍", ariaLabel: "Earth" },
    { id: "mom", symbol: "👩", ariaLabel: "mom" },
  ],
  lyrics: [
    { parts: [{ before: "Why so sexy if so", match: "dumb", after: "?" }] },
    { parts: [{ before: "And how survive the", match: "earth", after: "so long?" }] },
    { parts: [{ before: "If I'm not there, it won't get done", match: "", after: "" }] },
    { parts: [{ before: "I choose to blame your", match: "mom", after: "" }] },
  ],
};

export const manchildMissingWords = {
  lyrics: [
    { parts: [
      { before: "Oh, I", option: { word: "like", isMissing: false }, after: "my boys playing" },
      { before: "", option: { word: "too", isMissing: true }, after: "hard to get" },
    ] },
    { parts: [
      { before: "And I", option: { word: "don't", isMissing: true }, after: "like my men" },
      { before: "", option: { word: "all", isMissing: false }, after: "incompetent" },
    ] },
    { parts: [
      { before: "And I swear", option: { word: "they", isMissing: false }, after: "choose me, I'm" },
      { before: "", option: { word: "definitely", isMissing: true }, after: "not choosing" },
      { before: "", option: { word: "them", isMissing: false }, after: "" },
    ] },
    { parts: [
      { before: "Amen,", option: { word: "God", isMissing: true }, after: "! hey, men" },
    ] },
  ],
};
