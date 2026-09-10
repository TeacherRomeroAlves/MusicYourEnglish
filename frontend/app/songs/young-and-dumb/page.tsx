import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import TypingLyricsActivity from "@/components/activities/TypingLyricsActivity/TypingLyricsActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { youngAndDumb, youngAndDumbChorus, youngAndDumbVerseOne, youngAndDumbVerseTwo } from "@/data/songs/youngAndDumb";

export default function YoungAndDumbPage() {
  const song = getSongMeta("young-and-dumb");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like rock music from the 2000s?", "Do you know Avril Lavigne or Simple Plan?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={youngAndDumb.vocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Do you know anyone who sometimes acts dumb?", "Are tank tops and neckties a good combination?", "How long does a song normally last?", "When was the last time you said ‘No way’?"]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={youngAndDumb.youtube.embedUrl} embedTitle={youngAndDumb.youtube.title} />}
        listeningActivities={[
          { label: "Verse 1", content: <LyricsWordActivity step="Activity 1" title="Verse 1" description="Click or drag each -in' word into the correct lyric gap. There are no extra words." words={youngAndDumbVerseOne.words} lyrics={youngAndDumbVerseOne.lyrics} /> },
          { label: "Chorus", content: <TypingLyricsActivity step="Activity 2" title="Chorus" description="Type the correct verb form in each gap. Use the base forms in the chart to help you." wordBank={youngAndDumbChorus.wordBank} wordBankLabel="Verbs in their base form" lyrics={youngAndDumbChorus.lyrics} /> },
          { label: "Verse 2", content: <UnscrambleLyricsActivity step="Activity 3" title="Verse 2" description="Unscramble the letters shown in each gap and type the correct word." lyrics={youngAndDumbVerseTwo.lyrics} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["What are the singers thinking about?", "How were they in the past?", "What has changed after twenty years?", "Do you miss anything about being younger?"]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="‘Young people think they know everything.’ Do you agree with this sentence? Why or why not?" songTitle="Young & Dumb" />
        </>}
      />
    </main>
  );
}
