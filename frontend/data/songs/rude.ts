export const rude = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/PIh2xe4jnpk",
    title: "Rude by MAGIC! on YouTube",
  },
  vocabulary: [
    { word: "daughter", meaning: "someone's child who is a girl or woman" },
    { word: "old-fashioned", meaning: "having ideas or styles from the past" },
    { word: "rude", meaning: "not polite; speaking or acting in an unkind way" },
    { word: "tough luck", meaning: "a way to say too bad, often without feeling sorry for someone" },
    { word: "blessing", meaning: "saying yes to someone's plan and wishing them well" },
    { word: "jet", meaning: "a very fast airplane" },
    { word: "gotta", meaning: "a way of saying have got to or have to in songs and everyday talk" },
  ],
};

export const rudeFirstStanza = {
  icons: [
    { id: "bed", symbol: "🛏️", ariaLabel: "bed" },
    { id: "suit", symbol: "🤵", ariaLabel: "suit" },
    { id: "jet", symbol: "✈️", ariaLabel: "jet" },
    { id: "door", symbol: "🚪", ariaLabel: "door" },
    { id: "question", symbol: "❓", ariaLabel: "question" },
  ],
  lyrics: [
    { parts: [{ before: "Saturday morning, jumped out of", match: "bed", after: "" }] },
    { parts: [{ before: "And put on my best", match: "suit", after: "" }] },
    { parts: [{ before: "Got in my car and raced like a", match: "jet", after: "" }] },
    { parts: [{ before: "All the way to you", after: "" }] },
    { parts: [{ before: "Knocked on your", match: "door", after: "with heart in my hand" }] },
    { parts: [{ before: "To ask you a", match: "question", after: "" }] },
    { parts: [{ before: "'Cause I know that you're an old-fashioned man", after: "" }] },
  ],
};

export const rudeChorus = {
  lines: [
    { id: "rude-rest-life", before: "Can I have your daughter for the", answer: "rest of my life?", after: "" },
    { id: "rude-need-know", before: "Say yes, say yes, 'cause", answer: "I need to know", after: "" },
    { id: "rude-day-die", before: "You say I'll never get your blessin' until", answer: "the day I die", after: "" },
    { id: "rude-tough-luck", before: "Tough luck, my friend, but the answer is no", answer: "", after: "" },
    { id: "rude-rude-first", before: "Why you gotta be so rude?", answer: "", after: "" },
    { id: "rude-human", before: "Don't you know", answer: "I'm human too", after: "?" },
    { id: "rude-rude-second", before: "Why you gotta be so rude?", answer: "", after: "" },
    { id: "rude-anyway", before: "I'm", answer: "gonna marry her anyway", after: "" },
    { id: "rude-what-say", before: "Marry that girl, yeah, no matter", answer: "what you say", after: "" },
    { id: "rude-family", before: "Marry that girl, and", answer: "we'll be a family", after: "" },
  ],
};

export const rudeFourthStanza = {
  lyrics: [
    { before: "I hate to do this, but you leave no choice" },
    { before: "Can't live", option: { id: "rude-without", word: "without", isPresent: true }, after: "her" },
    { before: "Love me or hate me, we will be", option: { id: "rude-in-both", word: "in", isPresent: false }, after: "both" },
    { before: "Standin'", option: { id: "rude-at", word: "at", isPresent: true }, after: "that altar" },
    { before: "Or we will run", option: { id: "rude-in-away", word: "in", isPresent: false }, after: "away" },
    { before: "To another galaxy, you know" },
    { before: "You know she's", option: { id: "rude-in-love", word: "in", isPresent: true }, after: "love with me" },
    { before: "She will go", option: { id: "rude-to-anywhere", word: "to", isPresent: false }, after: "anywhere I go" },
  ],
};
