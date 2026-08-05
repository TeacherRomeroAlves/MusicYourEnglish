export interface ActivityResult {
  correct: number;
  answered: number;
  total: number;
}

type Listener = () => void;
let results: Record<string, ActivityResult> = {};
const listeners = new Set<Listener>();
export const emptyActivityResults: Record<string, ActivityResult> = {};

export const getActivityResults = () => results;
export function subscribeToActivityResults(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
export function setActivityResult(id: string, result: ActivityResult) {
  const current = results[id];
  if (current?.correct === result.correct && current.answered === result.answered && current.total === result.total) return;
  results = { ...results, [id]: result };
  listeners.forEach((listener) => listener());
}
export function removeActivityResult(id: string) {
  if (!(id in results)) return;
  const next = { ...results };
  delete next[id];
  results = next;
  listeners.forEach((listener) => listener());
}
