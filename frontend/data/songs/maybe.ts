export const maybeVocabulary = [
  { word: "maybe", meaning: "used when something is possible but not certain" },
  { word: "butterfly effect", meaning: "the idea that a small change can cause big changes later" },
  { word: "make up your mind", meaning: "to decide what to do or choose" },
  { word: "be gone", meaning: "to have left or no longer be there" },
  { word: "regret", meaning: "to feel sorry about something you did or did not do" },
  { word: "put out", meaning: "to stop a fire or light from burning" },
  { word: "misery", meaning: "a feeling of great sadness or pain" },
  { word: "there is no point in...", meaning: "doing something will not help or change anything" },
  { word: "dig your own grave", meaning: "to do something that causes serious problems for yourself" },
];

export const maybeIcons = [
  { id: "butterfly", symbol: "🦋", ariaLabel: "butterfly" },
  { id: "wall", symbol: "🧱", ariaLabel: "wall" },
  { id: "face", symbol: "🙂", ariaLabel: "face" },
  { id: "ten", symbol: "🔟", ariaLabel: "ten" },
];

export const maybeVerseOne = [
  { parts: [{ before: "That's hard", after: "" }] },
  { parts: [{ before: "Two, three, five...", after: "" }] },
  { parts: [{ before: "Maybe if I had something to say", after: "" }] },
  { parts: [{ before: "", match: "butterfly", after: "effect from the last three days now" }] },
  { parts: [{ before: "Maybe if I had something to save", after: "" }] },
  { parts: [{ before: "I used to have a soul until I threw it away", after: "" }] },
  { parts: [{ before: "There's shadows on the", match: "wall", after: ", wish I would've ran" }] },
  { parts: [{ before: "Gotta get away, I hope you understand", after: "" }] },
  { parts: [{ before: "I try to hide my", match: "face", after: "like a wanted man" }] },
  { parts: [{ before: "Maybe I'll be gone before you count to", match: "ten", after: "" }] },
];

export const maybeChorus = [
  { before: "I made up my", answer: "mind", scrambled: "ndim", after: "this" },
  { before: "", answer: "evening", scrambled: "ngiveen", after: "", continuePreviousLine: true },
  { before: "I'm taking the last, I'm taking the last", answer: "", scrambled: "", after: "" },
  { before: "", answer: "drink", scrambled: "nkrid", after: "while my conscience" },
  { before: "", answer: "eats", scrambled: "taes", after: "me", continuePreviousLine: true },
  { before: "I'm taking the last, I'm taking the last", answer: "", scrambled: "", after: "" },
  { before: "I'm", answer: "ready", scrambled: "dyare", after: "to let you go..." },
  { before: "This time is the last, this time is the last", answer: "", scrambled: "", after: "" },
];

export const maybeVerseTwo = [
  { before: "Maybe if we went another way", answer: "", after: "" },
  { before: "I wouldn't be regretting the decisions that I", answer: "made", after: ", uh" },
  { before: "I don't wanna spend another day", answer: "", after: "" },
  { before: "Looking for somebody that I", answer: "know", after: "I can't replace" },
  { before: "My tears fall, you don't", answer: "miss", after: "me" },
  { before: "Put me out my misery", answer: "", after: "" },
  { before: "Think my heart is history", answer: "", after: "" },
  { before: "I think I'm broken, nothing can", answer: "fix", after: "me" },
];

export const maybeOutro = [
  { items: [{ before: "Yeah...", answer: "", after: "", options: [] }] },
  { items: [{ before: "We were built", answer: "to", after: "fall apart", options: ["to", "two"] }] },
  { items: [{ before: "But I can't feel you now", answer: "", after: "", options: [] }] },
  { items: [{ before: "And it's", answer: "too", after: "late now, there's no point screaming", options: ["too", "to"] }] },
  { items: [{ before: "Dug your grave, so f* your feelings", answer: "", after: "", options: [] }] },
  { items: [{ before: "", answer: "No", after: "one is here, so now you're on your own", options: ["No", "know"] }] },
];
