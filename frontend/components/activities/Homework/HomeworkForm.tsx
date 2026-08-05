interface HomeworkFormProps {
    prompt: string;
    studentName: string;
    studentClass: string;
    writing: string;
    wordCount: number;
    onFieldChange: (field: "studentName" | "studentClass" | "writing", value: string) => void;
    onSavePdf: () => void;
    onShare: () => void;
}
  
export default function HomeworkForm({
    prompt, studentName, studentClass, writing, wordCount,
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
            Class
        </label>

        <input
            className="field-input"
            type="text"
            value={studentClass}
            onChange={(event) => onFieldChange("studentClass", event.target.value)}
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
