"use client";

import { useAudioRecorder } from "@/hooks/useAudioRecorder";

interface VoiceHomeworkProps {
  songTitle: string;
  studentName: string;
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
}

function createFileName(songTitle: string, studentName: string) {
  const safeName = `${studentName || "student"}-${songTitle}-homework`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return safeName || "music-your-english-homework";
}

export default function VoiceHomework({ songTitle, studentName }: VoiceHomeworkProps) {
  const recorder = useAudioRecorder();
  const fileName = createFileName(songTitle, studentName);
  const extension = recorder.audioBlob?.type.includes("mp4") ? "m4a" : "webm";
  const isRecording = recorder.status === "recording";
  const isRequesting = recorder.status === "requesting";

  return (
    <div className="voice-homework">
      <div className={`voice-recorder ${isRecording ? "is-recording" : ""}`}>
        <div className="voice-recorder__status" aria-live="polite">
          <span className="voice-recorder__indicator" aria-hidden="true" />
          <div>
            <strong>{isRecording ? "Recording your answer" : recorder.audioUrl ? "Your recording is ready" : "Record your answer"}</strong>
            <p>{isRecording ? formatTime(recorder.seconds) : "Speak clearly and answer the same homework prompt."}</p>
          </div>
        </div>

        {recorder.audioUrl && (
          <audio className="voice-recorder__audio" controls src={recorder.audioUrl}>
            Your browser does not support audio playback.
          </audio>
        )}

        <div className="actions voice-recorder__actions">
          {!isRecording && (
            <button className="action-btn" type="button" onClick={recorder.startRecording} disabled={isRequesting}>
              {isRequesting ? "Opening Microphone..." : recorder.audioUrl ? "Record Again" : "Start Recording"}
            </button>
          )}
          {isRecording && (
            <button className="action-btn voice-recorder__stop" type="button" onClick={recorder.stopRecording}>
              Stop Recording
            </button>
          )}
          {recorder.audioUrl && !isRecording && (
            <a className="action-btn voice-recorder__download" href={recorder.audioUrl} download={`${fileName}.${extension}`}>
              Download Audio
            </a>
          )}
        </div>

        {recorder.message && <p className={`voice-recorder__message ${recorder.status === "error" ? "is-error" : ""}`} role="status">{recorder.message}</p>}
        <p className="voice-recorder__privacy">Download the recording to save it and send it to your teacher.</p>
      </div>
    </div>
  );
}
