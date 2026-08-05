export interface SpeechResult {
  ok: boolean;
  message?: string;
}

export function playPronunciation(text: string): SpeechResult {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return {
      ok: false,
      message: "Your browser does not support pronunciation audio on this page.",
    };
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.92;

  window.speechSynthesis.speak(utterance);

  return { ok: true };
}
