export const billionaire = {
  youtube: {
    embedUrl: "https://www.youtube.com/embed/8aRor905cCw",
    title: "Billionaire by Travie McCoy featuring Bruno Mars on YouTube",
  },
  vocabulary: [
    { word: "FEMA", meaning: "a US agency that helps people after disasters" },
    { word: "so f* bad", meaning: "very much; an informal and strong expression" },
    { word: "Katrina", meaning: "a powerful hurricane that hit the US in 2005" },
    { word: "Santa Claus", meaning: "the character who gives presents at Christmas" },
    { word: "Oprah", meaning: "a famous American TV host and businesswoman" },
    { word: "Forbes", meaning: "a magazine known for stories and lists about money and business" },
    { word: "tax bracket", meaning: "a group that shows how much tax a person pays based on income" },
    { word: "take a crack at something", meaning: "to try to do something" },
  ],
};

export const billionaireChorus = {
  icons: [
    { id: "billionaire", symbol: "💰", ariaLabel: "billionaire" },
    { id: "magazine", symbol: "📖", ariaLabel: "magazine" },
    { id: "queen", symbol: "👑", ariaLabel: "queen" },
    { id: "time", symbol: "⏰", ariaLabel: "time" },
    { id: "shiny", symbol: "✨", ariaLabel: "shiny" },
    { id: "city", symbol: "🏙️", ariaLabel: "city" },
    { id: "world", symbol: "🌍", ariaLabel: "world" },
  ],
  lyrics: [
    { parts: [{ before: "I wanna be a", match: "billionaire", after: "so f* bad" }] },
    { parts: [{ before: "Buy all of the things I never had", after: "" }] },
    { parts: [{ before: "I wanna be on the cover of Forbes", match: "magazine", after: "" }] },
    { parts: [{ before: "Smiling next to Oprah and the", match: "queen", after: "" }] },
    { parts: [{ before: "Oh, every", match: "time", after: "I close my eyes" }] },
    { parts: [{ before: "I see my name in", match: "shiny", after: "lights, yeah" }] },
    { parts: [{ before: "A different", match: "city", after: "every night, oh, I swear" }] },
    { parts: [{ before: "The", match: "world", after: "better prepare for when I'm a billionaire" }] },
  ],
};

export const billionaireThirdStanza = {
  words: ["Oprah", "Angelina", "Brad Pitt", "Mercedes", "Travie Claus", "Katrina", "FEMA", "Obama", "Tom Cruise", "Ferrari", "Santa Claus"].map((word) => ({ word })),
  lyrics: [
    { parts: [{ before: "Yeah, I would have a show like", answer: "Oprah", after: ", I would be the host of" }] },
    { parts: [{ before: "Every Day Christmas, give Travie your wish list", after: "" }] },
    { parts: [{ before: "I'd probably pull an", answer: "Angelina", after: "and", }, { before: "", answer: "Brad Pitt", after: "" }] },
    { parts: [{ before: "And adopt a bunch of babies that ain't never had s***", after: "" }] },
    { parts: [{ before: "Give away a few", answer: "Mercedes", after: ", like, ‘Here, lady, have this’" }] },
    { parts: [{ before: "And last but not least, grant somebody their last wish", after: "" }] },
    { parts: [{ before: "It's been a couple months that I've been single, so", after: "" }] },
    { parts: [{ before: "You can call me", answer: "Travie Claus", after: ", minus the ‘Ho, ho’" }] },
    { parts: [{ before: "Get it? I'd probably visit where", answer: "Katrina", after: "hit" }] },
    { parts: [{ before: "And damn sure do a lot more than", answer: "FEMA", after: "did" }] },
    { parts: [{ before: "Yeah, can't forget about me, stupid", after: "" }] },
    { parts: [{ before: "Everywhere I go, I'ma have my own theme music", after: "" }] },
  ],
};

export const billionaireSixthStanza = {
  lyrics: [
    { items: [{ before: "I'll be playing basketball with the president, dunkin' on his", answer: "delegates", options: ["delegates", "candidates"], after: "" }] },
    { items: [{ before: "Then I'll compliment him on his political etiquette", answer: "", after: "", options: [] }] },
    { items: [{ before: "Toss a couple milli' in the air just for the heck of it", answer: "", after: "", options: [] }] },
    { items: [{ before: "But keep the fives, twenties, tens, and Bens completely", answer: "separate", options: ["separate", "together"], after: "" }] },
    { items: [{ before: "And yeah, I'll be in a whole new tax bracket", answer: "", after: "", options: [] }] },
    { items: [{ before: "We in recession, but let me take a crack at it", answer: "", after: "", options: [] }] },
    { items: [{ before: "I'll probably take whatever's left and just", answer: "split it up", options: ["split it up", "keep it to myself"], after: "" }] },
    { items: [{ before: "So everybody that I love can have a couple", answer: "bucks", options: ["bucks", "dollars"], after: "" }] },
    { items: [{ before: "And not a single tummy around me", answer: "", after: "", options: [] }] },
    { items: [{ before: "Would know what hungry was, eatin' good, sleepin' soundly", answer: "", after: "", options: [] }] },
    { items: [{ before: "I know we all have a similar", answer: "dream", options: ["dream", "nightmare"], after: "" }] },
    { items: [{ before: "Go in your pocket, pull out your wallet, put it in the air and", answer: "sing", options: ["sing", "talk"], after: "" }] },
  ],
};
