export const ordinary = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/u2ah9tWTkmk",
    title: "Ordinary by Alex Warren on YouTube",
  },
  vocabulary: [
    { word: "mundane", meaning: "ordinary and not very exciting" },
    { word: "ordinary", meaning: "normal or not special" },
    { word: "water down", meaning: "to make something weaker" },
    { word: "ecstasy", meaning: "a feeling of extreme happiness" },
    { word: "shatter", meaning: "to break suddenly into many pieces" },
    { word: "jealous", meaning: "unhappy because someone has something you want" },
    { word: "dead and buried", meaning: "completely finished and in the past" },
    { word: "run out", meaning: "to have none left" },
  ],
};

export const ordinaryFirstStanza = {
  icons: [
    { id: "water", symbol: "💧", ariaLabel: "water" },
    { id: "town", symbol: "🏘️", ariaLabel: "town" },
    { id: "colors", symbol: "🎨", ariaLabel: "colors" },
    { id: "time", symbol: "⏳", ariaLabel: "time" },
    { id: "love", symbol: "❤️", ariaLabel: "love" },
    { id: "look", symbol: "👀", ariaLabel: "look" },
  ],
  lyrics: [
    { parts: [{ before: "They say, ‘The holy", match: "water", after: "’ has watered down" }] },
    { parts: [{ before: "And this", match: "town", after: "has lost its faith" }] },
    { parts: [{ before: "Our", match: "colors", after: "will fade eventually" }] },
    { parts: [{ before: "So if our", match: "time", after: "is running out, day after day" }] },
    { parts: [{ before: "We'll make the mundane our masterpiece", after: "" }] },
    { parts: [{ before: "Oh, my, my", after: "" }] },
    { parts: [{ before: "Oh, my, my", match: "love", after: "" }] },
    { parts: [{ before: "I take one", match: "look", after: "at you" }] },
  ],
};

export const ordinaryChorus = {
  wordBank: ["take", "be", "drink", "find", "get", "return"],
  lyrics: [
    { before: "You are", answer: "taking", after: "me out of the ordinary" },
    { before: "I want you laying me down until we", answer: "are", after: "dead and buried" },
    { before: "On the edge of your knife, staying", answer: "drunk", after: "on your vine" },
    { before: "The angels up in the clouds are jealous, knowing we", answer: "found", after: "", syncKey: "ordinary-found" },
    { before: "Something so out of the ordinary", answer: "", after: "" },
    { before: "You", answer: "got", after: "me kissing the ground of your sanctuary" },
    { before: "Shatter me with your touch, oh Lord,", answer: "return", after: "me to dust" },
    { before: "The angels up in the clouds are jealous, knowing we", answer: "found", after: "", syncKey: "ordinary-found" },
  ],
};

export const ordinaryThirdStanza = {
  lyrics: [
    { items: [{ before: "Hopeless hallelujah", answer: "", after: "", options: [] }] },
    { items: [{ before: "On this side of Heaven's", answer: "gate", after: "", options: ["gate", "faith"] }] },
    { items: [{ before: "Oh, my life, how do ya", answer: "", after: "", options: [] }] },
    { items: [{ before: "Breathe and take my breath", answer: "away", after: "?", options: ["away", "wait"] }] },
    { items: [{ before: "At your altar, I will", answer: "pray", after: "", options: ["pray", "play"] }] },
    { items: [{ before: "You're the sculptor, I'm the", answer: "clay", after: "", options: ["clay", "game"] }] },
    { items: [{ before: "Oh, my, my", answer: "", after: "", options: [] }] },
  ],
};

export const ordinaryFourthStanza = {
  lyrics: [
    { items: [{ before: "Something", answer: "so", after: "heavenly, higher than ecstasy", options: ["so", "on", "in"] }] },
    { items: [{ before: "Whenever you're next to", answer: "me", after: ", oh my, my", options: ["me", "my", "we"] }] },
    { items: [{ before: "World was", answer: "in", after: "black and white until I saw your light", options: ["in", "on", "at"] }] },
    { items: [{ before: "I thought you had", answer: "to", after: "die to find", options: ["to", "in", "so"] }] },
  ],
};
