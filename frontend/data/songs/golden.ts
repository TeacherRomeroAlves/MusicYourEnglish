import { match } from "assert"
import { after } from "next/server"
import { before } from "node:test"
import { text } from "stream/consumers"

export const golden = {

    spotify: {
        embedUrl:
            "https://open.spotify.com/embed/track/1CPZ5BxNNd0n0nF4Orb9JS?utm_source=generator",
        title: "Count on Me on Spotify",
    },

    vocabulary: [
        {
            word: "patterns",
            meaning: "things that happen again and again",
        },
        {
            word: "wild",
            meaning: "free and hard to control",
        },
        {
            word: "fears",
            meaning: "things that make you feel scared",
        },
        {
            word: "shining",
            meaning: "bright and full of light",
        },
        {
            word: "golden",
            meaning: "very special and beautiful",
        },
        {
            word: "alone",
            meaning: "without other people around you",
        },
    ]
}

export const goldenFirstStanza = {
    icons: [
        {
            id: "ghost",
            symbol: "👻",
            ariaLabel: "ghost",
        },
        {
            id: "queen",
            symbol: "👸",
            ariaLabel: "queen",
        },
        {
            id: "place",
            symbol: "📍",
            ariaLabel: "place",
        },
        {
            id: "child",
            symbol: "🧒",
            ariaLabel: "child",
        },
    ],

    lyrics: [
        {
            before: "I was a",
            match: "ghost",
            after: ", I was alone"
        },
        {
            before: "어두워진 앞길 속에 ha-ah-ah",
            match: "",
            after: ""
        },
        {
            before: "Given the throne, I didn't know how to believe",
            match: "",
            after: ""
        },
        {
            before: "I was the",
            match: "queen",
            after: "that I'm meant to be"
        },
        {
            before: "I lived two lives, tried to play both sides",
            match: "",
            after: ""
        },
        {
            before: "But I couldn't find my own",
            match: "place",
            after: ""
        },
        {
            before: "Called a problem",
            match: "child",
            after: "'cause I got too wild"
        },
        {
            before: "But now that's how I'm getting paid 끝없이 on stage",
            match: "",
            after: ""
        }
    ]
}

export const goldenChorus = {
    lyrics: [
      {
        items: [
          {
            before: "I'm done",
            answer: "hiding",
            after: ", now I'm",
            options: ["riding", "hiding"],
          },
          {
            before: "",
            answer: "shining",
            after: "like I'm born to be",
            options: ["flying", "shining"],
          },
        ],
      },
      {
        items: [
            {
            before: "We",
            answer: "dreaming",
            after: "hard, we came so far, now I believe",
            options: ["dreaming", "sleeping"],
            },
        ],
      },
    ],
};

export const goldenOrder = {
    items: [
      {
        id: "line-1",
        text: "We're going up, up, up, it's our moment",
      },
      {
        id: "line-2",
        text: "You know together we're glowin'",
      },
      {
        id: "line-3a",
        text: "Gonna be, gonna be golden",
      },
      {
        id: "line-4",
        text: "Oh-oh-oh, up, up, up with our voices",
      },
      {
        id: "line-5",
        text: "영원히 깨질 수 없는",
      },
      {
        id: "line-3b",
        text: "Gonna be, gonna be golden",
      },
      {
        id: "line-7",
        text: "Oh-oh-oh, I'm done hidin', now I'm shinin' like I'm born to be",
      },
      {
        id: "line-8",
        text: "Oh, our time, no fears, no lies",
      },
      {
        id: "line-9",
        text: "That's who we're born to be"
      }
    ],
};

export const goldenFinalStanza = {
    lyrics: [
      {
        before: "Waited",
        answer: "so",
        after: "long to break these walls down",
      },
      {
        before: "To wake",
        answer: "up",
        after: "and feel like me",
      },
      {
        before: "Put these patterns all",
        answer: "in",
        after: "the past now",
      },
      {
        before: "And finally live like the girl they all see",
        answer: "",
        after: "",
      },
      {
        before: "",
        answer: "No",
        after: "more hiding, I'll be shining like I'm born to be",
      },
      {
        before: "'Cause",
        answer: "we",
        after: "are hunters, voices strong, and I know I believe",
      },
    ],
};