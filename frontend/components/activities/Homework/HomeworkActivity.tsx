"use client";

import { useState } from "react";
import HomeworkForm from "./HomeworkForm";
import ReportCard from "./ReportCard";
import VoiceHomework from "./VoiceHomework";
import { useHomework } from "@/hooks/useHomework";
import { getSongMetaByTitle } from "@/data/songCatalog";

interface HomeworkActivityProps {
  step: string;
  title: string;
  description?: string;
  prompt: string;
  songTitle: string;
}

export default function HomeworkActivity({ step, title, description, prompt, songTitle, }: HomeworkActivityProps) {
  const homework = useHomework(songTitle, prompt);
  const song = getSongMetaByTitle(songTitle);
  const [mode, setMode] = useState<"write" | "speak">("write");
  return (
    <section className="card report-section">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>

        <h2>{title}</h2>

        {description && (
          <p className="section-note">
            {description}
          </p>
        )}
      </div>

      <div className="prompt-box">
        <p className="prompt-label">
          Homework Prompt
        </p>

        <p className="prompt-text">
          {prompt}
        </p>
      </div>

      <div className="homework-mode" role="tablist" aria-label="Choose how to answer the homework">
        <button
          className={mode === "write" ? "is-active" : ""}
          type="button"
          role="tab"
          aria-selected={mode === "write"}
          onClick={() => setMode("write")}
        >
          Time to Write
        </button>
        <button
          className={mode === "speak" ? "is-active" : ""}
          type="button"
          role="tab"
          aria-selected={mode === "speak"}
          onClick={() => setMode("speak")}
        >
          Time to Speak
        </button>
      </div>

      <div className="report-grid">
        {mode === "write" ? (
          <HomeworkForm
            prompt={prompt}
            studentName={homework.studentName}
            teacherName={homework.teacherName}
            writing={homework.writing}
            wordCount={homework.wordCount}
            onFieldChange={homework.updateField}
            onSavePdf={homework.handleSavePdf}
            onShare={homework.handleShare}
          />
        ) : (
          <VoiceHomework songTitle={songTitle} studentName={homework.studentName} />
        )}

        <ReportCard
          songTitle={songTitle}
          prompt={prompt}
          studentName={homework.studentName}
          teacherName={homework.teacherName}
          writing={homework.writing}
          date={homework.date}
          score={homework.score}
          coverImage={song?.coverImage}
          artist={song?.artist}
        />
      </div>
    </section>
  );
}
