"use client";

import { playPronunciation } from "@/lib/speech";
import type { SpeechResult } from "@/lib/speech";

export function useSpeech() {
  const speak = (text: string): SpeechResult => {
    return playPronunciation(text);
  };

  return {
    speak,
  };
}
