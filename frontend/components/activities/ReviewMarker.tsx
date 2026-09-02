import type { ActivityFieldStatus } from "@/lib/activityResultsStore";
import type { ReactNode } from "react";

interface ReviewMarkerProps {
  status?: ActivityFieldStatus;
  children: ReactNode;
  block?: boolean;
}

export default function ReviewMarker({ status, children, block = false }: ReviewMarkerProps) {
  const needsAttention = status === "incorrect" || status === "unanswered";
  const label = status === "unanswered" ? "Answer needed" : "Check this answer";

  const content = <>
      {children}
      {needsAttention && <span className="sr-only" role="status">{label}</span>}
    </>;
  const className = `answer-review${block ? " answer-review--block" : ""}${needsAttention ? ` is-${status}` : ""}`;

  return block ? <div className={className}>{content}</div> : <span className={className}>{content}</span>;
}
