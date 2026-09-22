"use client";

import Image from "next/image";
import { Children, isValidElement, useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { songCatalog } from "@/data/songCatalog";

interface PrintLessonProps {
  beforeSong: ReactNode;
  activities: { label: string; content: ReactNode }[];
  afterSong: ReactNode;
}

type PrintableBlock =
  | { kind: "questions"; title: string; questions: string[] }
  | { kind: "vocabulary"; words: { word: string; meaning: string }[] }
  | { kind: "note"; title: string; content: string }
  | { kind: "homework"; prompt: string };

function plainText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  return Children.toArray(node).map((child) => isValidElement(child)
    ? plainText((child.props as { children?: ReactNode }).children)
    : plainText(child)).filter(Boolean).join(" ");
}

function collectBlocks(node: ReactNode): PrintableBlock[] {
  return Children.toArray(node).flatMap((child) => {
    if (!isValidElement(child)) return [];
    const props = child.props as Record<string, unknown>;
    if (Array.isArray(props.questions)) {
      const questionProps = props as unknown as { title: string; questions: string[] };
      return [{ kind: "questions" as const, title: questionProps.title, questions: questionProps.questions }];
    }
    if (Array.isArray(props.words) && props.words.every((item) => typeof item === "object" && item !== null && "meaning" in item)) {
      return [{ kind: "vocabulary" as const, words: props.words as { word: string; meaning: string }[] }];
    }
    if (typeof props.prompt === "string" && typeof props.songTitle === "string") {
      return [{ kind: "homework" as const, prompt: props.prompt }];
    }
    if (child.type === "aside" && String((child.props as { className?: string }).className).includes("cultural-note")) {
      const children = Children.toArray((child.props as { children?: ReactNode }).children);
      const heading = children.find((item) => isValidElement(item) && item.type === "h2");
      const content = children.filter((item) => isValidElement(item) && (item.type === "p" || item.type === "blockquote"));
      return [{ kind: "note" as const, title: heading ? plainText(heading) : "Cultural note", content: content.map(plainText).join(" ") }];
    }
    return collectBlocks((child.props as { children?: ReactNode }).children);
  });
}

export default function PrintLesson({ beforeSong, activities, afterSong }: PrintLessonProps) {
  const pathname = usePathname();
  const song = songCatalog.find((item) => item.slug === pathname.split("/").filter(Boolean).at(-1));
  const [target, setTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const timeout = window.setTimeout(() => setTarget(document.body), 0);
    return () => window.clearTimeout(timeout);
  }, []);
  const before = collectBlocks(beforeSong);
  const after = collectBlocks(afterSong);

  const handlePrint = () => {
    document.body.classList.add("lesson-printing");
    const cleanup = () => document.body.classList.remove("lesson-printing");
    window.addEventListener("afterprint", cleanup, { once: true });
    window.print();
    window.setTimeout(cleanup, 1000);
  };

  return <>
    <button className="lesson-print__button" type="button" onClick={handlePrint}>
      <span aria-hidden="true">⎙</span> Print Lesson
    </button>
    {target && createPortal(<article className="lesson-print-export">
      <header className="lesson-print__header">
        {song?.coverImage && <Image src={song.coverImage} alt="" width={72} height={72} unoptimized />}
        <div><span>Music Your English · Complete song lesson</span><h1>{song?.title ?? "Song lesson"}</h1><p>{song?.artist} · {song?.level}{song?.topic ? ` · ${song.topic}` : ""}</p></div>
      </header>
      <div className="lesson-print__names"><span>Student: ____________________</span><span>Teacher: ____________________</span><span>Date: ____________</span></div>
      <section className="lesson-print__section"><h2>01 · Before the song</h2>{before.map((block, index) => block.kind === "questions" ? <div className="lesson-print__block" key={index}><h3>{block.title}</h3><ol>{block.questions.map((question, questionIndex) => <li key={questionIndex}>{question}</li>)}</ol></div> : block.kind === "vocabulary" ? <div className="lesson-print__block" key={index}><h3>Match the words to their meanings</h3><div className="lesson-print__vocab"><ol>{block.words.map((item) => <li key={item.word}>{item.word}</li>)}</ol><ol type="A">{[...block.words].reverse().map((item) => <li key={item.word}>{item.meaning}</li>)}</ol></div></div> : null)}</section>
      <section className="lesson-print__section"><h2>02 · Listen to the song</h2>{activities.map((activity, index) => <div className="lesson-print__block lesson-print__activity" key={index}><h3>Activity {index + 1} · {activity.label}</h3><div className="lesson-print__lyrics"><p className="lesson-print__paper-instruction">Listen and complete the activity on paper.</p>{activity.content}</div></div>)}</section>
      <section className="lesson-print__section"><h2>03 · After the song</h2>{after.map((block, index) => block.kind === "questions" ? <div className="lesson-print__block" key={index}><h3>{block.title}</h3><ol>{block.questions.map((question, questionIndex) => <li key={questionIndex}>{question}</li>)}</ol></div> : block.kind === "homework" ? <div className="lesson-print__block" key={index}><h3>Writing or speaking</h3><p>{block.prompt}</p><div className="lesson-print__writing" /></div> : block.kind === "note" ? <div className="lesson-print__block" key={index}><h3>{block.title}</h3><p>{block.content}</p></div> : null)}</section>
      <footer className="lesson-print__footer">Learn it. Hear it. Use it. · Music Your English</footer>
    </article>, target)}
  </>;
}
