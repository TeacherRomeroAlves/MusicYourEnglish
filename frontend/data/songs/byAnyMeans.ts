export const byAnyMeansVocabulary = [
  { word: "rules", meaning: "things that tell you what you can and cannot do" },
  { word: "by any means", meaning: "using whatever way is needed" },
  { word: "whatever", meaning: "anything at all; it does not matter what" },
  { word: "be worth", meaning: "to be good or important enough for the time or effort" },
  { word: "trouble", meaning: "a problem or a difficult situation" },
  { word: "back down", meaning: "to stop arguing or fighting for what you want" },
  { word: "contain", meaning: "to keep something under control" },
  { word: "hold back", meaning: "to stop someone from doing something or moving forward" },
];

export const byAnyMeansVerseOne = [
  { id: "byAnyMeansVerseOne-0", before: "Rules, somebody's gotta make 'em", answer: "", after: "" },
  { id: "byAnyMeansVerseOne-1", before: "Yeah, but someone's", answer: "always gotta break 'em", after: "" },
  { id: "byAnyMeansVerseOne-2", before: "And it's you, you, you're the one", answer: "", after: "" },
  { id: "byAnyMeansVerseOne-3", before: "When they tell", answer: "you to go one way", after: "" },
  { id: "byAnyMeansVerseOne-4", before: "You'll just go the other,", answer: "", after: "" },
  { id: "byAnyMeansVerseOne-5", before: "Cuz there's", answer: "no other code", after: "" },
  { id: "byAnyMeansVerseOne-6", before: "You're living by but your own", answer: "", after: "" },
];

export const byAnyMeansChorus = [
  { before: "They", answer: "can", after: "make whatever rules they" },
  { before: "", answer: "make", after: "", continuePreviousLine: true },
  { before: "We won't let those rules get in our", answer: "way", after: "" },
  { before: "Laws ain't", answer: "made", after: "to get you what you" },
  { before: "", answer: "need", after: "", continuePreviousLine: true },
  { before: "Sometimes what you gotta do you gotta do by any", answer: "means", after: "" },
];

export const byAnyMeansLetters = [...new Set(byAnyMeansChorus.flatMap(({ answer }) => [...answer]))].sort();

export const byAnyMeansVerseTwo = [
  { id: "byAnyMeansVerseTwo-0", before: "Let them think that", answer: "they can change you", after: "" },
  { id: "byAnyMeansVerseTwo-1", before: "When you're not afraid they can't contain you", answer: "", after: "" },
  { id: "byAnyMeansVerseTwo-2", before: "You gotta do, what", answer: "you need to do", after: "" },
  { id: "byAnyMeansVerseTwo-3", before: "So you", answer: "do a little damage", after: "" },
  { id: "byAnyMeansVerseTwo-4", before: "But it's worth the trouble", answer: "", after: "" },
  { id: "byAnyMeansVerseTwo-5", before: "Yeah there's only one", answer: "road you're going down", after: "" },
  { id: "byAnyMeansVerseTwo-6", before: "And that's your own", answer: "", after: "" },
];

export const byAnyMeansClauses = {
  words: ["won't listen", "can't stop", "on a mission", "can't be", "won't back down"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "You can scream", after: "" }] },
    { parts: [{ before: "They", answer: "won't listen", after: "" }] },
    { parts: [{ before: "You", answer: "can't stop", after: "" }] },
    { parts: [{ before: "You're", answer: "on a mission", after: "" }] },
    { parts: [{ before: "No, you", answer: "can't be", after: "held back" }] },
    { parts: [{ before: "No, you", answer: "won't back down", after: "" }] },
    { parts: [{ before: "Something's started, there's no stopping now", after: "" }] },
  ],
};
