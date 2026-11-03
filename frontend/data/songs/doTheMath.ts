export const doTheMath = {
  vocabulary: [
    { word: "happen to be", meaning: "to be something by chance" },
    { word: "denominator", meaning: "the number below the line in a fraction, like 4 in 3/4" },
    { word: "daddy issues", meaning: "an informal, often unkind phrase for problems linked to someone's relationship with their father" },
    { word: "do the math", meaning: "to use the facts to understand the answer" },
    { word: "constant", meaning: "a person or thing that stays the same" },
    { word: "heal", meaning: "to get better after being hurt or feeling sad" },
    { word: "delusion", meaning: "a strong belief that is not true" },
    { word: "sooner or later", meaning: "at some time in the future, even if you do not know when" },
  ],
};

export const doTheMathOpening = {
  words: ["funny", "crazy", "story", "problem", "disaster", "denominator", "fun", "factor", "history"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "I was just thinkin', that isn't it", answer: "funny", after: "" }] },
    { parts: [{ before: "How all of your exes happen to be", answer: "crazy", after: "?" }] },
    { parts: [{ before: "If you get the same end to every", answer: "story", after: "" }] },
    { parts: [{ before: "I might consider that maybe the", answer: "problem", after: "is you" }], dividerAfter: true },
    { parts: [{ before: "We both loved someone, it was you", after: "" }] },
    { parts: [{ before: "One big", answer: "disaster", after: "takes two" }] },
    { parts: [{ before: "Sooner or later, you'll see the one common", answer: "denominator", after: "" }] },
  ],
};

export const doTheMathChorus = [
  { before: "Do the", answer: "math", after: "", syncKey: "do-the-math-chorus-math" },
  { before: "It's you, it's always", answer: "been", after: "you", syncKey: "do-the-math-chorus-been" },
  { before: "And your daddy issues", answer: "", after: "" },
  { before: "That's a", answer: "fact", after: "" },
  { before: "It's true, the constant is you", answer: "", after: "" },
  { before: "And that's math I can do", answer: "", after: "" },
  { before: "When every", answer: "girl", after: "says the same exact s*" },
  { before: "And you", answer: "call", after: "them crazy, I don't think that's it" },
  { before: "Do the", answer: "math", after: "", syncKey: "do-the-math-chorus-math" },
  { before: "It's you, it's always", answer: "been", after: "you", syncKey: "do-the-math-chorus-been" },
  { before: "And that's math I can do", answer: "", after: "" },
];

export const doTheMathLaterVerses = [
  { before: "I was just", prefix: "thin", answer: "king", after: ", isn't it silly" },
  { before: "How I really", prefix: "lo", answer: "ved", after: "you, and you were just healing?" },
  { before: "Now you've got someone who's healing you from me", after: "" },
  { before: "She really", prefix: "lo", answer: "ves", after: "you, and you call it easy" },
  { before: "You can't be alone, you've got two f* phones", after: "" },
  { before: "And a million excuses why you're never home", after: "" },
  { before: "What's the", prefix: "con", answer: "fusion", after: "? Yeah, you're in delusion" },
  { before: "From my point of view, there's only one", prefix: "con", answer: "clusion", after: "" },
];
