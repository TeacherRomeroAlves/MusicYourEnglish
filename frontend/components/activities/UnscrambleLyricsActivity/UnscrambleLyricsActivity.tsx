"use client";

import type { UnscrambleLyricsActivityProps } from "./types";
import { useUnscrambleLyrics } from "@/hooks/useUnscrambleLyrics";
import { useMistakeReview, useRegisterActivityResult } from "@/hooks/useActivityResults";
import { getActivityInstruction } from "@/lib/activityInstructions";
import { buildActivityField } from "@/lib/activityResultsStore";
import ReviewMarker from "@/components/activities/ReviewMarker";

export default function UnscrambleLyricsActivity({
  step,
  title,
  description,
  lyrics,
}: UnscrambleLyricsActivityProps) {
  const { values, handleChange, handleReset } = useUnscrambleLyrics();
  const answerLines = lyrics.filter((line) => line.answer);
  const lyricRows = lyrics.reduce<Array<Array<{ line: (typeof lyrics)[number]; index: number }>>>((rows, line, index) => {
    if (line.continuePreviousLine && rows.length > 0) {
      rows[rows.length - 1].push({ line, index });
    } else {
      rows.push([{ line, index }]);
    }
    return rows;
  }, []);

  const activityId = `${step}:${title}`;
  const { getStatus } = useMistakeReview(activityId);
  useRegisterActivityResult(activityId, {
    correct: lyrics.filter((line, index) => line.answer && (
      (values[line.syncKey ?? String(index)] ?? "").trim().toLowerCase() === line.answer.toLowerCase()
    )).length,
    answered: lyrics.filter((line, index) => line.answer && Boolean((values[line.syncKey ?? String(index)] ?? "").trim())).length,
    total: answerLines.length,
    fields: Object.fromEntries(lyrics.flatMap((line, index) => line.answer
      ? [[String(index), buildActivityField(values[line.syncKey ?? String(index)] ?? "", line.answer)]]
      : [])),
  });

  return (
    <section className="card">
      <div className="section-heading">
        <p className="section-kicker">{step}</p>
        <h2>{title}</h2>
        {description && <p className="section-note">{getActivityInstruction(description)}</p>}
      </div>

      <div className="lyrics-card" aria-label={title}>
        {lyricRows.map((row, rowIndex) => (
          <p className="lyric-line" key={`lyric-row-${rowIndex}`}>
            {row.map(({ line, index }) => (
              <span className="lyric-line__segment" key={`${line.answer}-${index}`}>
                {line.before}{line.before && " "}
                {line.answer && <ReviewMarker status={getStatus(String(index), values[line.syncKey ?? String(index)] ?? "")}><input
                  className="lyric-input unscramble-input"
                  type="text"
                  maxLength={line.answer.length}
                  style={{ width: `${Math.max(112, line.scrambled.length * 12 + 32)}px` }}
                  placeholder={line.scrambled}
                  aria-label={`Unscramble ${line.scrambled}`}
                  value={values[line.syncKey ?? String(index)] ?? ""}
                  onChange={(event) => handleChange(line.syncKey ?? String(index), event.target.value, line.answer.length)}
                  autoComplete="off"
                  spellCheck={false}
                /></ReviewMarker>}{line.answer && line.after && " "}
                {line.after}
              </span>
            ))}
          </p>
        ))}
      </div>

      <div className="actions">
        <button className="action-btn secondary" type="button" onClick={handleReset}>
          Reset Section
        </button>
      </div>
    </section>
  );
}
