"use client";

import { useState, type ReactNode } from "react";
import { useSwipeNavigation } from "@/hooks/useSwipeNavigation";

interface ActivitySlide {
  label: string;
  content: ReactNode;
}

interface LessonSectionsProps {
  beforeSong: ReactNode;
  listeningIntro: ReactNode;
  listeningActivities: ActivitySlide[];
  checkAnswers: ReactNode;
  afterSong: ReactNode;
}

type SectionId = "before" | "listening" | "after";
type SlideDirection = "forward" | "backward";

const sectionDetails = {
  before: {
    number: "01",
    title: "Before the song",
    summary: "Warm-up and vocabulary",
  },
  listening: {
    number: "02",
    title: "Listening to the song",
    summary: "Song player, lyrics activities and answers",
  },
  after: {
    number: "03",
    title: "After the song",
    summary: "Wrap-up and homework",
  },
} as const;

export default function LessonSections({
  beforeSong,
  listeningIntro,
  listeningActivities,
  checkAnswers,
  afterSong,
}: LessonSectionsProps) {
  const [openSection, setOpenSection] = useState<SectionId | null>(null);
  const [activityIndex, setActivityIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<SlideDirection | null>(null);

  const toggleSection = (section: SectionId) => {
    setOpenSection((current) => current === section ? null : section);
  };

  const moveActivity = (direction: -1 | 1) => {
    setSlideDirection(direction === 1 ? "forward" : "backward");
    setActivityIndex((current) => (
      current + direction + listeningActivities.length
    ) % listeningActivities.length);
  };

  const renderMobileNavigation = (position: "top" | "bottom") => (
    <div className={`activity-carousel__mobile-nav activity-carousel__mobile-nav--${position}`} aria-label={`${position} activity navigation`}>
      <button type="button" onClick={() => moveActivity(-1)} aria-label="Previous activity">
        <span aria-hidden="true">&larr;</span> Previous
      </button>
      <span aria-live="polite">{activityIndex + 1} / {listeningActivities.length}</span>
      <button type="button" onClick={() => moveActivity(1)} aria-label="Next activity">
        Next <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );

  const swipeNavigation = useSwipeNavigation({
    onSlideRight: () => moveActivity(-1),
    onSlideLeft: () => moveActivity(1),
    enabledQuery: "(max-width: 960px)",
  });

  const renderHeader = (section: SectionId) => {
    const details = sectionDetails[section];
    const isOpen = openSection === section;

    return (
      <button
        className="lesson-group__trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={`lesson-group-${section}`}
        onClick={() => toggleSection(section)}
      >
        <span className="lesson-group__number">{details.number}</span>
        <span className="lesson-group__heading">
          <strong>{details.title}</strong>
          <small>{details.summary}</small>
        </span>
        <span className="lesson-group__symbol" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
    );
  };

  return (
    <div className="lesson-groups">
      <section className={`lesson-group${openSection === "before" ? " is-open" : ""}`}>
        {renderHeader("before")}
        <div id="lesson-group-before" className="lesson-group__panel" hidden={openSection !== "before"}>
          <div className="lesson-group__scroll">{beforeSong}</div>
        </div>
      </section>

      <section className={`lesson-group${openSection === "listening" ? " is-open" : ""}`}>
        {renderHeader("listening")}
        <div id="lesson-group-listening" className="lesson-group__panel" hidden={openSection !== "listening"}>
          <div className="lesson-group__scroll">
            {listeningIntro}
            <div className="activity-carousel" aria-label="Song stanza activities">
              <div className="activity-carousel__toolbar">
                <div>
                  <span>Lyrics practice</span>
                  <strong>{listeningActivities[activityIndex]?.label}</strong>
                </div>
                <span className="activity-carousel__count" aria-live="polite">{activityIndex + 1} / {listeningActivities.length}</span>
              </div>
              {renderMobileNavigation("top")}
              <div className="activity-carousel__stage">
                <button className="activity-carousel__side activity-carousel__side--previous" type="button" onClick={() => moveActivity(-1)} aria-label="Previous activity">
                  <span aria-hidden="true">&larr;</span>
                  <small>Previous</small>
                </button>
                <div className="activity-carousel__slides" {...swipeNavigation}>
                  {listeningActivities.map((activity, index) => (
                    <div
                      className={`activity-carousel__slide${index === activityIndex && slideDirection ? ` is-entering-${slideDirection}` : ""}`}
                      key={activity.label}
                      hidden={index !== activityIndex}
                      aria-hidden={index !== activityIndex}
                    >
                      {activity.content}
                    </div>
                  ))}
                </div>
                <button className="activity-carousel__side activity-carousel__side--next" type="button" onClick={() => moveActivity(1)} aria-label="Next activity">
                  <span aria-hidden="true">&rarr;</span>
                  <small>Next</small>
                </button>
              </div>
              {renderMobileNavigation("bottom")}
            </div>
            <div className="lesson-group__check">{checkAnswers}</div>
          </div>
        </div>
      </section>

      <section className={`lesson-group${openSection === "after" ? " is-open" : ""}`}>
        {renderHeader("after")}
        <div id="lesson-group-after" className="lesson-group__panel" hidden={openSection !== "after"}>
          <div className="lesson-group__scroll">{afterSong}</div>
        </div>
      </section>
    </div>
  );
}
