export const badLife = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/o4552tadeuM",
    title: "Bad Life by Bring Me the Horizon and Sigrid on YouTube",
  },
  vocabulary: [
    { word: "loser", meaning: "a person who often fails or feels unsuccessful" },
    { word: "hang on", meaning: "to continue during a difficult time" },
    { word: "numb", meaning: "unable to feel emotion or physical sensation" },
    { word: "head above water", meaning: "managing to survive a difficult situation" },
    { word: "on the edge", meaning: "close to losing control" },
    { word: "fall apart", meaning: "to lose emotional control" },
    { word: "bear", meaning: "to accept or carry something difficult" },
    { word: "shoulders", meaning: "the body parts between your neck and arms" },
  ],
};

export const badLifeOpeningStanzas = {
  words: [
    { word: "damaged" },
    { word: "depressed" },
    { word: "dark" },
    { word: "sharks" },
    { word: "head" },
    { word: "sense" },
    { word: "apart" },
    { word: "wreck" },
  ],
  lyrics: [
    { parts: [{ before: "Everyone is", answer: "damaged", after: "" }] },
    { parts: [{ before: "A little", answer: "depressed", after: "" }] },
    { parts: [{ before: "Every now and then we get that feeling in our chest", after: "" }] },
    { parts: [{ before: "Some days I'm a loser, brush my teeth in the", answer: "dark", after: "" }] },
    { parts: [{ before: "Head above water in a swimming pool of", answer: "sharks", after: "" }] },
    { parts: [{ before: "Ooh, it's hard to get up out of bed when everything is on its", answer: "head", after: "" }] },
    { parts: [{ before: "And nothing seems to make any", answer: "sense", after: "" }] },
    { parts: [{ before: "Like a Band-Aid on a bleeding heart", after: "" }] },
    { parts: [{ before: "I fake a smile and fall", answer: "apart", after: "" }] },
    { parts: [{ before: "And no one ever knows I'm a", answer: "wreck", after: "" }] },
  ],
};

export const badLifeFirstChorus = {
  lines: [
    { id: "chorus-one-world", before: "When", answer: "the world is on your shoulders", after: "", syncKey: "bad-life-chorus-world" },
    { id: "chorus-one-weight", before: "And the weight of your own heart is too much to bear", answer: "", after: "" },
    { id: "chorus-one-afraid", before: "Well,", answer: "I know that you're afraid things will always be this way", after: "", syncKey: "bad-life-chorus-afraid" },
    { id: "chorus-one-bad-day", before: "It's just a bad day, not a bad life", answer: "", after: "" },
  ],
};

const laterStanzaSource = [
  { id: "later-backwards", text: "Everything's backwards and I'm hanging on", before: "Everything's", answer: "backwards", scrambled: "sdrawkcab", after: "and I'm hanging on" },
  { id: "later-undone", text: "No matter how hard I try I always come undone" },
  { id: "later-uncomfortably", text: "Backed in a corner, uncomfortably numb", before: "Backed in a corner,", answer: "uncomfortably", scrambled: "nfotrambolycu", after: "numb" },
  { id: "later-shadow", text: "Watching myself become a shadow of someone" },
  { id: "later-hard", text: "Oh, it's hard to find a place to hide", before: "Oh, it's", answer: "hard", scrambled: "adhr", after: "to find a place to hide" },
  { id: "later-inside", text: "When you're running from what's inside", before: "When you're running from what's", answer: "inside", scrambled: "nsdeii", after: "" },
  { id: "later-there", text: "No matter where you go, there you are" },
  { id: "later-war", text: "So tonight I'll go to war with me" },
  { id: "later-worst", text: "'Cause I'm my own worst enemy and I don't wanna fight anymore", before: "'Cause I'm my own", answer: "worst", scrambled: "tsorw", after: "enemy and I don't wanna fight anymore" },
] as const;

export const badLifeLaterUnscramble = {
  lyrics: laterStanzaSource.map((line) => ({
    before: "before" in line ? line.before : line.text,
    answer: "answer" in line ? line.answer : "",
    scrambled: "scrambled" in line ? line.scrambled : "",
    after: "after" in line ? line.after : "",
  })),
};

export const badLifeFullChorus = {
  lines: [
    { id: "full-chorus-world", before: "When", answer: "the world is on your shoulders", after: "", syncKey: "bad-life-chorus-world", includeInScore: false },
    { id: "full-chorus-weight", before: "And the weight of your own heart is too much to bear", answer: "", after: "" },
    { id: "full-chorus-afraid", before: "Well,", answer: "I know that you're afraid things will always be this way", after: "", syncKey: "bad-life-chorus-afraid", includeInScore: false },
    { id: "full-chorus-bad-day", before: "It's just a bad day, not a bad life", answer: "", after: "" },
    { id: "full-chorus-hopeless", before: "And", answer: "I know it feels so hopeless", after: "" },
    { id: "full-chorus-edge", before: "And I know how close you are to the edge right now", answer: "", after: "" },
    { id: "full-chorus-things", before: "So I wrote this song to say,", answer: "things won't always be this way", after: ", no" },
    { id: "full-chorus-last", before: "It's just a bad day, not a bad life", answer: "", after: "" },
  ],
};
