export const swim = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/h-Y97xErGL8",
    title: "Swim by BTS on YouTube",
  },
  vocabulary: [
    { word: "swim", meaning: "to move through water using your body" },
    { word: "dive", meaning: "to jump or move down into water" },
    { word: "love me bad", meaning: "informal: love me very much or intensely" },
    { word: "get cold feet", meaning: "to suddenly feel nervous and not want to do something" },
    { word: "stunning", meaning: "very beautiful or impressive" },
    { word: "goody-goody", meaning: "a person who always tries to behave perfectly" },
    { word: "drip", meaning: "small drops of liquid; slang for a stylish look or clothes" },
  ],
};

export const swimChorus = {
  lines: [
    { id: "swim-chorus-water", before: "Swim, swim /", answer: "Water falling off your skin", after: "" },
    { id: "swim-chorus-lifetime", before: "Swim, swim /", answer: "I could spend a lifetime watching you", after: "" },
    { id: "swim-chorus-begins", before: "Swim, swim /", answer: "This is how it all begins", after: "" },
    { id: "swim-chorus-dive", before: "Swim, swim /", answer: "I just wanna dive, I just wanna dive", after: "" },
  ],
};

export const swimInitialStanzas = {
  icons: [
    { id: "wake-up", symbol: "⏰", ariaLabel: "wake up" },
    { id: "map", symbol: "🗺️", ariaLabel: "map" },
    { id: "girl", symbol: "👩", ariaLabel: "girl" },
    { id: "love", symbol: "❤️", ariaLabel: "love" },
    { id: "nights", symbol: "🌃", ariaLabel: "nights" },
    { id: "moon", symbol: "🌙", ariaLabel: "moon" },
    { id: "sharks", symbol: "🦈", ariaLabel: "sharks" },
  ],
  lyrics: [
    { parts: [{ before: "Bad world", after: "" }] },
    { parts: [{ before: "Gone away, I still", match: "wake-up", after: "in this mad world" }] },
    { parts: [{ before: "Name a place that I could breathe on this", match: "map", after: ", world" }] },
    { parts: [{ before: "Looking like a goody-goody in this bad world, bad world", after: "" }] },
    { parts: [{ before: "Don't know how to act,", match: "girl", after: "" }] },
    { parts: [{ before: "I'm in this deep, tell me, where the hell you at, girl?", after: "" }] },
    { parts: [{ before: "Oh, you ain't even gotta", match: "love", after: "me bad, girl" }] },
    { parts: [{ before: "You know that I'm never holdin' back, girl, yeah", after: "" }] },
    { parts: [{ before: "So easy, don't make it so hard", after: "" }] },
    { parts: [{ before: "", match: "nights", after: "like these, I just wanna get lost" }] },
    { parts: [
      { before: "Right here with the", match: "moon", after: "and the" },
      { before: "", match: "sharks", after: "" },
    ] },
    { parts: [{ before: "I ain't gotta think 'bout a thing, baby, I just", after: "" }] },
  ],
};

export const swimMiddleStanza = {
  words: [
    { word: "deep" },
    { word: "cold" },
    { word: "ready" },
    { word: "high" },
    { word: "stunning" },
  ],
  lyrics: [
    { parts: [{ before: "Water, water so deep, water so", answer: "deep", after: "" }] },
    { parts: [{ before: "Take it off the ground, I ain't never getting", answer: "cold", after: "feet" }] },
    { parts: [{ before: "Yeah, you know me, yeah, you know me", after: "" }] },
    { parts: [{ before: "Sittin' on the shore, now I'm", answer: "ready", after: "for the whole sea" }] },
    { parts: [{ before: "I can feel the", answer: "high", after: "waves coming" }] },
    { parts: [{ before: "Why you run away? You can run in", after: "" }] },
    { parts: [{ before: "Salt on my tongue, she's", answer: "stunning", after: "" }] },
    { parts: [{ before: "You're the only place that I wanna be, yeah", after: "" }] },
  ],
};

export const swimFinalStanzas = {
  lyrics: [
    { parts: [{ before: "Splash, drift", option: { word: "away", isMissing: true }, after: "" }] },
    { parts: [{ before: "I make waves with my", option: { word: "two", isMissing: false }, after: "fins" }] },
    { parts: [{ before: "Splash, drip", option: { word: "", isMissing: false }, after: "" }] },
    { parts: [{ before: "I just", option: { word: "really", isMissing: true }, after: "wanna take it across the line" }] },
    { parts: [{ before: "Under here, we don't chase the", option: { word: "quick", isMissing: true }, after: "time" }] },
    { parts: [{ before: "Baby, everything can't be", option: { word: "so", isMissing: false }, after: "sad" }] },
    { parts: [{ before: "Turn my face", option: { word: "from", isMissing: false }, after: "the land" }] },
    { parts: [{ before: "I just wanna dive, I just wanna dive", option: { word: "", isMissing: false }, after: "" }] },
  ],
};
