"use client";

import { useLyricsWord } from "@/hooks/useLyricsWord";
import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import LyricWordCard from "./LyricWordCard";
import WordDropZone from "./WordDropZone";
import { Fragment } from "react/jsx-runtime";
import type { LyricsWordActivityProps } from "./types";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function LyricsWordActivity({ step, title, description, words, lyrics, }: LyricsWordActivityProps) {
  const {
    bankItems,
    draggedTokenId,
    activeSlotId,
    placements,
    buildSlotId,
    getPlacedItem,
    handleDragStart,
    handleDragEnd,
    handleSlotDragOver,
    handleSlotDragLeave,
    handleDropOnSlot,
    handleAutoPlace,
    handleDropOnBank,
    handleReturnToBank,
    handleReset,
  } = useLyricsWord(words, lyrics);
  const expectedSlots = lyrics.flatMap((line, lineIndex) =>
    line.parts.flatMap((part, partIndex) =>
      part.answer ? [{ slotId: buildSlotId(lineIndex, partIndex), answer: part.answer }] : [],
    ),
  );
  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct: expectedSlots.filter(({ slotId, answer }) => getPlacedItem(slotId)?.word === answer).length,
    answered: expectedSlots.filter(({ slotId }) => Boolean(placements[slotId])).length,
    total: expectedSlots.length,
    fields: Object.fromEntries(expectedSlots.map(({ slotId, answer }) => [slotId, buildActivityField(getPlacedItem(slotId)?.word ?? "", answer)])),
  });

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>

        <h2>{title}</h2>

        {description && (
          <p className="section-note">
            {getActivityInstruction(description)}
          </p>
        )}
      </div>

      <div
        className="lyric-word-bank"
        aria-label={title}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDrop={(event) => {
          event.preventDefault();
          handleDropOnBank();
        }}
        onClick={handleDropOnBank}
      >
        {bankItems.map((item) => (
          <LyricWordCard
            key={item.id}
            itemId={item.id}
            word={item.word}
            isDragging={draggedTokenId === item.id}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onSelect={handleAutoPlace}
          />
        ))}
      </div>

      <div className="lyrics-card" aria-label={title}>
        {lyrics.map((line, index) => (
          <Fragment key={index}>
            <p className="lyric-line">
              {line.parts.map((part, i) => (
                <span key={i}>
                  {part.before}

                  {part.answer && (
                    <ReviewMarker status={getStatus(buildSlotId(index, i), getPlacedItem(buildSlotId(index, i))?.word ?? "")}>
                    <WordDropZone
                      slotId={buildSlotId(index, i)}
                      match={part.answer}
                      placedWordId={getPlacedItem(buildSlotId(index, i))?.id ?? null}
                      placedWord={getPlacedItem(buildSlotId(index, i))?.word ?? null}
                      isDragOver={activeSlotId === buildSlotId(index, i)}
                      isDraggingWord={(tokenId) => draggedTokenId === tokenId}
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      onDragOver={() => handleSlotDragOver(buildSlotId(index, i))}
                      onDragLeave={() => handleSlotDragLeave(buildSlotId(index, i))}
                      onDrop={() => handleDropOnSlot(buildSlotId(index, i))}
                      onSelectWord={handleReturnToBank}
                    />
                    </ReviewMarker>
                  )}

                  {part.after}
                </span>
              ))}
            </p>

            {line.dividerAfter && (
              <div className="lyric-divider-space" />
            )}
          </Fragment>
        ))}
      </div>

      <div className="actions">
        <button
          className="action-btn secondary"
          type="button"
          onClick={handleReset}
        >
          Reset Section
        </button>
      </div>
    </section>
  );
}
