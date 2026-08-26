'use client';

import { useMatchingActivity } from "@/hooks/useMatchingActivity";
import { MatchingActivityProps } from "./types";
import MatchingWordCard from "./MatchingWordCard";
import MeaningDropZone from "./MeaningDropZone";

export default function MatchingActivity({ step, title, words, }: MatchingActivityProps) {
    const {
      bankSlots,
      answers,
      draggedWord,
      selectedWord,
      feedback,
      activeDropZone,
      handleDragStart,
      handleDragEnd,
      handleZoneDragOver,
      handleZoneDragLeave,
      handleBankDragOver,
      handleBankDragLeave,
      handleDropOnZone,
      handleSelectWord,
      handleSelectZone,
      handleDropOnBank,
      handleReturnToBank,
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
  
          <p className="section-note">
            Click a word to select it, then click its meaning to match them. You can also drag the word to the correct meaning. Use Listen to hear the word. Click a placed word to return it.
          </p>
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
            onClick={handleDropOnBank}
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
                    isSelected={selectedWord === word}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onSelect={handleSelectWord}
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
                onSelectZone={() => handleSelectZone(item.word)}
                onSelectWord={handleReturnToBank}
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
