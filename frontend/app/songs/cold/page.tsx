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
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { cold, coldChorus, coldFourthStanza, coldSecondStanza } from "@/data/songs/cold";

export default function ColdPage() {
  const song = getSongMeta("cold");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <LessonSections
        beforeSong={(
          <>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know BigXthaPlug?", "Do you like country or rap music?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Match each word or expression with its meaning. Click one to use the next box, or drag it to a specific box. Use the speaker button to hear it." words={cold.vocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["When do you receive your paycheck?", "What do you sometimes beg for?", "Can you name a perf song?", "Why do some memories fade over time?"]} />
          </>
        )}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={cold.youtube.embedUrl} embedTitle={cold.youtube.title} />}
        listeningActivities={[
          { label: "Chorus", content: <TypingLyricsActivity step="Activity 1" title="Chorus" description="Type the missing words using only the letters in the chart." allowedLetters={coldChorus.allowedLetters} lyrics={coldChorus.lyrics} /> },
          { label: "Verse 1", content: <LyricsWordActivity step="Activity 2" title="Verse 1" description="Click a word to use the next gap, or drag it to a specific gap while you listen." words={coldSecondStanza.words} lyrics={coldSecondStanza.lyrics} /> },
          { label: "Verse 2", content: <LyricsWordActivity step="Activity 3" title="Verse 2" description="Place each complete clause in the correct lyric gap. Click a clause to use the next gap, or drag it to a specific gap." words={coldFourthStanza.words} lyrics={coldFourthStanza.lyrics} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={(
          <>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Are you perf, or are you still learning?", "Why does the singer say that his heart is cold?", "Can love change a person?", "What can make a relationship better?"]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="Is love important in your life? Why or why not?" songTitle="Cold" />
          </>
        )}
      />
    </main>
  );
}
