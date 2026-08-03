import HomeworkForm from "./HomeworkForm";
import ReportCard from "./ReportCard";

interface HomeworkActivityProps {
  step: string;
  title: string;
  description?: string;
  prompt: string;
  songTitle: string;
}

export default function HomeworkActivity({ step, title, description, prompt, songTitle, }: HomeworkActivityProps) {
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
        <HomeworkForm prompt={prompt} />

        <ReportCard
          songTitle={songTitle}
          prompt={prompt}
        />
      </div>
    </section>
  );
}