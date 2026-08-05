type Listener = () => void;

let values: Record<string, string> = {};
const listeners = new Set<Listener>();

export const emptySynchronizedInputs: Record<string, string> = {};
export const getSynchronizedInputs = () => values;

export function subscribeToSynchronizedInputs(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setSynchronizedInput(key: string, value: string) {
  values = { ...values, [key]: value };
  listeners.forEach((listener) => listener());
}

export function clearSynchronizedInputs(keys: string[]) {
  const nextValues = { ...values };
  keys.forEach((key) => delete nextValues[key]);
  values = nextValues;
  listeners.forEach((listener) => listener());
}
