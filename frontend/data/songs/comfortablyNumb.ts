export const comfortablyNumb = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/4FLjT5V5Hog",
    title: "Comfortably Numb by Pink Floyd on YouTube",
  },
  vocabulary: [
    { word: "nod", meaning: "to move your head up and down to show yes or agreement" },
    { word: "numb", meaning: "unable to feel pain, touch, or strong emotions" },
    { word: "recede", meaning: "to move back or become less strong" },
    { word: "pinprick", meaning: "a very small sharp pain, like a needle touching your skin" },
    { word: "come in waves", meaning: "to happen again and again, with stronger and weaker moments" },
    { word: "catch a glimpse", meaning: "to see something for a very short time" },
    { word: "balloon", meaning: "a light rubber object filled with air" },
    { word: "fever", meaning: "a high body temperature when you are ill" },
  ],
};

export const comfortablyNumbVerseOne = {
  words: ["Is", "hear", "are", "Get", "need", "hurts"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Hello", after: "" }] },
    { parts: [{ before: "", answer: "Is", after: "there anybody in there?" }] },
    { parts: [{ before: "Just nod if you can", answer: "hear", after: "me" }] },
    { parts: [{ before: "Is there anyone at home?", after: "" }], dividerAfter: true },
    { parts: [{ before: "Come on now", after: "" }] },
    { parts: [{ before: "I hear you", answer: "are", after: "feeling down" }] },
    { parts: [{ before: "Well, I can ease your pain", after: "" }] },
    { parts: [{ before: "", answer: "Get", after: "you on your feet again" }], dividerAfter: true },
    { parts: [{ before: "Relax", after: "" }] },
    { parts: [{ before: "I'll", answer: "need", after: "some information first" }] },
    { parts: [{ before: "Just the basic facts", after: "" }] },
    { parts: [{ before: "Can you show me where it", answer: "hurts", after: "?" }] },
  ],
};

export const comfortablyNumbChorusOne = {
  words: ["are receding", "in waves", "a fever", "two balloons", "how I am"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "There is no pain, you", answer: "are receding", after: "", syncKey: "comfortably-numb-receding" }] },
    { parts: [{ before: "A distant ship smoke on the horizon", after: "" }] },
    { parts: [{ before: "You are only coming through", answer: "in waves", after: "", syncKey: "comfortably-numb-waves" }] },
    { parts: [{ before: "Your lips move but I can't hear what you're saying", after: "" }], dividerAfter: true },
    { parts: [{ before: "When I was a child I had", answer: "a fever", after: "" }] },
    { parts: [{ before: "My hands felt just like", answer: "two balloons", after: "" }] },
    { parts: [{ before: "Now I've got that feeling once again", after: "" }] },
    { parts: [{ before: "I can't explain, you would not understand", after: "" }] },
    { parts: [{ before: "This is not", answer: "how I am", after: "" }] },
    { parts: [{ before: "I have become comfortably numb", after: "" }] },
  ],
};

export const comfortablyNumbVerseThree = {
  lyrics: [
    { before: "O.K.", answer: "", scrambled: "", after: "" },
    { before: "Just a little", answer: "pinprick", scrambled: "kprnipic", after: "" },
    { before: "There'll be no more \"ah!\"", answer: "", scrambled: "", after: "" },
    { before: "But you may feel a little", answer: "sick", scrambled: "kcsi", after: "" },
    { before: "", answer: "", scrambled: "", after: "" },
    { before: "Can you", answer: "stand", scrambled: "dnats", after: "up?" },
    { before: "I do believe it's working, good", answer: "", scrambled: "", after: "" },
    { before: "That'll keep you going through the", answer: "show", scrambled: "whos", after: "" },
    { before: "Come on, it's time to go", answer: "", scrambled: "", after: "" },
  ],
};

export const comfortablyNumbChorusTwo = {
  words: ["are receding", "in waves", "of my eye", "is grown", "is gone"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "There is no pain, you", answer: "are receding", after: "", syncKey: "comfortably-numb-receding", includeInScore: false }] },
    { parts: [{ before: "A distant ship smoke on the horizon", after: "" }] },
    { parts: [{ before: "You are only coming through", answer: "in waves", after: "", syncKey: "comfortably-numb-waves", includeInScore: false }] },
    { parts: [{ before: "Your lips move but I can't hear what you're saying", after: "" }], dividerAfter: true },
    { parts: [{ before: "When I was a child", after: "" }] },
    { parts: [{ before: "I caught a fleeting glimpse", after: "" }] },
    { parts: [{ before: "Out of the corner", answer: "of my eye", after: "" }] },
    { parts: [{ before: "I turned to look but it was gone", after: "" }] },
    { parts: [{ before: "I cannot put my finger on it now", after: "" }] },
    { parts: [{ before: "The child", answer: "is grown", after: "" }] },
    { parts: [{ before: "The dream", answer: "is gone", after: "" }] },
    { parts: [{ before: "I have become comfortably numb", after: "" }] },
  ],
};
