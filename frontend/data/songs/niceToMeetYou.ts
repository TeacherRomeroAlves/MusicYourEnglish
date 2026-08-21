export const niceToMeetYou = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/9VbDkDALT7w",
    title: "Nice To Meet You by Myles Smith on YouTube",
  },
  vocabulary: [
    { word: "crowd", meaning: "a large group of people in one place" },
    { word: "lonely", meaning: "sad because you are alone" },
    { word: "slip by", meaning: "to pass quickly or without being noticed" },
    { word: "ain't", meaning: "an informal form of am not, is not, are not, has not, or have not" },
    { word: "feet", meaning: "the parts of your body that you stand on" },
    { word: "worries", meaning: "problems or thoughts that make you nervous" },
  ],
};

export const niceToMeetYouFirstStanza = {
  icons: [
    { id: "drink", symbol: "🥤", ariaLabel: "drink" },
    { id: "home", symbol: "🏠", ariaLabel: "home" },
    { id: "night", symbol: "🌙", ariaLabel: "night", dark: true },
    { id: "eye", symbol: "👁️", ariaLabel: "eye" },
    { id: "light", symbol: "💡", ariaLabel: "light" },
    { id: "up", symbol: "⬆️", ariaLabel: "up" },
  ],
  lyrics: [
    { parts: [{ before: "Lonely in this crowd, I sit alone, oh", after: "" }] },
    { parts: [{ before: "One more", match: "drink", after: "away from heading" }, { before: "", match: "home", after: ", oh" }] },
    { parts: [{ before: "Oh, I could feel the", match: "night", after: "slipping by", syncKey: "nice-night" }] },
    { parts: [{ before: "Oh, away from me", after: "" }] },
    { parts: [{ before: "And, oh, she caught my", match: "eye", after: "through the" }, { before: "", match: "light", after: "", syncKey: "nice-light" }] },
    { parts: [{ before: "Then she came right", match: "up", after: "to me", syncKey: "nice-up" }] },
  ],
};

export const niceToMeetYouChorus = {
  allowedLetters: ["M", "W", "H", "F", "P", "A", "R", "E", "T"],
  lyrics: [
    { before: "She said, ‘Oh, hi, nice to", answer: "meet", after: "you", syncKey: "nice-meet" },
    { before: "Tonight, maybe", answer: "we", after: "could", syncKey: "nice-we" },
    { before: "Go dance, get up off our", answer: "feet", after: "’", syncKey: "nice-feet" },
    { before: "She said, ‘This life ain't forever", answer: "", after: "" },
    { before: "One song,", answer: "here", after: "together" },
    { before: "Then let's play it on", answer: "repeat", after: "’" },
    { before: "We could dance, we could dance all night", answer: "", after: "" },
    { before: "We could dance 'til the morning light", answer: "", after: "" },
    { before: "Let's forget about our worries and", answer: "the", after: "wild world outside" },
    { before: "She said, ‘Oh, hi, nice to", answer: "meet", after: "you", syncKey: "nice-meet" },
    { before: "Tonight, maybe", answer: "we", after: "could", syncKey: "nice-we" },
    { before: "Go dance, get up off our", answer: "feet", after: "’", syncKey: "nice-feet" },
    { before: "We could dance, we could dance all night", answer: "", after: "" },
  ],
};

export const niceToMeetYouThirdStanza = {
  icons: [
    { id: "hand", symbol: "🤝", ariaLabel: "hand" },
    { id: "broken-heart", symbol: "💔", ariaLabel: "broken heart" },
    { id: "night", symbol: "🌙", ariaLabel: "night", dark: true },
    { id: "light", symbol: "💡", ariaLabel: "light" },
    { id: "eyes", symbol: "👀", ariaLabel: "eyes" },
    { id: "up", symbol: "⬆️", ariaLabel: "up" },
  ],
  lyrics: [
    { parts: [{ before: "She took my", match: "hand", after: "and led me through the dark, oh" }] },
    { parts: [{ before: "She said, ‘Feel the beat, forget that", match: "broken-heart", after: ",’ oh" }] },
    { parts: [{ before: "And, oh, I can feel the", match: "night", after: "slipping by", syncKey: "nice-night" }] },
    { parts: [{ before: "Oh, away from me", after: "" }] },
    { parts: [{ before: "And, oh, I saw the", match: "light", after: "in her", syncKey: "nice-light" }, { before: "", match: "eyes", after: "" }] },
    { parts: [{ before: "Glad she came right", match: "up", after: "to me", syncKey: "nice-up" }] },
  ],
};
