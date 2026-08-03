interface InlineDropZoneProps {
    match: string;
}

export default function InlineDropZone({ match, }: InlineDropZoneProps) {
    return (
        <span
        className="inline-drop-zone"
        data-match={match}
        />
    );
}