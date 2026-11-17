"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { songCatalog } from "@/data/songCatalog";
import { HELP_LANGUAGES, getHelpTranslation, normalizeHelpText, type HelpLanguage } from "@/data/helpTranslations";

// Deliberately excludes lyric text, answer options, inputs, names and homework answers.
const HELP_TARGETS = [
  ".meaning-text",
  ".questions .question-box > p",
  ".activity-carousel__slide .section-heading .section-note",
  ".report-section .prompt-box > .prompt-text",
].join(", ");

interface Translation {
  original: string;
  translated: string | null;
  language: HelpLanguage;
}

export default function LessonHelp() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean)[1];
  const lesson = songCatalog.find((song) => song.slug === slug);
  if (!lesson || (lesson.level !== "Beginner" && lesson.level !== "Elementary")) return null;
  return <LessonHelpControls key={slug} />;
}

function LessonHelpControls() {
  const [language, setLanguage] = useState<HelpLanguage>("pt-BR");
  const [armed, setArmed] = useState(false);
  const [result, setResult] = useState<Translation | null>(null);
  const dock = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lesson-help-language");
      if (saved === "pt-BR" || saved === "es-ES") {
        const timer = window.setTimeout(() => setLanguage(saved), 0);
        return () => window.clearTimeout(timer);
      }
    } catch { /* Storage is optional. */ }
  }, []);

  useEffect(() => {
    if (result) closeButton.current?.focus();
  }, [result]);

  useEffect(() => {
    const root = dock.current?.closest(".lesson-groups");
    if (!root) return;
    root.classList.toggle("lesson-help-armed", armed);
    const originals = new Map<HTMLElement, string | null>();

    const markTargets = () => {
      if (!armed) return;
      root.querySelectorAll<HTMLElement>(HELP_TARGETS).forEach((element) => {
        if (element.closest("[hidden]") || !element.getClientRects().length) return;
        if (!originals.has(element)) {
          originals.set(element, element.getAttribute("tabindex"));
          element.tabIndex = 0;
          element.setAttribute("data-help-target", "");
        }
      });
    };
    markTargets();
    const observer = new MutationObserver(markTargets);
    observer.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["hidden"] });

    const dismiss = () => {
      setArmed(false);
      setResult(null);
      trigger.current?.focus();
    };
    const handleSelection = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        if (armed || result) {
          event.preventDefault();
          event.stopImmediatePropagation();
          dismiss();
        }
        return;
      }
      if (!(event.target instanceof Element) || dock.current?.contains(event.target)) return;
      if (event instanceof KeyboardEvent && event.key !== "Enter" && event.key !== " ") return;
      if (!armed) {
        if (event instanceof MouseEvent && result) setResult(null);
        return;
      }
      const target = event.target.closest<HTMLElement>(HELP_TARGETS);
      if (!target || !root.contains(target) || target.closest("[hidden]")) {
        if (event instanceof MouseEvent) setArmed(false);
        return;
      }
      // Capture before exercise handlers so translating a definition never places a word.
      event.preventDefault();
      event.stopImmediatePropagation();
      const original = normalizeHelpText(target.textContent ?? "");
      setArmed(false);
      setResult({ original, translated: getHelpTranslation(original, language), language });
    };
    document.addEventListener("click", handleSelection, true);
    document.addEventListener("keydown", handleSelection, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleSelection, true);
      document.removeEventListener("keydown", handleSelection, true);
      root.classList.remove("lesson-help-armed");
      originals.forEach((value, element) => {
        if (value === null) element.removeAttribute("tabindex");
        else element.setAttribute("tabindex", value);
        element.removeAttribute("data-help-target");
      });
    };
  }, [armed, language, result]);

  const changeLanguage = (next: HelpLanguage) => {
    setLanguage(next);
    setArmed(false);
    setResult(null);
    try { localStorage.setItem("lesson-help-language", next); } catch { /* Storage is optional. */ }
  };

  return (
    <div className="lesson-help" ref={dock}>
      {result && (
        <section className="lesson-help__popup" role="dialog" aria-label="Sentence translation" aria-modal="false">
          <div className="lesson-help__heading">
            <strong>{HELP_LANGUAGES.find((item) => item.value === result.language)?.label}</strong>
            <button ref={closeButton} type="button" aria-label="Close translation" onClick={() => { setResult(null); trigger.current?.focus(); }}>&times;</button>
          </div>
          <p className="lesson-help__original" lang="en">{result.original}</p>
          {result.translated
            ? <p className="lesson-help__translation" lang={result.language}>{result.translated}</p>
            : <p className="lesson-help__translation">This sentence is not translated in this preview yet. Try Help!, Stand by Me, or She Is a Carioca.</p>}
          <small>Click &quot;Need help?&quot; again for another sentence.</small>
        </section>
      )}
      {armed && <p className="lesson-help__hint" role="status">Click a highlighted sentence. Escape cancels.</p>}
      <div className="lesson-help__controls">
        <select aria-label="Translation language" value={language} onChange={(event) => changeLanguage(event.target.value as HelpLanguage)}>
          {HELP_LANGUAGES.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
        </select>
        <button ref={trigger} className="lesson-help__trigger" type="button" aria-pressed={armed} aria-label={armed ? "Cancel help" : "Need help? Select one sentence to translate"} onClick={() => { setResult(null); setArmed((current) => !current); }}>
          {armed ? "Cancel help" : "Need help?"}
        </button>
      </div>
    </div>
  );
}
