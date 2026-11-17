<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

New song pages must export metadata using getSongMetadata(slug) from @/lib/songMetadata.
This enables per-song Open Graph and Twitter previews from the catalog cover.
Keep songSortMetadata.ts up to date when adding a new lesson.

Use components/MovieLessonCard.tsx for song-to-movie recommendations.
Keep its shared heading, description, poster layout, and button pattern; pass movie-specific props and an optional factual note.
Movie recommendation cards must always use the shared light pink background.
