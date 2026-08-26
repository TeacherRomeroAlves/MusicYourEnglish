interface HomeworkFormProps {
    prompt: string;
    studentName: string;
    teacherName: string;
    writing: string;
    wordCount: number;
    saveStatus?: string;
    onFieldChange: (field: "studentName" | "teacherName" | "writing", value: string) => void;
    onSavePdf: () => void;
    onShare: () => void;
}
  
export default function HomeworkForm({
    prompt, studentName, teacherName, writing, wordCount, saveStatus,
    onFieldChange, onSavePdf, onShare,
}: HomeworkFormProps) {
    return (
        <div className="report-form">
        <label className="field-label">
            Student Name
        </label>

        <input
            className="field-input"
            type="text"
            value={studentName}
            onChange={(event) => onFieldChange("studentName", event.target.value)}
        />

        <label className="field-label">
            Teacher Name
        </label>

        <input
            className="field-input"
            type="text"
            value={teacherName}
            onChange={(event) => onFieldChange("teacherName", event.target.value)}
        />

        <label className="field-label">
            Homework Answer
        </label>

        <textarea
            className="writing-box"
            rows={8}
            data-prompt={prompt}
            value={writing}
            onChange={(event) => onFieldChange("writing", event.target.value)}
        />

        <p className="word-count">
            Word count: {wordCount}
        </p>

        {saveStatus && <p className="homework-save-status" aria-live="polite">{saveStatus}</p>}

        <div className="actions">
            <button
            className="action-btn"
            type="button"
            onClick={onSavePdf}
            >
            Save As PDF
            </button>

            <button
            className="action-btn secondary"
            type="button"
            onClick={onShare}
            >
            Share
            </button>
        </div>
        </div>
    );
}
