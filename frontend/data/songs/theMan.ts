export const theMan = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/AqAJLh9wuZ0",
    title: "The Man by Taylor Swift on YouTube",
  },
  vocabulary: [
    { word: "play the field", meaning: "to date different people without choosing one serious relationship" },
    { word: "fearless", meaning: "not afraid" },
    { word: "alpha type", meaning: "a confident person who likes to lead" },
    { word: "come at someone", meaning: "to criticize, challenge, or attack someone" },
    { word: "hustle", meaning: "to work very hard to become successful" },
    { word: "be sick of something", meaning: "to be tired or annoyed by something" },
    { word: "brag", meaning: "to talk too proudly about yourself or your success" },
    { word: "baller", meaning: "an informal word for a rich, successful, and confident person" },
  ],
};

export const theManOpeningStanzas = {
  lyrics: [
    { before: "I would be", prefix: "c", answer: "omplex", after: "" },
    { before: "I would be", prefix: "c", answer: "ool", after: "" },
    { before: "They'd say I played the field before I found someone to commit to", after: "" },
    { before: "And that would be", prefix: "o", answer: "kay", after: "for me to do" },
    { before: "Every conquest I had made would make me more of a", prefix: "b", answer: "oss", after: "to you" },
    { before: "I'd be a fearless", prefix: "l", answer: "eader", after: "" },
    { before: "I'd be an", prefix: "a", answer: "lpha", after: "type" },
    { before: "When", prefix: "every", answer: "one", after: "believes ya" },
    { before: "What's that like?", after: "" },
  ],
};

export const theManChorus = {
  lines: [
    { id: "man-chorus-running", before: "I'm so sick of", answer: "running as fast as I can", after: "" },
    { id: "man-chorus-quicker", before: "Wondering if I'd", answer: "get there quicker if I was a man", after: "" },
    { id: "man-chorus-coming", before: "And I'm so sick of", answer: "them coming at me again", after: "" },
    { id: "man-chorus-was", before: "'Cause if", answer: "I was a man", after: "" },
    { id: "man-chorus-the-man", before: "Then", answer: "I'd be the man", after: "" },
  ],
};

export const theManThirdStanza = {
  items: [
    { id: "man-order-work", text: "They'd say I hustled, put in the work" },
    { id: "man-order-deserve", text: "They wouldn't shake their heads and question how much of this I deserve" },
    { id: "man-order-wearing", text: "What I was wearing, if I was rude" },
    { id: "man-order-ideas", text: "Could all be separated from my good ideas and power moves?" },
    { id: "man-order-toast", text: "And they would toast to me, let the players play" },
    { id: "man-order-leo", text: "I'd be just like Leo in Saint-Tropez" },
  ],
};

export const theManFourthStanza = {
  lyrics: [
    { items: [{ before: "What's it like", answer: "to brag", after: "about", options: ["to brag", "bragging"] }] },
    { items: [{ before: "", answer: "Raking", after: "in dollars", options: ["Raking", "to rake"] }] },
    { items: [{ before: "And", answer: "getting", after: "bitches and models", options: ["getting", "to get"] }] },
    { items: [{ before: "And it's all good if you're bad", answer: "", after: "", options: [] }] },
    { items: [{ before: "And it's okay if you're mad", answer: "", after: "", options: [] }] },
    { items: [{ before: "If I was out", answer: "flashing", after: "my dollars", options: ["flashing", "to flash"] }] },
    { items: [{ before: "I'd be a B****, not a baller", answer: "", after: "", options: [] }] },
    { items: [{ before: "They paint me out", answer: "to be", after: "bad", options: ["to be", "being"] }] },
    { items: [{ before: "So it's okay that I'm mad", answer: "", after: "", options: [] }] },
  ],
};

export const theManFinalChorus = {
  lines: theManChorus.lines.map((line) => ({ ...line, id: line.id.replace("chorus", "final") })),
};
