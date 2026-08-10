export const monsters = {
    spotify : {
        embedUrl: "https://open.spotify.com/embed/track/2a6hvSpFXeA36da1L5RzKZ?utm_source=generator",
        title: "Monster on Spotify"
    },

    vocabulary: [
        {
            word: "monster",
            meaning: "a scary creature, or something that feels very frightening"
        },
        {
            word: "hide",
            meaning: "to keep something where people cannot see it"
        },
        {
            word: "fear",
            meaning: "the feeling you have when you are afraid"
        },
        {
            word: "shadow",
            meaning: "a dark shape made when light is blocked"
        },
        {
            word: "scars",
            meaning: "marks left after an injury"
        },
        {
            word: "tunnel vision",
            meaning: "when you only think about one thing"
        },
    ]
}

export const monstersPronouns = {
    pronouns: [
      "I",
      "you",
      "he",
      "she",
      "it",
      "we",
      "they",
    ],
  
    lyrics: [
      {
        parts: [
          {
            before: "Why do all the monsters come out at night?",
            after: "",
          },
        ],
      },
  
      {
        parts: [
          {
            before: "Why do ",
            answer: "we",
            maxLength: 3,
            syncKey: "monsters-repeat-1",
            after: " sleep where ",
          },
          {
            before: "",
            answer: "we",
            maxLength: 3,
            syncKey: "monsters-repeat-2",
            after: " want to hide?",
          },
        ],
      },
  
      {
        parts: [
          {
            before: "Why do ",
            answer: "I",
            syncKey: "monsters-repeat-3",
            after: " run back to ",
          },
          {
            before: "",
            answer: "you",
            syncKey: "monsters-repeat-4",
            after: "",
          },
        ],
      },
  
      {
        parts: [
          {
            before: "Like ",
            answer: "I",
            syncKey: "monsters-repeat-5",
            after: " don't mind if ",
          },
          {
            before: "",
            answer: "you",
            syncKey: "monsters-repeat-6",
            after: " ruin my life?",
          },
        ],
      },
    ],
};

export const monstersSecondStanza = {
    icons: [
      {
        id: "day",
        word: "day",
        symbol: "🌞",
        ariaLabel: "day",
      },
      {
        id: "hotel",
        word: "hotel",
        symbol: "🏨",
        ariaLabel: "hotel",
      },
      {
        id: "rhythm",
        word: "rhythm",
        symbol: "🎶",
        ariaLabel: "rhythm",
      },
      {
        id: "one",
        word: "one",
        symbol: "1️⃣",
        ariaLabel: "one",
      },
      {
        id: "swimming",
        word: "swimming",
        symbol: "🏊",
        ariaLabel: "swimming",
      },
    ],
  
    lyrics: [
        {
            parts: [
                {
                    before: "Another ",
                    match: "day",
                    after: ", another headache in this hangover ",
                },
                {
                  before: "",
                  match: "hotel",
                  after: "",
                },
            ]
        },
        {
            parts: [
                {
                  before: "Getting used to the ",
                  match: "rhythm",
                  after: ", yeah, I know this beat too well",
                },
            ]
        },
        {
            parts: [
                {
                  before: "Tunnel vision's got me feeling like you're the only ",
                  match: "one",
                  after: " I see",
                },
            ]
        },
        {
            parts: [
                {
                  before: "But I know what's missing when I'm ",
                  match: "swimming",
                  after: "",
                },
            ]
        },
        {
            parts: [
                {
                  before: "In my lonely luxury",
                  match: "",
                  after: "",
                },
            ]
        },
    ],
};

export const monstersThirdStanza = {
    pronouns: ["I", "you", "we"],
  
    lyrics: [
      {
        parts: [
          {
            before: "I'm wondering why do all the monsters come out at night?",
            after: "",
          },
        ],
      },
      {
        parts: [
          {
            before: "Why do ",
            answer: "we",
            after: " sleep where ",
            maxLength: 3,
            syncKey: "monsters-repeat-1",
          },
          {
            before: "",
            answer: "we",
            after: " want to hide?",
            maxLength: 3,
            syncKey: "monsters-repeat-2",
          },
        ],
      },
      {
        parts: [
          {
            before: "Why do ",
            answer: "I",
            after: " run back to ",
            maxLength: 3,
            syncKey: "monsters-repeat-3",
          },
          {
            before: "",
            answer: "you",
            after: "",
            maxLength: 4,
            syncKey: "monsters-repeat-4",
          },
        ],
      },
      {
        parts: [
          {
            before: "Like ",
            answer: "I",
            after: " don't mind if ",
            maxLength: 3,
            syncKey: "monsters-repeat-5",
          },
          {
            before: "",
            answer: "you",
            after: " ruin my life?",
            maxLength: 4,
            syncKey: "monsters-repeat-6",
          },
        ],
        dividerAfter: true,
      },
      {
        parts: [
          {
            before: "Why am ",
            answer: "I",
            after: " a sucker for all your lies?",
            maxLength: 3,
          },
        ],
      },
      {
        parts: [
          {
            before: "Strung out like laundry on every line",
            after: "",
          },
        ],
      },
      {
        parts: [
          {
            before: "Why do ",
            answer: "I",
            after: " come back to ",
            maxLength: 3,
          },
          {
            before: "",
            answer: "you",
            after: "",
            maxLength: 4,
          },
        ],
      },
      {
        parts: [
          {
            before: "Like ",
            answer: "I",
            after: " don't mind if ",
            maxLength: 3,
          },
          {
            before: "",
            answer: "you",
            after: " ruin my life?",
            maxLength: 4,
          },
        ],
      },
    ],
};

export const monstersFourthStanza = {
    words: [
      { word: "overthinking" },
      { word: "sinking" },
      { word: "drinking" },
      { word: "wondering" },
    ],
  
    lyrics: [
        {
          parts: [
            {
              before: "I'm addicted to the way you hurt, the way you contradict me",
              after: "",
            },
          ],
        },
        {
          parts: [
            {
              before: "I swear everything look worse at night, I think I'm ",
              answer: "overthinking",
              after: "",
            },
          ],
        },
        {
          parts: [
            {
              before: "I don't care who I might hurt along the way, I'm f' ",
              answer: "sinking",
              after: "",
            },
          ],
        },
        {
          parts: [
            {
              before: "Into every word, I don't care if you're lyin' when I'm ",
              answer: "drinking",
              after: "",
            },
          ],
        },
        {
          parts: [
            {
              before: "So, tell me pretty lies, look me in my face",
              after: "",
            },
          ],
        },
        {
          parts: [
            {
              before: "Tell me that you love me, even if it's fake",
              after: "",
            },
          ],
        },
        {
          parts: [
            {
              before: "You can lead me on and leave these questions in my sheets",
              after: "",
            },
          ],
        },
        {
          parts: [
            {
              before: "I'm under it, I made my bed and I'm still ",
              answer: "wondering",
              after: "",
            },
          ],
        },
    ],
};

export const monstersFifthStanza = {
    lyrics: [
      {
        items: [
          {
            before: "Thinkin' about you, you're in my ",
            answer: "head",
            after: "",
            options: ["head", "dead"],
          },
        ],
      },
      {
        items: [
          {
            before: "Even without you, I still feel ",
            answer: "dead",
            after: "",
            options: ["dead", "head"],
          },
        ],
      },
      {
        items: [
          {
            before: "Why do I ",
            answer: "run",
            after: " back to you",
            options: ["run", "ruin"],
          },
        ],
      },
      {
        items: [
          {
            before: "Like I don't mind if you ",
            answer: "ruin",
            after: " my life?",
            options: ["ruin", "run"],
          },
        ],
      },
    ],
};
