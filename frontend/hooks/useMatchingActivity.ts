"use client";

import { useEffect, useState } from "react";
import { useSpeech } from "@/hooks/useSpeech";
import {
  createMatchingState,
  getMatchingResults,
  placeWordInFirstEmptySlot,
  removeWordFromAnswers,
  removeWordFromBank,
} from "@/components/activities/MatchingActivity/utils";
import type {
  MatchingFeedback,
  MatchingWord,
} from "@/components/activities/MatchingActivity/types";

const defaultFeedback: MatchingFeedback = {
  message: "",
  tone: "default",
};

export function useMatchingActivity(words: MatchingWord[]) {
  const [state, setState] = useState(() => createMatchingState(words, false));
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [activeDropZone, setActiveDropZone] = useState<string | null>(null);
  const [isBankDragOver, setIsBankDragOver] = useState(false);
  const [feedback, setFeedback] = useState<MatchingFeedback>(defaultFeedback);
  const { speak } = useSpeech();

  useEffect(() => {
    const timeout = window.setTimeout(() => setState(createMatchingState(words)), 0);
    return () => window.clearTimeout(timeout);
  }, [words]);

  const handleDragStart = (word: string) => {
    setDraggedWord(word);
    setSelectedWord(null);
  };

  const handleDragEnd = () => {
    setDraggedWord(null);
    setActiveDropZone(null);
    setIsBankDragOver(false);
  };

  const handleZoneDragOver = (expectedWord: string) => {
    setActiveDropZone(expectedWord);
    setIsBankDragOver(false);
  };

  const handleZoneDragLeave = (expectedWord: string) => {
    if (activeDropZone === expectedWord) {
      setActiveDropZone(null);
    }
  };

  const handleBankDragOver = () => {
    setActiveDropZone(null);
    setIsBankDragOver(true);
  };

  const handleBankDragLeave = () => {
    setIsBankDragOver(false);
  };

  const handleDropOnZone = (expectedWord: string) => {
    if (!draggedWord) return;

    placeWordInZone(expectedWord, draggedWord);
    handleDragEnd();
  };

  const placeWordInZone = (expectedWord: string, word: string) => {

    setState((previousState) => {
      let nextBankSlots = removeWordFromBank(previousState.bankSlots, word);
      let nextAnswers = removeWordFromAnswers(previousState.answers, word);
      const replacedWord = nextAnswers[expectedWord];

      if (replacedWord && replacedWord !== word) {
        nextBankSlots = placeWordInFirstEmptySlot(nextBankSlots, replacedWord);
      }

      nextAnswers = {
        ...nextAnswers,
        [expectedWord]: word,
      };

      return {
        bankSlots: nextBankSlots,
        answers: nextAnswers,
      };
    });

    setFeedback(defaultFeedback);
  };

  const handleSelectWord = (word: string) => {
    setSelectedWord((current) => (current === word ? null : word));
    setFeedback(defaultFeedback);
  };

  const handleSelectZone = (expectedWord: string) => {
    if (!selectedWord) return;
    placeWordInZone(expectedWord, selectedWord);
    setSelectedWord(null);
  };

  const handleDropOnBank = () => {
    if (!draggedWord) return;

    setState((previousState) => {
      const nextAnswers = removeWordFromAnswers(previousState.answers, draggedWord);
      const clearedBank = removeWordFromBank(previousState.bankSlots, draggedWord);

      return {
        bankSlots: placeWordInFirstEmptySlot(clearedBank, draggedWord),
        answers: nextAnswers,
      };
    });

    setFeedback(defaultFeedback);
    handleDragEnd();
  };

  const handleReturnToBank = (word: string) => {
    setState((previousState) => ({
      bankSlots: placeWordInFirstEmptySlot(
        removeWordFromBank(previousState.bankSlots, word),
        word,
      ),
      answers: removeWordFromAnswers(previousState.answers, word),
    }));
    setDraggedWord(null);
    setSelectedWord(null);
    setActiveDropZone(null);
    setFeedback(defaultFeedback);
  };

  const handleCheck = () => {
    const results = getMatchingResults(words, state.answers);

    if (results.placed < results.total) {
      setFeedback({
        message: `You matched ${results.correct} of ${results.total} correctly so far. Finish the remaining boxes and try again.`,
        tone: "warning",
      });
      return;
    }

    if (results.correct === results.total) {
      setFeedback({
        message: "Excellent. All answers are correct.",
        tone: "success",
      });
      return;
    }

    setFeedback({
      message: `Nice try. You got ${results.correct} of ${results.total} correct. Move the words and check again.`,
      tone: "warning",
    });
  };

  const handleReset = () => {
    setState(createMatchingState(words, true));
    setDraggedWord(null);
    setSelectedWord(null);
    setActiveDropZone(null);
    setIsBankDragOver(false);
    setFeedback({
      message: "Activity reset.",
      tone: "default",
    });
  };

  const handleSpeak = (word: string) => {
    const result = speak(word);

    if (!result.ok && result.message) {
      setFeedback({
        message: result.message,
        tone: "warning",
      });
    }
  };

  return {
    bankSlots: state.bankSlots,
    answers: state.answers,
    draggedWord,
    selectedWord,
    feedback,
    activeDropZone,
    isBankDragOver,
    results: getMatchingResults(words, state.answers),
    handleDragStart,
    handleDragEnd,
    handleZoneDragOver,
    handleZoneDragLeave,
    handleBankDragOver,
    handleBankDragLeave,
    handleDropOnZone,
    handleSelectWord,
    handleSelectZone,
    handleDropOnBank,
    handleReturnToBank,
    handleCheck,
    handleReset,
    handleSpeak,
  };
}
