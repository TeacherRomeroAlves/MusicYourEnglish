"use client";

import ChoiceSlot from "./ChoiceSlot";
import type { ChoiceLyricsActivityProps } from "./types";
import { useChoiceLyrics } from "@/hooks/useChoiceLyrics";
import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function ChoiceLyricsActivity({ step, title, description, lyrics, }: ChoiceLyricsActivityProps) {
  const { optionsBySlot, getSelection, handleSelect, handleReset } = useChoiceLyrics(lyrics);
  const answers = lyrics.flatMap((line, lineIndex) =>
    line.items
      .map((item, itemIndex) => ({ slotId: `${lineIndex}-${itemIndex}`, answer: item.answer, syncKey: item.syncKey }))
      .filter((item) => item.answer),
  );
  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct: answers.filter(({ slotId, answer, syncKey }) => getSelection(slotId, syncKey) === answer).length,
    answered: answers.filter(({ slotId, syncKey }) => Boolean(getSelection(slotId, syncKey))).length,
    total: answers.length,
    fields: Object.fromEntries(answers.map(({ slotId, answer, syncKey }) => [slotId, buildActivityField(getSelection(slotId, syncKey) ?? "", answer)])),
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

      <div className="lyrics-card choice-lyrics">
        {lyrics.map((line, index) => (
          <p key={index} className="lyric-line">
            {line.items.map((item, itemIndex) => {
              const slotId = `${index}-${itemIndex}`;
              return <span key={slotId}>
                {item.before}{" "}
                {item.answer && <>
                  <ReviewMarker status={getStatus(slotId, getSelection(slotId, item.syncKey) ?? "")}>
                  <ChoiceSlot
                    options={optionsBySlot[slotId] ?? item.options}
                    selectedOption={getSelection(slotId, item.syncKey)}
                    onSelect={(option) => handleSelect(slotId, option, item.syncKey)}
                  />{" "}
                  </ReviewMarker>
                </>}
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
          onClick={handleReset}
        >
          Reset Section
        </button>
      </div>
    </section>
  );
}
