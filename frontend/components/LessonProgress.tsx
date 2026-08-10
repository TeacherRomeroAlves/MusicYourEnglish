const lessonStages = ["Warm-up", "Vocabulary", "Listen", "Practice", "Discussion", "Report"];

export default function LessonProgress() {
  return (
    <nav className="lesson-progress" aria-label="Lesson progress">
      <div className="lesson-progress__mobile">
        <span>Lesson journey</span><strong>6 stages</strong>
      </div>
      <ol>
        {lessonStages.map((stage, index) => (
          <li key={stage}>
            <span>{index + 1}</span>
            <strong>{stage}</strong>
          </li>
        ))}
      </ol>
    </nav>
  );
}
