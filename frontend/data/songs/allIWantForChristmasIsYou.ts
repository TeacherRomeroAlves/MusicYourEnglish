export const allIWantForChristmasIsYou = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/aAkMkVFwAoo",
    title: "All I Want for Christmas Is You by Mariah Carey on YouTube",
  },
  vocabulary: [
    { word: "Saint Nick", meaning: "another name for Santa Claus, who brings Christmas presents" },
    { word: "Christmas", meaning: "a holiday on December 25 when Christians celebrate the birth of Jesus" },
    { word: "underneath", meaning: "under something; in a lower place" },
    { word: "stocking", meaning: "a large sock that people hang up for small Christmas presents" },
    { word: "fireplace", meaning: "a place inside a room where you can safely make a fire" },
    { word: "mistletoe", meaning: "a plant with small white berries that people hang up at Christmas and kiss under" },
    { word: "reindeer", meaning: "an animal like a deer that pulls Santa Claus's sleigh in Christmas stories" },
    { word: "sleigh", meaning: "a vehicle that animals pull over snow" },
  ],
};

export const christmasOpeningVersesAndChorus = {
  lyrics: [
    { before: "I don't", answer: "want", scrambled: "ntaw", after: "a lot for Christmas" },
    { before: "There is just one thing I", answer: "need", scrambled: "deen", after: "" },
    { before: "I don't", answer: "care", scrambled: "reac", after: "about the presents" },
    { before: "Underneath the Christmas tree", answer: "", scrambled: "", after: "" },
    { before: "I don't need to", answer: "hang", scrambled: "gnah", after: "my stocking" },
    { before: "Upon the fireplace", answer: "", scrambled: "", after: "" },
    { before: "Santa Claus won't", answer: "make", scrambled: "kema", after: "me happy" },
    { before: "With a toy on Christmas Day", answer: "", scrambled: "", after: "" },
    { before: "I just want you for my own", answer: "", scrambled: "", after: "" },
    { before: "More than you could ever", answer: "know", scrambled: "wonk", after: "" },
    { before: "Make my wish", answer: "come", scrambled: "meco", after: "true" },
    { before: "All I want for Christmas is you", answer: "", scrambled: "", after: "" },
  ],
};

export const christmasVerseTwoAndChorus = {
  icons: [
    { id: "snow", symbol: "❄️", ariaLabel: "snow" },
    { id: "mistletoe", symbol: "🌿", ariaLabel: "mistletoe, shown as a leafy plant" },
    { id: "reindeer", symbol: "🦌", ariaLabel: "reindeer" },
    { id: "tonight", symbol: "🌙", ariaLabel: "tonight" },
  ],
  lyrics: [
    { parts: [{ before: "I won't ask for much this Christmas", after: "" }] },
    { parts: [{ before: "I won't even wish for", match: "snow", after: "" }] },
    { parts: [{ before: "And I just wanna keep on waiting", after: "" }] },
    { parts: [{ before: "Underneath the", match: "mistletoe", after: "" }] },
    { parts: [{ before: "I won't make a list and send it", after: "" }] },
    { parts: [{ before: "To the North Pole for Saint Nick", after: "" }] },
    { parts: [{ before: "I won't even stay awake to hear", after: "" }] },
    { parts: [{ before: "Those magic", match: "reindeer", after: "click" }], dividerAfter: true },
    { parts: [{ before: "I just want you here", match: "tonight", after: "" }] },
    { parts: [{ before: "Holding on to me so tight", after: "" }] },
    { parts: [{ before: "What more can I do?", after: "" }] },
    { parts: [{ before: "Oh, all I want for Christmas is you", after: "" }] },
  ],
};

export const christmasBridgeAndFinalVerse = {
  words: ["shining", "singing", "ringing", "asking", "Standing"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Oh, the lights are", answer: "shining", after: "" }] },
    { parts: [{ before: "So brightly everywhere", after: "" }] },
    { parts: [{ before: "And the sound of children's", after: "" }] },
    { parts: [{ before: "Laughter fills the air", after: "" }] },
    { parts: [{ before: "Everyone is", answer: "singing", after: "" }] },
    { parts: [{ before: "I hear those sleigh bells", answer: "ringing", after: "" }] },
    { parts: [{ before: "Santa, won't you bring me the only one I need?", after: "" }] },
    { parts: [{ before: "Won't you please bring my baby to me?", after: "" }], dividerAfter: true },
    { parts: [{ before: "I don't want a lot for Christmas", after: "" }] },
    { parts: [{ before: "This is all I'm", answer: "asking", after: "for" }] },
    { parts: [{ before: "I just want to see my baby", after: "" }] },
    { parts: [{ before: "", answer: "Standing", after: "right outside my door" }] },
  ],
};
