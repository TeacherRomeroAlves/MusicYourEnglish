import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import InlineWordOrderActivity from "@/components/activities/InlineWordOrderActivity/InlineWordOrderActivity";
import { InlineWordOrderProvider } from "@/hooks/useInlineWordOrder";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import TypingLyricsActivity from "@/components/activities/TypingLyricsActivity/TypingLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { byAnyMeansVocabulary, byAnyMeansVerseOne, byAnyMeansChorus, byAnyMeansLetters, byAnyMeansVerseTwo, byAnyMeansClauses } from "@/data/songs/byAnyMeans";

import { getSongMetadata } from "@/lib/songMetadata";

export const metadata = getSongMetadata("by-any-means");

export default function ByAnyMeansPage() {
  const song = getSongMeta("by-any-means");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <InlineWordOrderProvider>
      <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know David Kushner?", "Do you like R&B or soul music?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={byAnyMeansVocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
            "Are there many rules at your job or school?",
            "Do you plan to learn English by any means?",
            "Do you get in trouble sometimes?",
            "If you saw a crime happening, could you contain yourself?",
          ]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://www.youtube.com/embed/pZaWebkmJDY" embedTitle="By Any Means by David Kushner ft. The Isley Brothers on YouTube" />}
        listeningActivities={[
          { label: "Verse 1", content: <InlineWordOrderActivity step="Activity 1" title="Verse 1" description="Put the highlighted words in order. Click two words to swap them, or drag a word between the others." lines={byAnyMeansVerseOne} /> },
          { label: "Chorus", content: <TypingLyricsActivity step="Activity 2" title="Chorus" description="Type the missing words using only the letters in the chart." lyrics={byAnyMeansChorus} allowedLetters={byAnyMeansLetters} /> },
          { label: "Verse 2", content: <InlineWordOrderActivity step="Activity 3" title="Verse 2" description="Put the highlighted words in order. Click two words to swap them, or drag a word between the others." lines={byAnyMeansVerseTwo} /> },
          { label: "Verse 2 (continued)", content: <LyricsWordActivity step="Activity 4" title="Verse 2 (continued)" description="Click a gap, then click a phrase to place it. Or click a phrase to use the next available gap." {...byAnyMeansClauses} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <aside className="cultural-note" aria-labelledby="by-any-means-film-note">
            <p className="section-kicker">Cultural note</p>
            <h2 id="by-any-means-film-note">From song to screen</h2>
            <p>Diane Warren wrote &quot;By Any Means&quot; as the title song for the film of the same name. David Kushner and The Isley Brothers perform it on the soundtrack.</p>
            <a href="https://orcd.co/byanymeansmusicoutnow" target="_blank" rel="noopener noreferrer">Explore the soundtrack</a>
          </aside>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
            'Who are "they" in the chorus?',
            "Do you let rules get in your way?",
            'Do you agree that "Laws ain\'t made to get you what you need"?',
            "Is there something you gotta do by any means in your life?",
          ]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt={'"Rules were made to be broken." Do you agree or disagree with this sentence?'} songTitle={song.title} />
        </>}
      />
      </InlineWordOrderProvider>
    </main>
  );
}
