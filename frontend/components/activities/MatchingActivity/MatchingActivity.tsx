'use client';

import { useMatchingActivity } from "@/hooks/useMatchingActivity";
import { MatchingActivityProps } from "./types";
import MatchingWordCard from "./MatchingWordCard";
import MeaningDropZone from "./MeaningDropZone";

export default function MatchingActivity({ step, title, description, words, }: MatchingActivityProps) {
    const {
      bankSlots,
      answers,
      draggedWord,
      feedback,
      activeDropZone,
      handleDragStart,
      handleDragEnd,
      handleZoneDragOver,
      handleZoneDragLeave,
      handleBankDragOver,
      handleBankDragLeave,
      handleDropOnZone,
      handleDropOnBank,
      handleCheck,
      handleReset,
      handleSpeak,
    } = useMatchingActivity(words);

    const feedbackClassName = ["feedback", feedback.tone !== "default" ? feedback.tone : ""]
      .filter(Boolean)
      .join(" ");

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
          <div
            className="word-bank"
            onDragOver={(event) => {
              event.preventDefault();
              handleBankDragOver();
            }}
            onDragLeave={handleBankDragLeave}
            onDrop={(event) => {
              event.preventDefault();
              handleDropOnBank();
            }}
          >
            {bankSlots.map((word, index) => (
              <div
                key={`bank-slot-${index}`}
                className="word-slot"
              >
                {word ? (
                  <MatchingWordCard
                    word={word}
                    isDragging={draggedWord === word}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onSpeak={handleSpeak}
                  />
                ) : null}
              </div>
            ))}
          </div>
  
          <div className="meanings">
            {words.map((item) => (
              <MeaningDropZone
                key={item.word}
                meaning={item.meaning}
                placedWord={answers[item.word]}
                isDragOver={activeDropZone === item.word}
                isDraggingWord={(word) => draggedWord === word}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onSpeak={handleSpeak}
                onDragOver={() => handleZoneDragOver(item.word)}
                onDragLeave={() => handleZoneDragLeave(item.word)}
                onDrop={() => handleDropOnZone(item.word)}
              />
            ))}
          </div>
        </div>

        <div className="actions">
          <button id="check-btn" className="action-btn" type="button" onClick={handleCheck}>Check Answers</button>
          <button id="reset-btn" className="action-btn secondary" type="button" onClick={handleReset}>Reset</button>
        </div>

        <p id="feedback" className={feedbackClassName} aria-live="polite">{feedback.message}</p>
      </section>
    );
}
