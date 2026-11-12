import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { sheIsACariocaVocabulary, sheIsACariocaVerseOne, sheIsACariocaIcons, sheIsACariocaVerseTwo } from "@/data/songs/sheIsACarioca";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

import { getSongMetadata } from "@/lib/songMetadata";

export const metadata = getSongMetadata("she-is-a-carioca");

export default function SheIsACariocaPage() {
  const song = getSongMeta("she-is-a-carioca");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like bossa nova?", "Do you know Tom Jobim?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={sheIsACariocaVocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "Where are you from?",
              "Do you forget things sometimes?",
              "What happened all of a sudden in your life?",
              "Can you see the sea from your house?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://www.youtube.com/embed/y6BAy1MewRA" embedTitle="She Is a Carioca by Tom Jobim on YouTube" />}
          listeningActivities={[
            { label: "Verse 1", content: <ChoiceLyricsActivity step="Activity 1" title="Verse 1" description="Click the option you hear in each lyric gap." lyrics={sheIsACariocaVerseOne} /> },
            { label: "Verse 2", content: <IconLyricsActivity step="Activity 2" title="Verse 2" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap." icons={sheIsACariocaIcons} lyrics={sheIsACariocaVerseTwo} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "Is this song about a man or a woman?",
              "Where is she from?",
              "Does the singer like her?",
              "Do you feel like the singer sometimes?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="Do you think Brazilian people have a special charm? Why or why not?" songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
