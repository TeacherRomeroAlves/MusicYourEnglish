import { shuffleArray } from "@/lib/shuffleArray";
import type { MatchingResults, MatchingWord } from "./types";

export interface MatchingActivityState {
  bankSlots: Array<string | null>;
  answers: Record<string, string | null>;
}

export function createMatchingState( words: MatchingWord[], shuffle = true,): MatchingActivityState {
  return {
    bankSlots: shuffle
      ? shuffleArray(words.map((item) => item.word))
      : words.map((item) => item.word),
    answers: Object.fromEntries(words.map((item) => [item.word, null])),
  };
}

export function removeWordFromBank(
  bankSlots: Array<string | null>,
  word: string,
): Array<string | null> {
  return bankSlots.map((slotWord) => (slotWord === word ? null : slotWord));
}

export function removeWordFromAnswers(
  answers: Record<string, string | null>,
  word: string,
): Record<string, string | null> {
  return Object.fromEntries(
    Object.entries(answers).map(([key, value]) => [key, value === word ? null : value]),
  );
}

export function placeWordInFirstEmptySlot(
  bankSlots: Array<string | null>,
  word: string,
): Array<string | null> {
  const nextSlots = [...bankSlots];
  const emptySlotIndex = nextSlots.findIndex((slotWord) => slotWord === null);

  if (emptySlotIndex >= 0) {
    nextSlots[emptySlotIndex] = word;
    return nextSlots;
  }

  return [...nextSlots, word];
}

export function getMatchingResults(
  words: MatchingWord[],
  answers: Record<string, string | null>,
): MatchingResults {
  const placed = words.filter((item) => answers[item.word]).length;
  const correct = words.filter((item) => answers[item.word] === item.word).length;

  return {
    correct,
    placed,
    total: words.length,
  };
}
