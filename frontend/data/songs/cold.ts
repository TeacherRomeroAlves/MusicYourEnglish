export const cold = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/-KjOMY_zxrA",
    title: "Cold by BigXthaPlug featuring Post Malone on YouTube",
  },
  vocabulary: [
    { word: "longneck", meaning: "a bottle with a long, narrow neck, often used for beer" },
    { word: "perf", meaning: "an informal short form of perfect" },
    { word: "paycheck", meaning: "the money you receive from your job" },
    { word: "beg", meaning: "to ask for something strongly or desperately" },
    { word: "make-believe", meaning: "imaginary and not real" },
    { word: "fade", meaning: "to slowly become weaker or disappear" },
    { word: "toss and turn", meaning: "to move a lot in bed because you cannot sleep" },
  ],
};

export const coldChorus = {
  allowedLetters: ["S", "A", "P", "W", "B", "T", "Y"],
  lyrics: [
    { before: "Hey, don't tell me you want me to", answer: "stay", after: "" },
    { before: "My heart's made for running", answer: "away", after: "" },
    { before: "I don't know what else I can", answer: "say", after: "" },
    { before: "But I'm so co-o-o-old", answer: "", after: "" },
    { before: "Like a longneck burning through a", answer: "pay", after: "check" },
    { before: "", answer: "baby", after: ", I'm co-o-o-old, so cold" },
  ],
};

export const coldSecondStanza = {
  words: ["cold", "stone", "songs", "21", "richer", "pictures", "track"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Ay, and I hate when it's", answer: "cold", after: ", it remind me I'm alone" }] },
    { parts: [{ before: "And that my heart is made of", answer: "stone", after: ", plus I could never say I'm wrong" }] },
    { parts: [{ before: "I always did things on my own but yet I never set the tone", after: "" }] },
    { parts: [{ before: "And since I never set the tone, I tend to put it in these", answer: "songs", after: "" }] },
    { parts: [{ before: "At the age of", answer: "21", after: ", this life got wicked" }] },
    { parts: [{ before: "Felt all I ever needed was love, but now I beg for distance", after: "" }] },
    { parts: [{ before: "Then love started to fade the very moment I got", answer: "richer", after: "" }] },
    { parts: [{ before: "Like I faded from the", answer: "pictures", after: ", all because I made decisions" }] },
    { parts: [{ before: "And I was told that you would stick around but where you at?", after: "" }] },
    { parts: [{ before: "They also told me, ‘Just believe,’ I just know that you won't come back", after: "" }] },
    { parts: [{ before: "Feel like I'm chasin' after make-believe, ran laps around this", answer: "track", after: "" }] },
    { parts: [{ before: "A thousand miles chasin' for love that I just know I can't get back, so why you tell me that?", after: "" }] },
  ],
};

export const coldFourthStanza = {
  words: [
    "it get worse",
    "I'm not perf",
    "I'm still workin'",
    "I finally found my purpose",
    "my heart is hurtin'",
    "I'll try and make it better",
  ].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Was always told that as this s*** get better,", answer: "it get worse", after: "" }] },
    { parts: [{ before: "Was times I could've gave my all, but I can tell you,", answer: "I'm not perf", after: "" }] },
    { parts: [{ before: "I'm young and I'm still learnin', so, other words,", answer: "I'm still workin'", after: "" }] },
    { parts: [{ before: "Just to be a better man, and that's gon' happen, that's for certain", after: "" }] },
    { parts: [{ before: "'Cause for your love, I'll fight, 'cause now", answer: "I finally found my purpose", after: "" }] },
    { parts: [{ before: "So tired of tossin', turnin', and runnin',", answer: "my heart is hurtin'", after: "" }] },
    { parts: [{ before: "So just give me this chance, I swear", answer: "I'll try and make it better", after: "" }] },
    { parts: [{ before: "I'll walk through any weather just to have us here together", after: "" }] },
  ],
};
