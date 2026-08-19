export const happy = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/vhumOLNSSJY",
    title: "Happy by NF on YouTube",
  },
  vocabulary: [
    { word: "hang by a thread", meaning: "to be in a very difficult or uncertain situation" },
    { word: "reach out", meaning: "to contact someone for help or support" },
    { word: "soak up", meaning: "to enjoy an experience as much as possible" },
    { word: "agony", meaning: "very strong physical or emotional pain" },
    { word: "hurtful", meaning: "causing emotional pain" },
    { word: "burn bridges", meaning: "to damage a relationship so it cannot be repaired" },
    { word: "go up in flames", meaning: "to fail or be destroyed completely" },
    { word: "bend", meaning: "a curve or turn in a road" },
    { word: "be in a hole", meaning: "to be stuck in a difficult situation" },
  ],
};

export const happyOpening = {
  words: [
    "Dear", "been", "keep", "When", "life", "have", "true", "live", "feel",
    "Fear", "Loop", "Seen", "Here",
  ].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "", answer: "Dear", after: "God, please, hear me out" }] },
    { parts: [{ before: "I know it's", answer: "been", after: "a couple years" }] },
    { parts: [{ before: "Since I've reached out and said hello", after: "" }] },
    { parts: [{ before: "I bet You're wondering", after: "" }] },
    { parts: [{ before: "Why I", answer: "keep", after: "" }] },
    { parts: [{ before: "Obsessing on and stressing all the little things", after: "" }] },
    { parts: [{ before: "", answer: "When", after: "I should be" }] },
    { parts: [{ before: "Living", answer: "life", after: "and soaking up the memories" }] },
    { parts: [{ before: "I know I've been selfish, I", answer: "have", after: "" }] },
    { parts: [{ before: "No excuse to give you, it's", answer: "true", after: "" }] },
    { parts: [{ before: "Hanging by a thread's how I", answer: "live", after: "" }] },
    { parts: [{ before: "I don't know why, but I", answer: "feel", after: "more comfortable" }] },
  ],
};

export const happyChorus = {
  items: [
    { id: "chorus-1", text: "Living in my agony, watching my self-esteem" },
    { id: "chorus-2", text: "Go up in flames, acting like I don't" },
    { id: "chorus-3", text: "Care what anyone else thinks, when I know truthfully" },
    { id: "chorus-4", text: "That that's the furthest thing from how I" },
    { id: "chorus-5", text: "Feel, but I'm too proud to open up and ask ya" },
    { id: "chorus-6", text: "To pick me up and pull me out this hole I'm trapped in" },
    { id: "chorus-7", text: "The truth is, I need help, but I just can't imagine who" },
    { id: "chorus-8", text: "Who I'd be if I was happy" },
    { id: "post-1", text: "Don't know what's around the bend" },
    { id: "post-2", text: "Don't know what my future is" },
    { id: "post-3", text: "But I can't keep on living in" },
  ],
};

export const happyRelativeClauses = {
  words: [
    "that I won't address",
    "I ain't opened yet",
    "I should put to rest",
    "that I can't forget",
    "I been avoiding",
  ].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Yeah, been this way so long", after: "" }] },
    { parts: [{ before: "It feels like something's off when I'm not depressed", after: "" }] },
    { parts: [{ before: "I got some issues", answer: "that I won't address", after: "" }] },
    { parts: [{ before: "I got some baggage", answer: "I ain't opened yet", after: "" }] },
    { parts: [{ before: "I got some demons", answer: "I should put to rest", after: "" }] },
    { parts: [{ before: "I got some traumas", answer: "that I can't forget", after: "" }] },
    { parts: [{ before: "I got some phone calls", answer: "I been avoiding", after: "" }] },
  ],
};

export const happyWordPresence = {
  lyrics: [
    {
      before: "Some family members",
      option: { id: "family-that", word: "THAT", isPresent: false },
      after: "I don't really connect with",
    },
    {
      before: "Some things",
      option: { id: "things-that", word: "THAT", isPresent: false },
      after: "I said I wish I would've not let slip",
    },
    {
      before: "Some hurtful words",
      option: { id: "hurtful-that", word: "that", isPresent: true },
      after: "never should've left my lips",
    },
    { before: "Some bridges burned, I'm not ready to rebuild yet" },
    {
      before: "Some insecurities",
      option: { id: "insecurities-that", word: "THAT", isPresent: false },
      after: "I haven't dealt with, yes",
    },
    {
      before: "I'll be the first to admit",
      option: { id: "admit-that", word: "that", isPresent: true },
      after: "I'm a lonely soul",
    },
    {
      before: "And the last to admit",
      option: { id: "last-that", word: "THAT", isPresent: false },
      after: "I need a hand to hold",
    },
    { before: "Losing hope, headed down a dangerous road" },
    { before: "Strange, I know, but I feel most at home when I'm" },
  ],
};
