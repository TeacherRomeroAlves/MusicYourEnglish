"use client";

import { useEffect, useRef, useState } from "react";

type RecorderStatus = "idle" | "requesting" | "recording" | "recorded" | "error";

const AUDIO_FORMATS = [
  "audio/mp4",
  "audio/webm;codecs=opus",
  "audio/webm",
] as const;

function getSupportedMimeType() {
  if (typeof MediaRecorder === "undefined") return "";
  return AUDIO_FORMATS.find((type) => MediaRecorder.isTypeSupported(type)) ?? "";
}

function stopStream(stream: MediaStream | null) {
  stream?.getTracks().forEach((track) => track.stop());
}

export function useAudioRecorder() {
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const audioUrlRef = useRef("");
  const [status, setStatus] = useState<RecorderStatus>("idle");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status !== "recording") return;
    const timer = window.setInterval(() => setSeconds((current) => current + 1), 1000);
    return () => window.clearInterval(timer);
  }, [status]);

  useEffect(() => () => {
    const recorder = recorderRef.current;
    if (recorder) {
      recorder.ondataavailable = null;
      recorder.onstop = null;
      recorder.onerror = null;
      if (recorder.state === "recording") recorder.stop();
    }
    stopStream(streamRef.current);
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
  }, []);

  const clearAudio = () => {
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    audioUrlRef.current = "";
    setAudioUrl("");
    setAudioBlob(null);
  };

  const startRecording = async () => {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setStatus("error");
      setMessage("Audio recording is not supported in this browser.");
      return;
    }

    try {
      setStatus("requesting");
      setMessage("");
      clearAudio();
      setSeconds(0);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = getSupportedMimeType();
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);

      streamRef.current = stream;
      recorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        const type = recorder.mimeType || mimeType || "audio/webm";
        const blob = new Blob(chunksRef.current, { type });
        const url = URL.createObjectURL(blob);
        audioUrlRef.current = url;
        setAudioBlob(blob);
        setAudioUrl(url);
        setStatus("recorded");
        setMessage("Recording ready. Listen before downloading or sharing it.");
        stopStream(streamRef.current);
        streamRef.current = null;
      };
      recorder.onerror = () => {
        setStatus("error");
        setMessage("The recording could not be completed. Please try again.");
        stopStream(streamRef.current);
        streamRef.current = null;
      };

      recorder.start();
      setStatus("recording");
    } catch (error) {
      stopStream(streamRef.current);
      streamRef.current = null;
      setStatus("error");
      setMessage(error instanceof DOMException && error.name === "NotAllowedError"
        ? "Microphone access was blocked. Allow microphone access and try again."
        : "The microphone could not be started. Please try again.");
    }
  };

  const stopRecording = () => {
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
  };

  return {
    status,
    audioBlob,
    audioUrl,
    seconds,
    message,
    startRecording,
    stopRecording,
  };
}
