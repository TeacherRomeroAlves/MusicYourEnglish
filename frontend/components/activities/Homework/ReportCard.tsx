interface ReportCardProps {
    songTitle: string;
    prompt: string;
    studentName: string;
    studentClass: string;
    writing: string;
    date: string;
    score: string;
}
  
export default function ReportCard({
  songTitle, prompt, studentName, studentClass, writing, date, score,
}: ReportCardProps) {
    return (
        <article className="report-card">
        <p className="report-kicker">
            Student Report
        </p>

        <h3>{songTitle}</h3>

        <p className="report-meta">
            <strong>Name:</strong> {studentName || "Not added yet"}
        </p>

        <p className="report-meta">
            <strong>Class:</strong> {studentClass || "Not added yet"}
        </p>

        <p className="report-meta">
            <strong>Date:</strong> {date}
        </p>

        <p className="report-meta">
            <strong>Song Score:</strong> {score}
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
            {writing || "No answer yet."}
        </p>
        </article>
    );
}
