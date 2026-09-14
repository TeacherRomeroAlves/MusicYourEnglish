export const breakingTheHabit = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/v2H4l9RpkwM",
    title: "Breaking the Habit by Linkin Park on YouTube",
  },
  vocabulary: [
    { word: "wound", meaning: "an injury or a deep emotional hurt" },
    { word: "pick someone apart", meaning: "to criticize someone in great detail" },
    { word: "unless", meaning: "except if something happens" },
    { word: "assume", meaning: "to believe something is true without proof" },
    { word: "mean", meaning: "to intend to express a particular idea" },
    { word: "clutch", meaning: "to hold something very tightly" },
    { word: "at fault", meaning: "responsible for a problem or mistake" },
    { word: "habit", meaning: "something you do regularly, often without thinking" },
  ],
};

export const breakingTheHabitVerseOne = {
  words: ["consume", "again", "assume", "Unless"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Memories", answer: "consume", after: ", like opening the wound" }] },
    { parts: [{ before: "I'm picking me apart", answer: "again", after: "" }] },
    { parts: [{ before: "You all", answer: "assume", after: "I'm safe here in my room" }] },
    { parts: [{ before: "", answer: "Unless", after: "I try to start again" }] },
  ],
};

export const breakingTheHabitChorus = {
  lyrics: [
    { items: [{ before: "I don't", answer: "want", after: "to be the one the battles always choose", options: ["want", "wants"] }] },
    { items: [{ before: "'Cause inside, I", answer: "realize", after: "that I'm the one confused", options: ["realize", "realizing"] }] },
    { items: [{ before: "I don't", answer: "know", after: "what's worth fighting for or why I have to scream", options: ["know", "knowing"] }] },
    { items: [{ before: "I don't know why I instigate and say what I", answer: "don't", after: "mean", options: ["don't", "doesn't"] }] },
    { note: true, items: [{ before: "(Final chorus: But now I have some clarity to show you what I mean)", answer: "", after: "", options: [] }] },
    { items: [{ before: "I don't know how I got this way, I know it's not alright", answer: "", after: "", options: [] }] },
    { items: [{ before: "So, I'm", answer: "breaking", after: "the habit", options: ["breaking", "break"] }] },
    { items: [{ before: "I'm breaking the habit tonight", answer: "", after: "", options: [] }] },
  ],
};

export const breakingTheHabitVerseTwo = {
  lyrics: [
    { before: "Clutching my cure, I tightly lock the", answer: "door", scrambled: "rood", after: "" },
    { before: "I try to catch my breath", answer: "again", scrambled: "gaian", after: "" },
    { before: "I hurt much more than anytime", answer: "before", scrambled: "eofber", after: "" },
    { before: "I had no options", answer: "left", scrambled: "tfel", after: "again" },
  ],
};

export const breakingTheHabitVerseThree = {
  items: [
    { id: "habit-order-walls", text: "I'll paint it on the walls" },
    { id: "habit-order-fault", text: "'Cause I'm the one at fault" },
    { id: "habit-order-fight", text: "I'll never fight again" },
    { id: "habit-order-ends", text: "And this is how it ends" },
  ],
};
