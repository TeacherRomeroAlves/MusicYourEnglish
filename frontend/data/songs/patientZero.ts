export const patientZero = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/V-uIp-WuD60",
    title: "Patient Zero by Taylor Swift on YouTube",
  },
  vocabulary: [
    { word: "halo", meaning: "a circle of light shown above the head of a holy person" },
    { word: "toxins", meaning: "poisonous substances that can make people sick" },
    { word: "be sick of something", meaning: "to be tired or annoyed by something" },
    { word: "patient zero", meaning: "the first known person to have or spread a disease" },
    { word: "I got you", meaning: "an informal way to say I understand or I will support you" },
    { word: "burst", meaning: "to enter, open, or break suddenly and with force" },
    { word: "reeling", meaning: "feeling shocked, confused, or emotionally unsteady" },
    { word: "social climb", meaning: "an attempt to gain status by connecting with important people" },
  ],
};

export const patientZeroChorus = {
  lyrics: [
    { before: "If you wanna", answer: "party", scrambled: "ytrap", after: "with somebody who" },
    { before: "", answer: "might", scrambled: "thgim", after: "know", continuePreviousLine: true },
    { before: "About the", answer: "devil", scrambled: "lidve", after: "on his shoulder under his" },
    { before: "", answer: "halo", scrambled: "loah", after: "", continuePreviousLine: true },
    { before: "When the", answer: "toxins", scrambled: "sotinx", after: "take their hold, you'd rather" },
    { before: "", answer: "die", scrambled: "eid", after: "than let it go", continuePreviousLine: true },
    { before: "But if you're", answer: "sick", scrambled: "kcsi", after: "of him, I got you, I was patient" },
    { before: "", answer: "zero", scrambled: "roze", after: "", continuePreviousLine: true },
  ],
};

export const patientZeroVerseOne = {
  lyrics: [
    { items: [
      { before: "I've gotta", answer: "be", after: "honest, I've", options: ["be", "been"] },
      { before: "", answer: "been", after: "expecting your call", options: ["been", "be"] },
    ] },
    { items: [{ before: "No, it", answer: "is", after: "not a bad time at all", options: ["is", "are"] }] },
    { items: [{ before: "I heard somebody saying there", answer: "is", after: "trouble in paradise", options: ["is", "isn't"] }] },
    { items: [{ before: "And my lips", answer: "are", after: "sealed tight now", options: ["are", "was"] }] },
    { items: [{ before: "It", answer: "is", after: "not for me to tell", options: ["is", "was"] }] },
    { items: [{ before: "Someone else what to do", answer: "", after: "", options: [] }] },
  ],
};

export const patientZeroVerseTwo = {
  icons: [
    { id: "fireworks", symbol: "🎆", ariaLabel: "fireworks" },
    { id: "love", symbol: "❤️", ariaLabel: "love" },
    { id: "woman", symbol: "👩", ariaLabel: "woman" },
    { id: "rain", symbol: "🌧️", ariaLabel: "rain" },
  ],
  lyrics: [
    { parts: [{ before: "I bet he burst into your life like", match: "fireworks", after: "" }] },
    { parts: [{ before: "I bet he even said, ‘I", match: "love", after: "you’ first" }] },
    { parts: [{ before: "And when you saw another", match: "woman", after: "coming out of his place" }] },
    { parts: [{ before: "I bet he kissed the", match: "rain", after: "off your face" }] },
    { parts: [{ before: "Now he seems bored by you", after: "" }] },
    { parts: [{ before: "And you don't know what to do", after: "" }] },
  ],
};

export const patientZeroVerseThree = {
  words: [
    "family and friends",
    "else loves him",
    "reflected light",
    "won the race",
    "walked away",
  ].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "So let's get into it", after: "" }] },
    { parts: [{ before: "I know he charmed your", answer: "family and friends", after: "" }] },
    { parts: [{ before: "And you thought it's 'cause he loves you", after: "" }] },
    { parts: [{ before: "But it's 'cause he loves how everybody", answer: "else loves him", after: "" }] },
    { parts: [{ before: "I know it seems like he shines so bright", after: "" }] },
    { parts: [{ before: "But he's bathing in your", answer: "reflected light", after: "" }] },
    { parts: [{ before: "On a free solo social climb", after: "" }] },
    { parts: [{ before: "Take it from somebody who lost his games but", answer: "won the race", after: "" }] },
    { parts: [{ before: "Take it from someone who said all of this to his face", after: "" }] },
    { parts: [{ before: "Someone who knows she's more than just the chase", after: "" }] },
    { parts: [{ before: "Someone who had him and", answer: "walked away", after: "" }] },
    { parts: [{ before: "And so...", after: "" }] },
  ],
};

export const patientZeroOutro = {
  words: ["prayers", "pathetic", "killing", "zero"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "So if you wanna kick it, then I'm with it, I've been there", after: "" }] },
    { parts: [{ before: "Felt the reeling, done the healing, said the curses and", answer: "prayers", after: "" }] },
    { parts: [{ before: "When the fever turns a dreamer into a", answer: "pathetic", after: "ghost" }] },
    { parts: [{ before: "If he's", answer: "killing", after: "you, I see you, I was patient" }, { before: "", answer: "zero", after: "" }] },
  ],
};
