export const gossip = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/rqDRMquMb8g",
    title: "GOSSIP by Måneskin on YouTube",
  },
  vocabulary: [
    { word: "sip", meaning: "to drink a small amount slowly" },
    { word: "gossip", meaning: "talk about other people's private lives" },
    { word: "choke", meaning: "to have trouble breathing because something blocks your throat" },
    { word: "gloomy", meaning: "sad and without much hope" },
    { word: "under the rug", meaning: "hidden so people do not see or discuss a problem" },
    { word: "surface", meaning: "the outside or top part of something" },
    { word: "iconic", meaning: "very famous and easy to recognize" },
    { word: "throat", meaning: "the part inside your neck used for breathing and swallowing" },
  ],
};

export const gossipOpeningStanzas = {
  icons: [
    { id: "city", symbol: "🌆", ariaLabel: "city" },
    { id: "price", symbol: "💰", ariaLabel: "price" },
    { id: "movie", symbol: "🎬", ariaLabel: "movie" },
    { id: "circus", symbol: "🎪", ariaLabel: "circus" },
    { id: "drink", symbol: "🥤", ariaLabel: "drink" },
    { id: "american", symbol: "🇺🇸", ariaLabel: "American" },
  ],
  lyrics: [
    { parts: [{ before: "Welcome to the", match: "city", after: "of lies" }] },
    { parts: [{ before: "Where everything's got a", match: "price", after: "" }] },
    { parts: [{ before: "Gonna be your favorite place", after: "" }] },
    { parts: [{ before: "You can be a", match: "movie", after: "star" }] },
    { parts: [{ before: "And get everything you want", after: "" }] },
    { parts: [{ before: "Just put some plastic on your face", after: "" }] },
    { parts: [{ before: "This place is a", match: "circus", after: ", you just see the surface", syncKey: "gossip-circus" }] },
    { parts: [{ before: "They cover s*** under the rug", after: "" }] },
    { parts: [{ before: "You can see they're faking", after: "" }] },
    { parts: [{ before: "They'll never be naked", after: "" }] },
    { parts: [{ before: "Just fill your", match: "drink", after: "with tonic gin", syncKey: "gossip-drink" }] },
    { parts: [{ before: "This is the", match: "american", after: "dream", syncKey: "gossip-american" }] },
  ],
};

export const gossipChorus = {
  lyrics: [
    { before: "So sip the gossip,", answer: "drink", scrambled: "knird", after: "'til you" },
    { before: "", answer: "choke", scrambled: "ekohc", after: "" },
    { before: "Sip the gossip,", answer: "burn", scrambled: "nrub", after: "down your" },
    { before: "", answer: "throat", scrambled: "taorht", after: "" },
    { before: "You're not", answer: "iconic", scrambled: "cinoic", after: ", you are just like them all" },
    { before: "Don't", answer: "act", scrambled: "tca", after: "like you don't know" },
  ],
};

export const gossipLaterStanzas = {
  icons: [
    { id: "blue", symbol: "🔵", ariaLabel: "blue" },
    { id: "gloomy", symbol: "😞", ariaLabel: "gloomy" },
    { id: "pills", symbol: "💊", ariaLabel: "pills" },
    { id: "circus", symbol: "🎪", ariaLabel: "circus" },
    { id: "drink", symbol: "🥤", ariaLabel: "drink" },
    { id: "american", symbol: "🇺🇸", ariaLabel: "American" },
  ],
  lyrics: [
    { parts: [{ before: "Keep drinking and acting cool", after: "" }] },
    { parts: [{ before: "Don't care if your day is", match: "blue", after: "" }] },
    { parts: [{ before: "Nobody loves a", match: "gloomy", after: "face, just" }] },
    { parts: [{ before: "Take your", match: "pills", after: "and dance all night" }] },
    { parts: [{ before: "Don't think at all, that's the advice", after: "" }] },
    { parts: [{ before: "So c'mon, let's try, it's just a taste", after: "" }] },
    { parts: [{ before: "This place is a", match: "circus", after: ", you just see the surface", syncKey: "gossip-circus" }] },
    { parts: [{ before: "They cover s*** under the rug", after: "" }] },
    { parts: [{ before: "You can see they're faking", after: "" }] },
    { parts: [{ before: "They'll never be naked", after: "" }] },
    { parts: [{ before: "Just fill your", match: "drink", after: "with tonic gin", syncKey: "gossip-drink" }] },
    { parts: [{ before: "This is the", match: "american", after: "dream", syncKey: "gossip-american" }] },
  ],
};
