export const girlFromIpanema = {
  spotify: {
    embedUrl: "https://open.spotify.com/embed/track/2A9rRqpnCe7Vep0Jyzoxkv?utm_source=generator",
    title: "The Girl from Ipanema by Nat King Cole on Spotify",
  },
  vocabulary: [
    { word: "Ipanema", meaning: "a neighborhood and beach area in Rio de Janeiro, Brazil" },
    { word: "samba", meaning: "a Brazilian style of music and dance" },
    { word: "tan", meaning: "having skin made darker by the sun" },
    { word: "sway", meaning: "to move slowly from side to side" },
    { word: "gladly", meaning: "happily and willingly" },
    { word: "sea", meaning: "a large area of salt water" },
    { word: "straight ahead", meaning: "directly forward" },
  ],
};

export const girlFromIpanemaOpeningVerses = {
  words: ["goes", "passes", "walks", "swings", "passes"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Tall and tan and young and lovely", after: "" }] },
    { parts: [{ before: "The girl from Ipanema", answer: "goes", after: "walking" }] },
    { parts: [{ before: "And when she", answer: "passes", after: ", each one she passes goes ‘ah’" }] },
    { parts: [{ before: "When she", answer: "walks", after: ", she is like a samba" }] },
    { parts: [{ before: "That", answer: "swings", after: "so cool and sways so gentle" }] },
    { parts: [{ before: "That when she", answer: "passes", after: ", each one she passes goes ‘ah’" }] },
  ],
};

export const girlFromIpanemaBridgeAndFinalVerse = {
  pronouns: ["I", "my", "me", "she", "her"],
  lyrics: [
    { parts: [{ before: "But", answer: "I", after: "watch her so sadly" }] },
    { parts: [{ before: "How can I tell her I love", answer: "her", after: "" }] },
    { parts: [{ before: "Yes, I would give", answer: "my", after: "heart gladly" }] },
    { parts: [{ before: "But each day, that", answer: "she", after: "walks to the sea" }] },
    { parts: [{ before: "She looks straight ahead, not at", answer: "me", after: "" }] },
    { parts: [{ before: "Tall and tan and young and lovely", after: "" }] },
    { parts: [{ before: "The girl from Ipanema goes walking", after: "" }] },
    { parts: [
      { before: "And when she passes,", answer: "I", after: "smile, but" },
      { before: "", answer: "she", after: "doesn't see" },
    ] },
  ],
};
