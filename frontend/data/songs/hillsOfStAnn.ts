export const hillsOfStAnn = {
  spotify: {
    embedUrl: "https://open.spotify.com/embed/track/57obfhezEGTT4Ra1CDGKpK?utm_source=generator",
    title: "Hills of St. Ann by Stephen Marley on Spotify",
  },
  vocabulary: [
    { word: "mist", meaning: "small drops of water in the air" },
    { word: "hills", meaning: "high areas of land, smaller than mountains" },
    { word: "breeze", meaning: "a light and gentle wind" },
    { word: "roots", meaning: "the parts of a plant under the ground" },
    { word: "Jah", meaning: "a name for God in Rastafari culture" },
    { word: "Zion", meaning: "a peaceful and spiritual promised place" },
    { word: "Inna", meaning: "in or inside, in Jamaican English" },
    { word: "drum", meaning: "a musical instrument you hit with your hands or sticks" },
    { word: "mountain span", meaning: "a long area covered by mountains" },
  ],
};

export const hillsFirstStanza = {
  icons: [
    { id: "light", symbol: "☀️", ariaLabel: "light" },
    { id: "mountains", symbol: "⛰️", ariaLabel: "mountains" },
    { id: "sky", symbol: "🌌", ariaLabel: "sky" },
    { id: "man", symbol: "👨", ariaLabel: "man" },
    { id: "roots", symbol: "🌱", ariaLabel: "roots" },
  ],
  lyrics: [
    { parts: [{ before: "Morning", match: "light", after: "" }] },
    { parts: [{ before: "Riding over", match: "mountains", after: "high" }] },
    { parts: [{ before: "Mist roll soft", match: "", after: "" }] },
    { parts: [{ before: "Like a dream in the", match: "sky", after: "" }] },
    { parts: [{ before: "Breeze from Zion", match: "", after: "" }] },
    { parts: [{ before: "Whisper to", match: "man", after: "" }] },
    { parts: [{ before: "Blessed are the", match: "roots", after: "of St. Ann" }] },
  ],
};

export const hillsSecondStanza = {
  lyrics: [
    { items: [{ before: "Ooohhh, the", answer: "hills", after: "of St. Ann", options: ["hills", "rivers"] }] },
    { items: [{ before: "Where the", answer: "rivers", after: "run clear and strong", options: ["rivers", "riders"] }] },
    { items: [{ before: "I lift my", answer: "hands", after: "to Jah in thanks", options: ["hands", "sands"] }] },
    { items: [{ before: "For the land", answer: "where", after: "my heart belongs", options: ["where", "we're"] }] },
  ],
};

export const hillsThirdStanza = {
  lyrics: [
    { parts: [{ before: "Children laugh", option: { word: "a lot", isMissing: true }, after: "" }] },
    { parts: [{ before: "Firelight glows", option: { word: "", isMissing: false }, after: "" }] },
    { parts: [{ before: "Drum", option: { word: "beat", isMissing: false }, after: "steady" }] },
    { parts: [{ before: "Spirit", option: { word: "never", isMissing: false }, after: "flows" }] },
    { parts: [{ before: "From the", option: { word: "high", isMissing: true }, after: "valley" }] },
    { parts: [{ before: "To the", option: { word: "mountain", isMissing: false }, after: "span" }] },
    { parts: [{ before: "Jah love live", option: { word: "", isMissing: false }, after: "" }] },
    { parts: [{ before: "Inna St. Ann", option: { word: "beautiful", isMissing: true }, after: "land" }] },
  ],
};

export const hillsFourthStanza = {
  words: [
    { word: "guide" },
    { word: "remind" },
    { word: "define" },
    { word: "chant" },
    { word: "land" },
    { word: "stand" },
  ],
  lyrics: [
    { parts: [{ before: "Ooohhh, hills of St. Ann", after: "" }] },
    { parts: [{ before: "Yeah, Jah", answer: "guide", after: "me" }] },
    { parts: [{ before: "Roots an' rivers / They", answer: "remind", after: "me" }] },
    { parts: [{ before: "Truth and love / They", answer: "define", after: "me" }] },
    { parts: [{ before: "St. Ann hills / Where the blessing lives", after: "" }] },
    { parts: [{ before: "Drum and", answer: "chant", after: "" }] },
    { parts: [{ before: "Echoes through the", answer: "land", after: "" }] },
    { parts: [{ before: "Peace and love forever", answer: "stand", after: "" }] },
  ],
};
