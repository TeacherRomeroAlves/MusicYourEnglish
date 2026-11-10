"use client";

import { useEffect, useState } from "react";
import { getLessonUseTotal } from "@/lib/supabase/lessonUsage";

const MINIMUM_VISIBLE_TOTAL = 25;
const numberFormat = new Intl.NumberFormat("en");

export default function LessonUsageCounter() {
  if (process.env.NODE_ENV === "development") {
    return <CounterLabel total={125} preview />;
  }
  return <LiveCounter />;
}

function LiveCounter() {
  const [total, setTotal] = useState<number | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    void getLessonUseTotal(controller.signal).then((count) => {
      if (!controller.signal.aborted) setTotal(count);
    }).catch(() => {
      // Keep the counter hidden when usage data is unavailable.
    });
    return () => controller.abort();
  }, []);

  if (total === null || total < MINIMUM_VISIBLE_TOTAL) return null;
  return <CounterLabel total={total} />;
}

function CounterLabel({ total, preview = false }: { total: number; preview?: boolean }) {
  return (
    <p className="lesson-usage-counter" id="lesson-usage-counter">
      <strong>{numberFormat.format(total)}</strong> lessons used
      {preview && <small> (preview only)</small>}
    </p>
  );
}
