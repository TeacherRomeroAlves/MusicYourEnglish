interface HomeworkFormProps {
    prompt: string;
}
  
export default function HomeworkForm({ prompt, }: HomeworkFormProps) {
    return (
        <div className="report-form">
        <label className="field-label">
            Student Name
        </label>

        <input
            className="field-input"
            type="text"
        />

        <label className="field-label">
            Class
        </label>

        <input
            className="field-input"
            type="text"
        />

        <label className="field-label">
            Homework Answer
        </label>

        <textarea
            className="writing-box"
            rows={8}
            data-prompt={prompt}
        />

        <p className="word-count">
            Word count: 0
        </p>

        <div className="actions">
            <button
            className="action-btn"
            type="button"
            >
            Save As PDF
            </button>

            <button
            className="action-btn secondary"
            type="button"
            >
            Share
            </button>
        </div>
        </div>
    );
}