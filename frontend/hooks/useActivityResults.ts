"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  emptyActivityResults,
  getActivityResults,
  removeActivityResult,
  setActivityResult,
  subscribeToActivityResults,
  type ActivityResult,
} from "@/lib/activityResultsStore";

export function useRegisterActivityResult(id: string, result: ActivityResult) {
  useEffect(() => {
    setActivityResult(id, result);
    return () => removeActivityResult(id);
  }, [id, result.correct, result.answered, result.total]);
}

export function useActivityResults() {
  const results = useSyncExternalStore(
    subscribeToActivityResults,
    getActivityResults,
    () => emptyActivityResults,
  );
  const totals = Object.values(results).reduce(
    (sum, result) => ({
      correct: sum.correct + result.correct,
      answered: sum.answered + result.answered,
      total: sum.total + result.total,
    }),
    { correct: 0, answered: 0, total: 0 },
  );
  return { results, totals };
}

export function useCheckAllAnswers() {
  const { totals } = useActivityResults();
  const [feedback, setFeedback] = useState("");

  const handleCheck = () => {
    if (totals.answered < totals.total) {
      setFeedback(`You have ${totals.correct} correct answers so far. Finish all the activities and try again.`);
    } else {
      setFeedback(`Your song score is ${totals.correct} out of ${totals.total}.`);
    }
  };

  return { totals, feedback, handleCheck };
}
