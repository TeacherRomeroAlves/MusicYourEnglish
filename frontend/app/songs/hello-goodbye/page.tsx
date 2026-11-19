import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { helloGoodbyeVocabulary, helloGoodbyeActivity } from "@/data/songs/helloGoodbye";
import { getSongMetadata } from "@/lib/songMetadata";

export const metadata = getSongMetadata("hello-goodbye");

export default function HelloGoodbyePage() {
  const song = getSongMeta("hello-goodbye");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like The Beatles?", "Do you know this song?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={helloGoodbyeVocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
            'When do you say "Hello"?',
            'When do you say "Goodbye"?',
            "Do you know the capital of England, or don't you know?",
            'Why do people say "Goodbye" and "Hello"?',
          ]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://www.youtube.com/embed/rblYSKz_VnI" embedTitle="Hello, Goodbye by The Beatles on YouTube" />}
        listeningActivities={[
          { label: "Verse and Chorus", content: <LyricsWordActivity step="Activity 1" title="Verse and Chorus" description="Click a gap, then click a clause to place it. Or click a clause to use the next available gap." {...helloGoodbyeActivity} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
            "Can you name some opposite words in the song?",
            "Do you like the song?",
          ]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt={'Write a short message to your favorite singer. Include "Hello" and "Goodbye" in the message.'} songTitle={song.title} />
        </>}
      />
    </main>
  );
}
