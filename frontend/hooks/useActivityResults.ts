"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  emptyActivityResults,
  clearMistakeReview,
  getActivityResults,
  getReviewSnapshot,
  removeActivityResult,
  startMistakeReview,
  setActivityResult,
  subscribeToActivityResults,
  subscribeToReviewSnapshot,
  type ActivityResult,
} from "@/lib/activityResultsStore";

export function useRegisterActivityResult(id: string, result: ActivityResult) {
  const { correct, answered, total, fields } = result;
  const fieldsSignature = JSON.stringify(fields);
  useEffect(() => {
    setActivityResult(id, { correct, answered, total, fields });
  }, [id, correct, answered, total, fieldsSignature]);
  useEffect(() => () => removeActivityResult(id), [id]);
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

export function useMistakeReview(activityId?: string) {
  const snapshot = useSyncExternalStore(
    subscribeToReviewSnapshot,
    getReviewSnapshot,
    getReviewSnapshot,
  );
  const fields = activityId ? snapshot.activities[activityId] ?? {} : {};

  const getStatus = (fieldId: string, currentValue: string) => {
    const reviewedField = fields[fieldId];
    if (!reviewedField || reviewedField.value !== currentValue) return undefined;
    return reviewedField.status;
  };

  return { snapshot, fields, getStatus, startReview: startMistakeReview };
}

export function useCheckAllAnswers() {
  const { totals } = useActivityResults();
  const [feedback, setFeedback] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const { startReview } = useMistakeReview();

  const handleCheck = () => {
    clearMistakeReview();
    setHasChecked(true);
    if (totals.answered < totals.total) {
      setFeedback(`You have ${totals.correct} correct answers so far. Finish all the activities and try again.`);
    } else {
      setFeedback(`Your song score is ${totals.correct} out of ${totals.total}.`);
    }
  };

  const needsReview = hasChecked && totals.correct < totals.total;
  return { totals, feedback, needsReview, handleCheck, handleReview: startReview };
}
