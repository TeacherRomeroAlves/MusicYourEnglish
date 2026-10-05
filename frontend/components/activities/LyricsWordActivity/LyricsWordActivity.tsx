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
import { useLyricsWordSync } from "@/hooks/useLyricsWordSync";

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
  const lyricsWordSync = useLyricsWordSync();
  const activityId = `${step}:${title}`;
  const expectedSlots = lyrics.flatMap((line, lineIndex) =>
    line.parts.flatMap((part, partIndex) =>
      part.answer ? [{ slotId: buildSlotId(lineIndex, partIndex), answer: part.answer, part }] : [],
    ),
  );
  const syncedValues = lyricsWordSync?.values ?? {};
  const syncedWords = new Set(Object.values(syncedValues).flatMap((value) => value ? [value.word] : []));
  const visibleBankItems = bankItems.filter((item) => !syncedWords.has(item.word));
  const getSyncedWord = (slotId: string) => {
    const slot = expectedSlots.find((item) => item.slotId === slotId);
    return slot?.part.syncKey ? syncedValues[slot.part.syncKey] : undefined;
  };
  const getWordForSlot = (slotId: string) => getPlacedItem(slotId)?.word ?? getSyncedWord(slotId)?.word;
  const synchronizePlacement = (slotId: string, tokenId: string) => {
    const slot = expectedSlots.find((item) => item.slotId === slotId);
    const word = bankItems.find((item) => item.id === tokenId)?.word;
    if (slot?.part.syncKey && word) lyricsWordSync?.setValue(slot.part.syncKey, word, activityId);
  };
  const clearSyncedPlacement = (slotId: string) => {
    const slot = expectedSlots.find((item) => item.slotId === slotId);
    if (slot?.part.syncKey) lyricsWordSync?.clearValue(slot.part.syncKey, activityId);
  };
  const handleSyncedDrop = (slotId: string) => {
    if (draggedTokenId) synchronizePlacement(slotId, draggedTokenId);
    handleDropOnSlot(slotId);
  };
  const handleSyncedAutoPlace = (tokenId: string) => {
    const nextSlot = expectedSlots.find(({ slotId }) => !getPlacedItem(slotId) && !getSyncedWord(slotId));
    if (nextSlot) synchronizePlacement(nextSlot.slotId, tokenId);
    handleAutoPlace(tokenId);
  };
  const handleSyncedReturnToBank = (tokenId: string) => {
    const slot = expectedSlots.find(({ slotId }) => getPlacedItem(slotId)?.id === tokenId);
    if (!slot) return;
    clearSyncedPlacement(slot.slotId);
    handleReturnToBank(tokenId);
  };
  const handleSyncedReset = () => {
    expectedSlots.forEach(({ slotId }) => clearSyncedPlacement(slotId));
    handleReset();
  };
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct: expectedSlots.filter(({ slotId, answer, part }) => part.includeInScore !== false && getWordForSlot(slotId) === answer).length,
    answered: expectedSlots.filter(({ slotId, part }) => part.includeInScore !== false && Boolean(getWordForSlot(slotId))).length,
    total: expectedSlots.filter(({ part }) => part.includeInScore !== false).length,
    fields: Object.fromEntries(expectedSlots.filter(({ part }) => part.includeInScore !== false).map(({ slotId, answer }) => [slotId, buildActivityField(getWordForSlot(slotId) ?? "", answer)])),
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
        {visibleBankItems.map((item) => (
          <LyricWordCard
            key={item.id}
            itemId={item.id}
            word={item.word}
            isDragging={draggedTokenId === item.id}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onSelect={handleSyncedAutoPlace}
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
                      placedWordId={getPlacedItem(buildSlotId(index, i))?.id ?? getSyncedWord(buildSlotId(index, i))?.word ?? null}
                      placedWord={getWordForSlot(buildSlotId(index, i)) ?? null}
                      isDragOver={activeSlotId === buildSlotId(index, i)}
                      isDraggingWord={(tokenId) => draggedTokenId === tokenId}
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      onDragOver={() => handleSlotDragOver(buildSlotId(index, i))}
                      onDragLeave={() => handleSlotDragLeave(buildSlotId(index, i))}
                      onDrop={() => handleSyncedDrop(buildSlotId(index, i))}
                      onSelectWord={handleSyncedReturnToBank}
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
          onClick={handleSyncedReset}
        >
          Reset Section
        </button>
      </div>
    </section>
  );
}
