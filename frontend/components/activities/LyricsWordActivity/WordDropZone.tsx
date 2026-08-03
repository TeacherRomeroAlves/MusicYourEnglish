interface WordDropZoneProps { match: string; }
    export default function WordDropZone({ match, }: WordDropZoneProps) {
    return (
        <span
        className="word-drop-zone"
        data-match={match}
        />
    );
}