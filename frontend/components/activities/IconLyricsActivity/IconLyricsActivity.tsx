"use client";

import { useIconLyrics } from "@/hooks/useIconLyrics";
import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import IconCard from "./IconCard";
import InlineDropZone from "./InlineDropZone";
import type { IconLyricsActivityProps } from "./types";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function IconLyricsActivity({ step, title, description, icons, lyrics }: IconLyricsActivityProps) {
    const {
      bankIcons,
      draggedIconId,
      activeSlotId,
      placements,
      buildSlotId,
      getPlacedIcon,
      handleDragStart,
      handleDragEnd,
      handleSlotDragOver,
      handleSlotDragLeave,
      handleDropOnSlot,
      handleAutoPlace,
      handleDropOnBank,
      handleReturnToBank,
      handleReset,
  } = useIconLyrics(icons, lyrics);
  const expectedSlots = lyrics.flatMap((line, lineIndex) =>
    line.parts.flatMap((part, partIndex) =>
      part.match ? [{ slotId: buildSlotId(lineIndex, partIndex), answer: part.match }] : [],
    ),
  );
  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct: expectedSlots.filter(({ slotId, answer }) => placements[slotId] === answer).length,
    answered: expectedSlots.filter(({ slotId }) => Boolean(placements[slotId])).length,
    total: expectedSlots.length,
    fields: Object.fromEntries(expectedSlots.map(({ slotId, answer }) => [slotId, buildActivityField(placements[slotId] ?? "", answer)])),
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
              className="icon-bank"
              aria-label="Icon bank"
              onDragOver={(event) => {
                event.preventDefault();
              }}
              onDrop={(event) => {
                event.preventDefault();
                handleDropOnBank();
              }}
              onClick={handleDropOnBank}
            >
                {bankIcons.map((icon) => (
                <IconCard
                  key={icon.id}
                  icon={icon}
                  isDragging={draggedIconId === icon.id}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onSelect={handleAutoPlace}
                />
                ))}
            </div>

            <div className="lyrics-card" aria-label={title}>
                {lyrics.map((line, index) => (
                    <p key={index} className="lyric-line">
                    {line.parts.map((part, i) => (
                        <span key={i}>
                        {part.before}
                        {part.match && (
                          <ReviewMarker status={getStatus(buildSlotId(index, i), placements[buildSlotId(index, i)] ?? "")}>
                            <InlineDropZone
                              slotId={buildSlotId(index, i)}
                              match={part.match}
                              placedIcon={getPlacedIcon(buildSlotId(index, i))}
                              isDragOver={activeSlotId === buildSlotId(index, i)}
                              isDraggingIcon={(iconId) => draggedIconId === iconId}
                              onDragStart={handleDragStart}
                              onDragEnd={handleDragEnd}
                              onDragOver={() => handleSlotDragOver(buildSlotId(index, i))}
                              onDragLeave={() => handleSlotDragLeave(buildSlotId(index, i))}
                              onDrop={() => handleDropOnSlot(buildSlotId(index, i))}
                              onSelectIcon={(iconId) => handleReturnToBank(buildSlotId(index, i), iconId)}
                            />
                          </ReviewMarker>
                        )}
                        {part.after}
                        </span>
                    ))}
                    </p>
                ))}
            </div>

            <div className="actions">
                <button className="action-btn secondary" type="button" onClick={handleReset}>
                Reset Stanza
                </button>
            </div>
        </section>
    );
}
