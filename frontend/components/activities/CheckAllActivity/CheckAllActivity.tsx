"use client";

import { useCheckAllAnswers } from "@/hooks/useActivityResults";
import { getActivityInstruction } from "@/lib/activityInstructions";

interface CheckAllActivityProps {
    title: string;
    description?: string;
    buttonText?: string;
}

export default function CheckAllActivity({ title, description, buttonText = "Check All Answers", }: CheckAllActivityProps) {
    const { feedback, handleCheck } = useCheckAllAnswers();
    return (
        <section className="card">
        <div className="section-heading">
            <p className="section-kicker">Final Step</p>

            <h2>{title}</h2>

            {description && (
            <p className="section-note">
                {getActivityInstruction(description, "check")}
            </p>
            )}
        </div>

        <div className="actions">
            <button
            className="action-btn"
            type="button"
            onClick={handleCheck}
            >
            {buttonText}
            </button>
        </div>

        <p
            className="feedback"
            aria-live="polite"
        >{feedback}</p>
        </section>
    );
}
