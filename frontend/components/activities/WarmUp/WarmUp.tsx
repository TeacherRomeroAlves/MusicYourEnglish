"use client";

import { useState } from "react";

interface WarmUpQuestionsProps {
    step: string;
    title: string;
    description?: string;
    questions: string[];
    layout?: "auto" | "two-column";
}

export default function WarmUpQuestions({ step, title, description, questions, layout = "auto" }: WarmUpQuestionsProps) {
    const [completedQuestions, setCompletedQuestions] = useState<boolean[]>(
      () => questions.map(() => false),
    );

    const toggleQuestion = (index: number) => {
      setCompletedQuestions((current) => current.map((completed, itemIndex) => (
        itemIndex === index ? !completed : completed
      )));
    };

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



        <div className={`questions${layout === "two-column" ? " questions--two-column" : ""}`}>
          {questions.map((question, index) => (
            <article key={index} className={`question-box${completedQuestions[index] ? " is-discussed" : ""}`}>
              <button
                className="question-check"
                type="button"
                role="checkbox"
                aria-checked={completedQuestions[index]}
                aria-label={`${completedQuestions[index] ? "Mark as not discussed" : "Mark as discussed"}: ${question}`}
                onClick={() => toggleQuestion(index)}
              >
                <span aria-hidden="true">{completedQuestions[index] ? "✓" : ""}</span>
              </button>
  
              <p>{question}</p>
            </article>
          ))}
        </div>
      </section>
    );
}
