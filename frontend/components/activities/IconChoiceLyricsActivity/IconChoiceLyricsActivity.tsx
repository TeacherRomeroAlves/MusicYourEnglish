"use client";

import ChoiceSlot from "@/components/activities/ChoiceLyricsActivity/ChoiceSlot";
import IconCard from "@/components/activities/IconLyricsActivity/IconCard";
import InlineDropZone from "@/components/activities/IconLyricsActivity/InlineDropZone";
import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { useChoiceLyrics } from "@/hooks/useChoiceLyrics";
import { useIconLyrics } from "@/hooks/useIconLyrics";
import { getActivityInstruction } from "@/lib/activityInstructions";
import type { IconChoiceLyricsActivityProps } from "./types";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function IconChoiceLyricsActivity({
  step,
  title,
  description,
  icons,
  iconLyrics,
  choiceLyrics,
}: IconChoiceLyricsActivityProps) {
  const iconActivity = useIconLyrics(icons, iconLyrics);
  const choices = useChoiceLyrics(choiceLyrics);
  const iconAnswers = iconLyrics.flatMap((line, lineIndex) =>
    line.parts.flatMap((part, partIndex) => part.match
      ? [{ slotId: iconActivity.buildSlotId(lineIndex, partIndex), answer: part.match }]
      : []),
  );
  const choiceAnswers = choiceLyrics.flatMap((line, lineIndex) =>
    line.items.flatMap((item, itemIndex) => item.answer
      ? [{ slotId: `${lineIndex}-${itemIndex}`, answer: item.answer, syncKey: item.syncKey }]
      : []),
  );

  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct:
      iconAnswers.filter(({ slotId, answer }) => iconActivity.placements[slotId] === answer).length +
      choiceAnswers.filter(({ slotId, answer, syncKey }) => choices.getSelection(slotId, syncKey) === answer).length,
    answered:
      iconAnswers.filter(({ slotId }) => Boolean(iconActivity.placements[slotId])).length +
      choiceAnswers.filter(({ slotId, syncKey }) => Boolean(choices.getSelection(slotId, syncKey))).length,
    total: iconAnswers.length + choiceAnswers.length,
    fields: Object.fromEntries([
      ...iconAnswers.map(({ slotId, answer }) => [slotId, buildActivityField(iconActivity.placements[slotId] ?? "", answer)] as const),
      ...choiceAnswers.map(({ slotId, answer, syncKey }) => [`choice-${slotId}`, buildActivityField(choices.getSelection(slotId, syncKey) ?? "", answer)] as const),
    ]),
  });

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>
        <h2>{title}</h2>
        <p className="section-note">{getActivityInstruction(description)}</p>
      </div>

      <div
        className="icon-bank"
        aria-label="Icon bank"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          iconActivity.handleDropOnBank();
        }}
        onClick={iconActivity.handleDropOnBank}
      >
        {iconActivity.bankIcons.map((icon) => (
          <IconCard
            key={icon.id}
            icon={icon}
            isDragging={iconActivity.draggedIconId === icon.id}
            onDragStart={iconActivity.handleDragStart}
            onDragEnd={iconActivity.handleDragEnd}
            onSelect={iconActivity.handleAutoPlace}
          />
        ))}
      </div>

      <div className="lyrics-card choice-lyrics" aria-label={title}>
        {iconLyrics.map((line, lineIndex) => (
          <p className="lyric-line" key={`icon-${lineIndex}`}>
            {line.parts.map((part, partIndex) => {
              const slotId = iconActivity.buildSlotId(lineIndex, partIndex);
              return <span key={slotId}>
                {part.before}
                {part.match && (
                  <ReviewMarker status={getStatus(slotId, iconActivity.placements[slotId] ?? "")}>
                  <InlineDropZone
                    slotId={slotId}
                    match={part.match}
                    placedIcon={iconActivity.getPlacedIcon(slotId)}
                    isDragOver={iconActivity.activeSlotId === slotId}
                    isDraggingIcon={(iconId) => iconActivity.draggedIconId === iconId}
                    onDragStart={iconActivity.handleDragStart}
                    onDragEnd={iconActivity.handleDragEnd}
                    onDragOver={() => iconActivity.handleSlotDragOver(slotId)}
                    onDragLeave={() => iconActivity.handleSlotDragLeave(slotId)}
                    onDrop={() => iconActivity.handleDropOnSlot(slotId)}
                    onSelectIcon={(iconId) => iconActivity.handleReturnToBank(slotId, iconId)}
                  />
                  </ReviewMarker>
                )}
                {part.after}
              </span>;
            })}
          </p>
        ))}

        <div className="lyrics-divider" aria-hidden="true" />

        {choiceLyrics.map((line, lineIndex) => (
          <p className="lyric-line" key={`choice-${lineIndex}`}>
            {line.items.map((item, itemIndex) => {
              const slotId = `${lineIndex}-${itemIndex}`;
              return <span key={slotId}>
                {item.before}{" "}
                {item.answer && (
                  <ReviewMarker status={getStatus(`choice-${slotId}`, choices.getSelection(slotId, item.syncKey) ?? "")}>
                  <ChoiceSlot
                    options={choices.optionsBySlot[slotId] ?? item.options}
                    selectedOption={choices.getSelection(slotId, item.syncKey)}
                    onSelect={(option) => choices.handleSelect(slotId, option, item.syncKey)}
                  />
                  </ReviewMarker>
                )}{" "}
                {item.after}{" "}
              </span>;
            })}
          </p>
        ))}
      </div>

      <div className="actions">
        <button
          className="action-btn secondary"
          type="button"
          onClick={() => {
            iconActivity.handleReset();
            choices.handleReset();
          }}
        >
          Reset Section
        </button>
      </div>
    </section>
  );
}
