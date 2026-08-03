interface PronounChartProps {
    pronouns: string[];
}
  
export default function PronounChart({ pronouns, }: PronounChartProps) {
    return (
      <div className="prompt-box">
        <p className="prompt-label">
          Subject pronouns
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