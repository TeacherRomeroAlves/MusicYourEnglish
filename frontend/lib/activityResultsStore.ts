export interface ActivityResult {
  correct: number;
  answered: number;
  total: number;
  fields?: Record<string, ActivityFieldResult>;
}

export type ActivityFieldStatus = "correct" | "incorrect" | "unanswered";

export interface ActivityFieldResult {
  status: ActivityFieldStatus;
  value: string;
}

export interface ReviewSnapshot {
  version: number;
  activities: Record<string, Record<string, ActivityFieldResult>>;
}

export function buildActivityField(value: string, answer: string): ActivityFieldResult {
  const normalizedValue = value.trim().toLowerCase();
  return {
    status: !normalizedValue ? "unanswered" : normalizedValue === answer.trim().toLowerCase() ? "correct" : "incorrect",
    value,
  };
}

type Listener = () => void;
let results: Record<string, ActivityResult> = {};
let reviewSnapshot: ReviewSnapshot = { version: 0, activities: {} };
const listeners = new Set<Listener>();
const reviewListeners = new Set<Listener>();
export const emptyActivityResults: Record<string, ActivityResult> = {};

export const getActivityResults = () => results;
export const getReviewSnapshot = () => reviewSnapshot;
export function subscribeToActivityResults(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
export function setActivityResult(id: string, result: ActivityResult) {
  const current = results[id];
  if (current?.correct === result.correct && current.answered === result.answered && current.total === result.total && JSON.stringify(current.fields) === JSON.stringify(result.fields)) return;
  results = { ...results, [id]: result };
  listeners.forEach((listener) => listener());
}

export function subscribeToReviewSnapshot(listener: Listener) {
  reviewListeners.add(listener);
  return () => reviewListeners.delete(listener);
}

export function startMistakeReview() {
  const activities = Object.fromEntries(
    Object.entries(results).flatMap(([activityId, result]) => {
      const fields = Object.fromEntries(
        Object.entries(result.fields ?? {}).filter(([, field]) => field.status !== "correct"),
      );
      return Object.keys(fields).length ? [[activityId, fields]] : [];
    }),
  );
  reviewSnapshot = { version: reviewSnapshot.version + 1, activities };
  reviewListeners.forEach((listener) => listener());
}

export function clearMistakeReview() {
  if (!Object.keys(reviewSnapshot.activities).length) return;
  reviewSnapshot = { version: reviewSnapshot.version + 1, activities: {} };
  reviewListeners.forEach((listener) => listener());
}
export function removeActivityResult(id: string) {
  if (!(id in results)) return;
  const next = { ...results };
  delete next[id];
  results = next;
  listeners.forEach((listener) => listener());
  if (reviewSnapshot.activities[id]) {
    const reviewActivities = { ...reviewSnapshot.activities };
    delete reviewActivities[id];
    reviewSnapshot = { version: reviewSnapshot.version + 1, activities: reviewActivities };
    reviewListeners.forEach((listener) => listener());
  }
}
