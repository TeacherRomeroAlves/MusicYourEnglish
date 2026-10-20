export const imPretty = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/H-R87It_dKw",
    title: "I'm Pretty by KATSEYE on YouTube",
  },
  vocabulary: [
    { word: "back to square one", meaning: "having to start again because something did not work" },
    { word: "brush", meaning: "a thing with many small hairs, used on your hair or face or to paint" },
    { word: "makeup", meaning: "things you put on your face to add color or change how it looks" },
    { word: "pretty sure", meaning: "almost sure, but not completely" },
    { word: "pretty", meaning: "nice to look at; beautiful" },
    { word: "put on a front", meaning: "to hide your real feelings from other people" },
    { word: "show off", meaning: "to show what you have or can do so people think you are great" },
  ],
};

export const imPrettyFirstStanza = {
  icons: [
    { id: "song", symbol: "🎵", ariaLabel: "song" },
    { id: "one", symbol: "1️⃣", ariaLabel: "one" },
    { id: "tears", symbol: "😢", ariaLabel: "tears" },
    { id: "brush", symbol: "🖌️", ariaLabel: "brush" },
  ],
  lyrics: [
    { parts: [{ before: "Na-na, na-na", after: "" }] },
    { parts: [{ before: "Heartbreak, move on, new face, new", match: "song", after: "" }] },
    { parts: [{ before: "I'll meet someone, then back to square", match: "one", after: ", yeah" }] },
    { parts: [{ before: "Try to hold on, just commotion", after: "" }] },
    { parts: [{ before: "Cycle turns and does what it wants", after: "" }] },
    { parts: [{ before: "Just when I think it's too much", after: "" }] },
    { parts: [{ before: "I dry my", match: "tears", after: "with makeup, ooh...", syncKey: "im-pretty-tears" }] },
    { parts: [{ before: "Ooh... things I could do with this", match: "brush", after: "", syncKey: "im-pretty-brush" }] },
    { parts: [{ before: "You'll never know that I hurt", after: "" }] },
  ],
};

export const imPrettyChorus = {
  words: ["healing", "still", "afraid", "face", "make", "far", "take", "fair", "she", "fear"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Yeah, I'm pretty, pretty...", after: "" }] },
    { parts: [{ before: "Pretty sure I'm not done", answer: "healing", after: "" }] },
    { parts: [{ before: "But I'm pretty, pretty...", after: "" }] },
    { parts: [{ before: "Pretty sure that I'm", answer: "still", after: "breathing" }] },
    { parts: [{ before: "I'm not", answer: "afraid", after: "to cover up, put on a front" }] },
    { parts: [{ before: "Put on a", answer: "face", after: "and show it off" }] },
    { parts: [{ before: "Yeah, I", answer: "make", after: "myself pretty, pretty..." }] },
    { parts: [{ before: "Pretty", answer: "far", after: "from feeling, pretty sure I'm not done healing" }] },
  ],
};

export const imPrettyFifthStanza = {
  icons: [
    { id: "old", symbol: "👵", ariaLabel: "old" },
    { id: "start", symbol: "▶️", ariaLabel: "start" },
    { id: "tears", symbol: "😢", ariaLabel: "tears" },
    { id: "brush", symbol: "🖌️", ariaLabel: "brush" },
  ],
  lyrics: [
    { parts: [{ before: "They always told me to lose the", match: "old", after: "me" }] },
    { parts: [{ before: "Chip away, find my pain in beauty, yeah", after: "" }] },
    { parts: [{ before: "My emotions keep on going", after: "" }] },
    { parts: [{ before: "Just conceal when they", match: "start", after: "flowing" }] },
    { parts: [{ before: "Just when I think it's too much", after: "" }] },
    { parts: [{ before: "I dry my", match: "tears", after: "with makeup, ooh...", syncKey: "im-pretty-tears" }] },
    { parts: [{ before: "Ooh... things I could do with this", match: "brush", after: "", syncKey: "im-pretty-brush" }] },
    { parts: [{ before: "You'll never know that I hurt", after: "" }] },
  ],
};
