"use client";

import HomeworkForm from "./HomeworkForm";
import ReportCard from "./ReportCard";
import { useHomework } from "@/hooks/useHomework";

interface HomeworkActivityProps {
  step: string;
  title: string;
  description?: string;
  prompt: string;
  songTitle: string;
}

export default function HomeworkActivity({ step, title, description, prompt, songTitle, }: HomeworkActivityProps) {
  const homework = useHomework(songTitle, prompt);
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
          Writing Prompt
        </p>

        <p className="prompt-text">
          {prompt}
        </p>
      </div>

      <div className="report-grid">
        <HomeworkForm
          prompt={prompt}
          studentName={homework.studentName}
          studentClass={homework.studentClass}
          writing={homework.writing}
          wordCount={homework.wordCount}
          onFieldChange={homework.updateField}
          onSavePdf={homework.handleSavePdf}
          onShare={homework.handleShare}
        />

        <ReportCard
          songTitle={songTitle}
          prompt={prompt}
          studentName={homework.studentName}
          studentClass={homework.studentClass}
          writing={homework.writing}
          date={homework.date}
          score={homework.score}
        />
      </div>
    </section>
  );
}
