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
      activeSlotId,
      placements,
      buildSlotId,
      getPlacedIcon,
      handleAutoPlace,
      handleSelectSlot,
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

            <div className="icon-bank" aria-label="Icon bank">
                {bankIcons.map((icon) => (
                <IconCard
                  key={icon.id}
                  icon={icon}
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
                              isSelected={activeSlotId === buildSlotId(index, i)}
                              onSelectSlot={() => handleSelectSlot(buildSlotId(index, i))}
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
                Reset Verse
                </button>
            </div>
        </section>
    );
}
