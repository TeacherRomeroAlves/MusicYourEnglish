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
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { dontYouWorryChild, dontYouWorryChildChorus, dontYouWorryChildVerseOne, dontYouWorryChildVerseTwo } from "@/data/songs/dontYouWorryChild";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export default function DontYouWorryChildPage() {
  const song = getSongMeta("dont-you-worry-child");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Swedish House Mafia?", "Do you like electronic music?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={dontYouWorryChild.vocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["What do you worry about?", "Do you believe in heaven?", "Have you ever had a heartbreak?", "What do you do every now and then?"]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={dontYouWorryChild.spotify.embedUrl} embedTitle={dontYouWorryChild.spotify.title} />}
          listeningActivities={[
            { label: "Verse 1", content: <IconLyricsActivity step="Activity 1" title="Verse 1" description="Click or drag each emoji into the correct lyric gap while you listen." icons={dontYouWorryChildVerseOne.icons} lyrics={dontYouWorryChildVerseOne.lyrics} /> },
            { label: "Chorus", content: <UnscrambleLyricsActivity step="Activity 2" title="Chorus" description="Unscramble the letters shown in each gap and type the correct word." lyrics={dontYouWorryChildChorus.lyrics} /> },
            { label: "Verse 2", content: <ChoiceLyricsActivity step="Activity 3" title="Verse 2" description="Choose the simple present or simple past form you hear in each line." lyrics={dontYouWorryChildVerseTwo.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Where did the singer have his first heartbreak?", "Did your father give you any advice when you were a child?", "What memories from your childhood make you happy?", "What helps you when you are worried?"]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="Do you believe heaven has a plan for you? Do you worry about the future? Why or why not?" songTitle="Don't You Worry Child" />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
