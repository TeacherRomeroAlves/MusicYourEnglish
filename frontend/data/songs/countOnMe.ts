export const countOnMe = {
    
    spotify: {
        embedUrl:
            "https://open.spotify.com/embed/track/2FGSEdBi3a8Q3hzpuZ8VKT?utm_source=generator",
        title: "Count on Me on Spotify",
    },

    vocabulary: [
        {
            word: "count on",
            meaning: "to trust someone to help you",
        },
        {
            word: "friendship",
            meaning: "when people are friends",
        },
        {
            word: "sail",
            meaning: "to travel in a boat",
        },
        {
            word: "guide",
            meaning: "to show someone where to go",
        },
        {
            word: "find out",
            meaning: "to learn something new",
        },
        {
            word: "beside",
            meaning: "next to",
        },
    ]
}

export const countOnMeFirstStanza = {
    icons: [
        {
            id: "sea",
            symbol: "🌊",
            ariaLabel: "sea",
        },
        {
            id: "world",
            symbol: "🌍",
            ariaLabel: "world",
        },
        {
            id: "dark",
            symbol: "🌙",
            ariaLabel: "dark",
            dark: true,
        },
        {
            id: "light",
            symbol: "💡",
            ariaLabel: "light",
        },
    ],

    lyrics: [
        {
          parts: [
            {
                before: "If you ever find yourself stuck in the middle of the",
                match: "sea",
                after: "",
            },
          ]
        },
        {
          parts: [
            {
                before: "I'll sail the",
                match: "world",
                after: "to find you",
            },
          ]
        },
        {
          parts: [
            {
                before: "If you ever find yourself lost in the",
                match: "dark",
                after: "and you can't see",
            },
          ]
        },
        {
          parts: [
            {
                before: "I'll be the",
                match: "light",
                after: "to guide you",
            },
          ]
        },
    ],
};

export const countOnMeChorus = {
    words: [
      { word: "hour" },
      { word: "friends" },
      { word: "1,2,3,4" },
      { word: "our" },
      { word: "no" },
      { word: "4,3,2" },
      { word: "where" },
      { word: "we're" },
      { word: "know" },
      { word: "1,2,3" },
    ],
  
    lyrics: [
      {
        parts: [
          {
            before: "We find out what ",
            answer: "we're",
            after: " made of",
          },
        ],
      },
      {
        parts: [
          {
            before: "When we are called to help ",
            answer: "our",
            after: " friends in need",
          },
        ],
      },
      {
        parts: [
          {
            before: "You can count on me like ",
            answer: "1,2,3",
            after: ", I'll be there",
          },
        ],
      },
      {
        parts: [
          {
            before: "And I ",
            answer: "know",
            after: " when I need it",
          },
        ],
      },
      {
        parts: [
          {
            before: "I can count on you like ",
            answer: "4,3,2",
            after: " and you'll be there",
          },
        ],
      },
      {
        parts: [
          {
            before: "'Cause that's what ",
            answer: "friends",
            after: " are supposed to do, oh, yeah",
          },
        ],
      },
    ],
};

export const countOnMeChoiceLyrics = {
    lyrics: [
      {
        items: [
          {
            before: "If you're tossing and you're turning and you just",
            answer: "can't",
            after: "fall asleep",
            options: ["cannot", "can't"],
          },
        ],
      },
      {
        items: [
          {
            before: "I'll",
            answer: "sing",
            after: "a song beside you",
            options: ["sang", "sing"],
          },
        ],
      },
      {
        items: [
          {
            before: "And if you ever",
            answer: "forget",
            after: "how much you really mean to me",
            options: ["get", "forget"],
          },
        ],
      },
      {
        items: [
          {
            before: "Every day, I will",
            answer: "remind",
            after: "you, oh",
            options: ["remember", "remind"],
          },
        ]
      }
    ],
};
