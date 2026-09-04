interface PronounChartProps {
    pronouns: string[];
    label?: string;
}
  
export default function PronounChart({ pronouns, label = "Subject pronouns" }: PronounChartProps) {
    return (
      <div className="prompt-box">
        <p className="prompt-label">
          {label}
        </p>
  
        <div className="pronoun-chart">
          {pronouns.map((pronoun) => (
            <span
              key={pronoun}
              className="pronoun-chip"
            >
              {pronoun}
            </span>
          ))}
        </div>
      </div>
    );
}
