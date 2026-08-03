interface WarmUpQuestionsProps {
    step: string;
    title: string;
    description?: string;
    questions: string[];
}

export default function WarmUpQuestions({ step, title, description, questions, }: WarmUpQuestionsProps) {
    return (
      <section className="card">
        <div className="section-heading">
          <p className="section-kicker">{step}</p>
          <h2>{title}</h2>
          {description && (
          <p className="section-note">
            {description}
          </p>
          )}
        </div>



        <div className="questions">
          {questions.map((question, index) => (
            <article key={index} className="question-box">
              <span className="question-number">
                {index + 1}
              </span>
  
              <p>{question}</p>
            </article>
          ))}
        </div>
      </section>
    );
}