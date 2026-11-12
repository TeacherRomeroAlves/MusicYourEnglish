import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { helpVocabulary, helpOpening, helpChorus, helpVerseTwo } from "@/data/songs/help";

import { getSongMetadata } from "@/lib/songMetadata";

export const metadata = getSongMetadata("help");

export default function HelpPage() {
  const song = getSongMeta("help");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know The Beatles?", "Are they the most famous band ever?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={helpVocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
            "Do you appreciate it when people help you?",
            "Are you self-assured?",
            "Is the weather hazy around your home today?",
            "Do you change your mind now and then?",
          ]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://www.youtube.com/embed/2Q_ZzBGPdqE" embedTitle="Help! by The Beatles on YouTube" />}
        listeningActivities={[
          { label: "Intro and Verse 1", content: <ChoiceLyricsActivity step="Activity 1" title="Intro and Verse 1" description="Click the option you hear in each lyric gap." lyrics={helpOpening} /> },
          { label: "Chorus", content: <LyricsWordActivity step="Activity 2" title="Chorus" description="Click a gap, then click a word to place it. Or click a word to use the next available gap." {...helpChorus} /> },
          { label: "Verse 2", content: <UnscrambleLyricsActivity step="Activity 3" title="Verse 2" description="Unscramble the letters shown in each gap and type the correct word." lyrics={helpVerseTwo} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
            "Who is the singer talking to?",
            "What does the singer need?",
            "Do you ask for help sometimes?",
            "Do you need help in your life right now?",
          ]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="Who helps you in difficult times? Is this person important in your life?" songTitle={song.title} />
        </>}
      />
    </main>
  );
}
