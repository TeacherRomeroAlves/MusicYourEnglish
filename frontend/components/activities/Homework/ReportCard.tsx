interface ReportCardProps {
    songTitle: string;
    prompt: string;
}
  
export default function ReportCard({ songTitle, prompt, }: ReportCardProps) {
    return (
        <article className="report-card">
        <p className="report-kicker">
            Student Report
        </p>

        <h3>{songTitle}</h3>

        <p className="report-meta">
            <strong>Name:</strong> Not added yet
        </p>

        <p className="report-meta">
            <strong>Class:</strong> Not added yet
        </p>

        <p className="report-meta">
            <strong>Date:</strong>
        </p>

        <p className="report-meta">
            <strong>Song Score:</strong> Not checked yet
        </p>

        <div className="report-divider" />

        <p className="report-meta">
            <strong>Homework Prompt:</strong>
        </p>

        <p className="report-text">
            {prompt}
        </p>

        <p className="report-meta">
            <strong>Student Answer:</strong>
        </p>

        <p className="report-text">
            No answer yet.
        </p>
        </article>
    );
}