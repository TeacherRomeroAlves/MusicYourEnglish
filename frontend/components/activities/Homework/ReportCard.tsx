interface ReportCardProps {
    songTitle: string;
    prompt: string;
    studentName: string;
    teacherName: string;
    writing: string;
    date: string;
    score: string;
}
  
export default function ReportCard({
  songTitle, prompt, studentName, teacherName, writing, date, score,
}: ReportCardProps) {
    return (
        <article className="report-card report-export">
        <header className="report-card__header">
          <div>
            <p className="report-kicker">Music Your English</p>
            <h3>Student Report</h3>
            <p>{songTitle}</p>
          </div>
          <div className="report-score">
            <span>Song score</span>
            <strong>{score}</strong>
          </div>
        </header>

        <div className="report-card__body">
          <div className="report-details">
            <p className="report-meta"><span>Student</span><strong>{studentName || "Not added yet"}</strong></p>
            <p className="report-meta"><span>Teacher</span><strong>{teacherName || "Not added yet"}</strong></p>
            <p className="report-meta"><span>Date</span><strong>{date}</strong></p>
            <p className="report-meta"><span>Lesson</span><strong>{songTitle}</strong></p>
          </div>

          <section className="report-content-block">
            <p className="report-content-label">Homework Prompt</p>
            <p className="report-text">{prompt}</p>
          </section>

          <section className="report-content-block report-content-block--answer">
            <p className="report-content-label">Student Answer</p>
            <p className="report-text">{writing || "No answer yet."}</p>
          </section>

          <footer className="report-card__footer">
            <span>Learn it. Hear it. Use it.</span>
            <span>Music Your English</span>
          </footer>
        </div>
        </article>
    );
}
