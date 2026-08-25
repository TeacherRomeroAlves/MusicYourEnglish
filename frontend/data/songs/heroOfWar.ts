export const heroOfWar = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/_DboMAghWcA",
    title: "Hero of War by Rise Against on YouTube",
  },
  vocabulary: [
    { word: "white flag", meaning: "a white flag used to show that someone wants to stop fighting" },
    { word: "hero", meaning: "a brave person who helps or protects others" },
    { word: "blood", meaning: "the red liquid that moves through the body" },
    { word: "piss", meaning: "an informal and rude word meaning to urinate" },
    { word: "spit-shined", meaning: "polished until very clean and bright" },
    { word: "grave", meaning: "a place in the ground where a dead person is buried" },
    { word: "batons", meaning: "short, heavy sticks used by police or soldiers" },
    { word: "yelled", meaning: "spoke or shouted very loudly" },
    { word: "war", meaning: "an organized fight between countries or groups" },
  ],
};

export const heroOfWarFirstStanza = {
  icons: [
    { id: "world", symbol: "🌍", ariaLabel: "world" },
    { id: "gun", symbol: "🔫", ariaLabel: "gun" },
    { id: "boots", symbol: "🥾", ariaLabel: "boots" },
    { id: "hair", symbol: "💇", ariaLabel: "hair" },
    { id: "friends", symbol: "🫂", ariaLabel: "friends" },
  ],
  lyrics: [
    { parts: [{ before: "He said, ‘Son, have you seen the", match: "world", after: "?’" }] },
    { parts: [{ before: "Well, what would you say if I said that you could?", after: "" }] },
    { parts: [{ before: "‘Just carry this", match: "gun", after: ", you'll even get paid’" }] },
    { parts: [{ before: "I said, ‘That sounds pretty good’", after: "" }] },
    { parts: [{ before: "Black leather", match: "boots", after: "" }] },
    { parts: [{ before: "Spit-shined so bright", after: "" }] },
    { parts: [{ before: "They cut off my", match: "hair", after: "but it looked alright" }] },
    { parts: [{ before: "We marched and we sang", after: "" }] },
    { parts: [{ before: "We all became", match: "friends", after: "" }] },
    { parts: [{ before: "As we learned how to fight", after: "" }] },
  ],
};

export const heroOfWarChorus = {
  lyrics: [
    { before: "A", answer: "hero", scrambled: "oehr", after: "of war" },
    { before: "Yeah, that's what I'll be", answer: "", scrambled: "", after: "" },
    { before: "And when I come", answer: "home", scrambled: "emoh", after: "" },
    { before: "They'll be damn", answer: "proud", scrambled: "duorp", after: "of me" },
    { before: "I'll carry this", answer: "flag", scrambled: "galf", after: "" },
    { before: "To the", answer: "grave", scrambled: "evarg", after: "if I must" },
    { before: "'Cause it's a flag that I love", answer: "", scrambled: "", after: "" },
    { before: "And a flag that I", answer: "trust", scrambled: "tsurt", after: "" },
  ],
};

export const heroOfWarThirdStanza = {
  wordBank: ["kick", "yell", "cry", "get", "take", "piss", "tell", "join", "beat"],
  lyrics: [
    { before: "I", answer: "kicked", after: "in the door" },
    { before: "I", answer: "yelled", after: "my commands" },
    { before: "The children, they", answer: "cried", after: "" },
    { before: "But I", answer: "got", after: "my man" },
    { before: "We", answer: "took", after: "him away" },
    { before: "A bag over his face", answer: "", after: "" },
    { before: "From his family and his friends", answer: "", after: "" },
    { before: "They", answer: "took", after: "off his clothes" },
    { before: "They", answer: "pissed", after: "in his hands" },
    { before: "I", answer: "told", after: "them to stop" },
    { before: "But then I", answer: "joined", after: "in" },
    { before: "We", answer: "beat", after: "him with guns" },
    { before: "And batons not just once", answer: "", after: "" },
    { before: "But again and again", answer: "", after: "" },
  ],
};

export const heroOfWarFifthStanza = {
  lyrics: [
    { items: [{ before: "", answer: "She", after: "walked through bullets and haze", options: ["She", "He", "Me"] }] },
    { items: [{ before: "I asked", answer: "her", after: "to stop", options: ["her", "me", "his"] }] },
    { items: [{ before: "I begged", answer: "her", after: "to stay", options: ["her", "she", "their"] }] },
    { items: [{ before: "But", answer: "she", after: "pressed on", options: ["she", "we", "I"] }] },
    { items: [{ before: "So I lifted", answer: "my", after: "gun", options: ["my", "me", "I"] }] },
    { items: [{ before: "And", answer: "I", after: "fired away", options: ["I", "We", "You"] }] },
    { items: [{ before: "And the shells jumped through the smoke", answer: "", after: "", options: [] }] },
    { items: [{ before: "And into the sand", answer: "", after: "", options: [] }] },
    { items: [{ before: "That the blood now had soaked", answer: "", after: "", options: [] }] },
    { items: [
      { before: "", answer: "She", after: "collapsed with a flag in", options: ["She", "we", "I"] },
      { before: "", answer: "her", after: "hand", options: ["her", "my", "our"] },
    ] },
    { items: [{ before: "A flag white as snow", answer: "", after: "", options: [] }] },
  ],
};

export const heroOfWarFinalChorus = {
  lines: [
    { id: "hero-final-one", before: "A hero of war", answer: "", after: "" },
    { id: "hero-final-see", before: "Is", answer: "that what they see", after: "" },
    { id: "hero-final-scars", before: "Just medals and scars", answer: "", after: "" },
    { id: "hero-final-proud", before: "So damn", answer: "proud of me", after: "" },
    { id: "hero-final-flag", before: "And I", answer: "brought home that flag", after: "" },
    { id: "hero-final-dust", before: "Now it gathers dust", answer: "", after: "" },
    { id: "hero-final-love", before: "But it's a", answer: "flag that I love", after: "" },
    { id: "hero-final-trust", before: "It's the only flag I trust", answer: "", after: "" },
  ],
};
