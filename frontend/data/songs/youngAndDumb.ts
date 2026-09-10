export const youngAndDumb = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/gRX3Gm-YPRY",
    title: "Young & Dumb by Avril Lavigne featuring Simple Plan on YouTube",
  },
  vocabulary: [
    { word: "no way", meaning: "an informal expression used to refuse something or show surprise" },
    { word: "Fender", meaning: "a famous company that makes guitars and other musical equipment" },
    { word: "dumb", meaning: "informal: not intelligent or showing poor judgment" },
    { word: "trash a place", meaning: "to make a place very dirty or damage it badly" },
    { word: "last", meaning: "to continue for a period of time" },
    { word: "tank top", meaning: "a shirt with no sleeves" },
    { word: "necktie", meaning: "a long piece of cloth worn around the neck with a formal shirt" },
    { word: "eyeliner", meaning: "makeup used to draw a line around the eyes" },
  ],
};

export const youngAndDumbVerseOne = {
  words: ["hangin'", "Leavin'", "Rockin'", "chasin'", "Livin'", "Trashin'", "nothin'"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Back when we were young and dumb", after: "" }] },
    { parts: [{ before: "And we knew everything", after: "" }] },
    { parts: [{ before: "2002 and I'm", answer: "hangin'", after: "on a tour bus" }] },
    { parts: [{ before: "", answer: "Leavin'", after: "my hometown, Napanee" }] },
    { parts: [{ before: "", answer: "Rockin'", after: "a necktie, black eyeliner, white tank top" }] },
    { parts: [{ before: "And I'm", answer: "chasin'", after: "my dreams" }] },
    { parts: [{ before: "", answer: "Livin'", after: "like a rockstar" }] },
    { parts: [{ before: "", answer: "Trashin'", after: "hotel rooms" }] },
    { parts: [{ before: "Let's get stupid tattoos", after: "" }] },
    { parts: [{ before: "'Cause we got", answer: "nothin'", after: "to lose" }] },
  ],
};

export const youngAndDumbChorus = {
  wordBank: ["think", "have", "be", "know", "last", "get", "live"],
  lyrics: [
    { before: "I've been", answer: "thinking", after: "about that summer" },
    { before: "When we", answer: "had", after: "each other" },
    { before: "Back when we", answer: "were", after: "young and dumb" },
    { before: "And we", answer: "knew", after: "everything" },
    { before: "We said this would", answer: "last", after: "forever" },
    { before: "Can't", answer: "get", after: "any better" },
    { before: "Like when we were young and dumb", answer: "", after: "" },
    { before: "And we had everything", answer: "", after: "" },
    { before: "These are the best nights", answer: "", after: "" },
    { before: "", answer: "Living", after: "our best life" },
  ],
};

export const youngAndDumbVerseTwo = {
  lyrics: [
    { before: "We're back again, now it's", answer: "twenty", scrambled: "ytwent", after: "years later" },
    { before: "Somehow, it feels like nothing has changed", answer: "", scrambled: "", after: "" },
    { before: "I'm just a kid, still a pop-punk", answer: "skater", scrambled: "retsak", after: "" },
    { before: "They told me, ‘Get a", answer: "job", scrambled: "boj", after: ",’ but I said, ‘No way’" },
    { before: "Livin' like a rockstar", answer: "", scrambled: "", after: "" },
    { before: "Trashin' dressing rooms", answer: "", scrambled: "", after: "" },
    { before: "Smashing Fender", answer: "guitars", scrambled: "sratugi", after: "" },
    { before: "'Cause we got nothin' to lose", answer: "", scrambled: "", after: "" },
  ],
};
