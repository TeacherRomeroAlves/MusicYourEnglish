'use client';

import { useState } from "react";
import { useMatchingActivity } from "@/hooks/useMatchingActivity";
import { MatchingActivityProps } from "./types";

export default function MatchingActivity({ step, title, description, words, }: MatchingActivityProps) {
    
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const { handleDragStart, handleDrop, } = useMatchingActivity();

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
  
        <div className="activity-layout">
          <div className="word-bank">
            {words.map((item) => (
              <div
                key={item.word}
                className="word-slot"
              >
                <div className="word-card" draggable onDragStart={() => handleDragStart(item.word) }>
                  <span>{item.word}</span>
  
                  <button
                    className="speak-btn"
                    type="button"
                  >
                    Listen
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          <div className="meanings">
            {words.map((item) => (
              <div
                key={item.word}
                className="drop-zone"
              >
                <p className="meaning-text">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="actions">
          <button id="check-btn" className="action-btn" type="button">Check Answers</button>
          <button id="reset-btn" className="action-btn secondary" type="button">Reset</button>
        </div>

        <p id="feedback" className="feedback" aria-live="polite"></p>
      </section>
    );
}