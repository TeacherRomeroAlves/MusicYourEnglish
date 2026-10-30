import type { SongMeta } from "./songCatalog";

export const GRAMMAR_TOPICS = [
  "Simple present", "Simple past", "Present continuous", "Present perfect",
  "Present perfect continuous", "Future forms", "Verb be", "There is / There are",
  "Can", "Could", "Would", "Conditionals", "Gerunds and infinitives",
  "Prepositions", "Pronouns", "Possessive adjectives", "Relative clauses",
  "Superlatives", "Comparisons", "Negatives with no",
] as const;

export const LANGUAGE_FOCUSES = [
  "Idioms", "Phrasal verbs", "Adjectives", "Adverbs", "Everyday expressions",
  "Informal English", "Pronunciation", "Word formation", "Proper nouns",
  "Days of the week", "Colors", "Numbers", "Only", "Storytelling",
] as const;

export const ACTIVITY_TYPES = [
  "Emoji gaps", "Word-bank gaps", "Phrase-bank gaps", "Multiple choice",
  "Word completion", "Unscramble letters", "Word ordering", "Sentence ordering",
  "Chart-supported gaps", "Typed gaps", "Word identification",
] as const;

export interface LessonLearningTags {
  grammar: readonly (typeof GRAMMAR_TOPICS)[number][];
  languageFocus: readonly (typeof LANGUAGE_FOCUSES)[number][];
  activityTypes: readonly (typeof ACTIVITY_TYPES)[number][];
}

// Describe the language actually practised, rather than every form in the lyrics.
// Keeping this exhaustive makes a tag review part of adding each new lesson.
export const SONG_LEARNING_TAGS = {
  "flower-in-a-hurricane": {
    grammar: ["Simple present", "Comparisons"], languageFocus: ["Only", "Idioms"],
    activityTypes: ["Emoji gaps", "Multiple choice", "Phrase-bank gaps"],
  },
  "all-i-want-for-christmas-is-you": {
    grammar: ["Simple present", "Present continuous"], languageFocus: ["Everyday expressions"],
    activityTypes: ["Unscramble letters", "Emoji gaps", "Word-bank gaps"],
  },
  "no-stress-just-vibes": {
    grammar: ["Negatives with no"], languageFocus: ["Adjectives", "Everyday expressions"],
    activityTypes: ["Unscramble letters", "Emoji gaps", "Word-bank gaps", "Phrase-bank gaps"],
  },
  rip: {
    grammar: ["Conditionals", "Would"], languageFocus: ["Idioms"],
    activityTypes: ["Word ordering", "Word-bank gaps", "Word completion", "Sentence ordering"],
  },
  "count-on-me": {
    grammar: ["Can", "Pronouns", "Possessive adjectives"], languageFocus: ["Phrasal verbs", "Numbers"],
    activityTypes: ["Emoji gaps", "Word-bank gaps", "Multiple choice"],
  },
  golden: {
    grammar: ["Present continuous", "Prepositions", "Pronouns"], languageFocus: ["Everyday expressions"],
    activityTypes: ["Emoji gaps", "Multiple choice", "Sentence ordering", "Typed gaps"],
  },
  monsters: {
    grammar: ["Pronouns", "Present continuous"], languageFocus: ["Idioms"],
    activityTypes: ["Chart-supported gaps", "Emoji gaps", "Word-bank gaps", "Multiple choice"],
  },
  "the-fate-of-ophelia": {
    grammar: ["Simple past", "Prepositions", "Pronouns", "Possessive adjectives"], languageFocus: ["Idioms"],
    activityTypes: ["Multiple choice", "Emoji gaps", "Sentence ordering", "Unscramble letters"],
  },
  wonderwall: {
    grammar: ["Simple present"], languageFocus: ["Adjectives", "Informal English"],
    activityTypes: ["Word-bank gaps", "Emoji gaps", "Sentence ordering"],
  },
  manchild: {
    grammar: ["Simple present", "Simple past", "Verb be"], languageFocus: ["Informal English"],
    activityTypes: ["Multiple choice", "Unscramble letters", "Emoji gaps", "Word identification"],
  },
  "bad-life": {
    grammar: [], languageFocus: ["Idioms", "Adjectives", "Adverbs"],
    activityTypes: ["Word-bank gaps", "Word ordering", "Unscramble letters"],
  },
  "hills-of-st-ann": {
    grammar: ["Simple present"], languageFocus: ["Pronunciation", "Informal English"],
    activityTypes: ["Emoji gaps", "Multiple choice", "Word identification", "Word-bank gaps"],
  },
  happy: {
    grammar: ["Relative clauses"], languageFocus: ["Idioms"],
    activityTypes: ["Word-bank gaps", "Sentence ordering", "Phrase-bank gaps", "Word identification"],
  },
  "friday-im-in-love": {
    grammar: [], languageFocus: ["Days of the week", "Adjectives", "Colors", "Idioms"],
    activityTypes: ["Word-bank gaps", "Multiple choice", "Emoji gaps", "Word identification"],
  },
  ordinary: {
    grammar: ["Present continuous", "Simple past", "Verb be", "Pronouns", "Prepositions"], languageFocus: ["Word formation", "Idioms"],
    activityTypes: ["Emoji gaps", "Chart-supported gaps", "Multiple choice"],
  },
  "nice-to-meet-you": {
    grammar: ["Could"], languageFocus: ["Informal English", "Everyday expressions"],
    activityTypes: ["Emoji gaps", "Chart-supported gaps"],
  },
  "waiting-for-love": {
    grammar: ["Verb be", "Simple present"], languageFocus: ["Days of the week", "Idioms"],
    activityTypes: ["Chart-supported gaps", "Word-bank gaps", "Emoji gaps"],
  },
  cold: {
    grammar: [], languageFocus: ["Pronunciation", "Informal English", "Idioms"],
    activityTypes: ["Chart-supported gaps", "Word-bank gaps", "Phrase-bank gaps"],
  },
  "im-pretty": {
    grammar: [], languageFocus: ["Phrasal verbs", "Idioms", "Adjectives"],
    activityTypes: ["Emoji gaps", "Word-bank gaps"],
  },
  "hero-of-war": {
    grammar: ["Simple past", "Pronouns", "Possessive adjectives"], languageFocus: ["Storytelling"],
    activityTypes: ["Emoji gaps", "Unscramble letters", "Chart-supported gaps", "Multiple choice", "Word ordering"],
  },
  "the-man": {
    grammar: ["Gerunds and infinitives", "Would"], languageFocus: ["Idioms", "Informal English"],
    activityTypes: ["Word completion", "Word ordering", "Sentence ordering", "Multiple choice"],
  },
  swim: {
    grammar: [], languageFocus: ["Adjectives", "Idioms", "Informal English"],
    activityTypes: ["Word ordering", "Emoji gaps", "Word-bank gaps", "Word identification"],
  },
  "nine-to-five": {
    grammar: ["Prepositions"], languageFocus: ["Idioms", "Informal English"],
    activityTypes: ["Multiple choice", "Word completion", "Emoji gaps"],
  },
  gossip: {
    grammar: [], languageFocus: ["Idioms", "Adjectives"],
    activityTypes: ["Emoji gaps", "Unscramble letters"],
  },
  billionaire: {
    grammar: ["Would", "Conditionals"], languageFocus: ["Proper nouns", "Pronunciation", "Informal English"],
    activityTypes: ["Emoji gaps", "Word-bank gaps", "Multiple choice"],
  },
  rude: {
    grammar: ["Prepositions"], languageFocus: ["Informal English", "Everyday expressions"],
    activityTypes: ["Emoji gaps", "Word ordering", "Word identification"],
  },
  "stupid-song": {
    grammar: ["Present perfect", "Present continuous", "Simple present"], languageFocus: ["Idioms"],
    activityTypes: ["Phrase-bank gaps", "Word ordering", "Multiple choice", "Emoji gaps", "Word-bank gaps"],
  },
  "girl-from-ipanema": {
    grammar: ["Pronouns", "Possessive adjectives", "Simple present"], languageFocus: ["Adjectives"],
    activityTypes: ["Word-bank gaps", "Chart-supported gaps"],
  },
  "dont-you-worry-child": {
    grammar: ["Simple past", "Simple present"], languageFocus: ["Idioms"],
    activityTypes: ["Emoji gaps", "Unscramble letters", "Multiple choice"],
  },
  "stand-by-me": {
    grammar: ["Verb be", "Future forms", "Present perfect"], languageFocus: ["Phrasal verbs", "Everyday expressions"],
    activityTypes: ["Multiple choice", "Emoji gaps"],
  },
  flowers: {
    grammar: ["Can", "Simple past"], languageFocus: ["Phrasal verbs", "Everyday expressions"],
    activityTypes: ["Multiple choice", "Phrase-bank gaps", "Emoji gaps"],
  },
  "self-dysmorphia": {
    grammar: ["Superlatives"], languageFocus: ["Adjectives"],
    activityTypes: ["Word completion", "Word-bank gaps", "Word identification"],
  },
  "young-and-dumb": {
    grammar: ["Simple past", "Present continuous", "Present perfect continuous"], languageFocus: ["Pronunciation", "Informal English"],
    activityTypes: ["Word-bank gaps", "Chart-supported gaps", "Unscramble letters"],
  },
  "breaking-the-habit": {
    grammar: ["Simple present", "Present continuous"], languageFocus: ["Idioms", "Phrasal verbs"],
    activityTypes: ["Word-bank gaps", "Multiple choice", "Unscramble letters", "Sentence ordering"],
  },
  "patient-zero": {
    grammar: ["Verb be", "Present perfect"], languageFocus: ["Idioms"],
    activityTypes: ["Unscramble letters", "Multiple choice", "Emoji gaps", "Phrase-bank gaps", "Word-bank gaps"],
  },
  "comfortably-numb": {
    grammar: ["There is / There are", "Verb be"], languageFocus: ["Idioms"],
    activityTypes: ["Word-bank gaps", "Phrase-bank gaps", "Unscramble letters"],
  },
} satisfies Record<SongMeta["slug"], LessonLearningTags>;
