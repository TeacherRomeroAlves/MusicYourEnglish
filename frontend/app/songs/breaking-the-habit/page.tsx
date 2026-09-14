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
import OrderLyricsActivity from "@/components/activities/OrderLyricsActivity/OrderLyricsActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import {
  breakingTheHabit,
  breakingTheHabitChorus,
  breakingTheHabitVerseOne,
  breakingTheHabitVerseThree,
  breakingTheHabitVerseTwo,
} from "@/data/songs/breakingTheHabit";

export default function BreakingTheHabitPage() {
  const song = getSongMeta("breaking-the-habit");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like rock music from the 2000s?", "Do you know Linkin Park?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={breakingTheHabit.vocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Can you mention some habits you have?", "Do you pick people apart sometimes?", "What do people sometimes assume about you?", "Have you ever been at fault for a problem?"]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={breakingTheHabit.youtube.embedUrl} embedTitle={breakingTheHabit.youtube.title} />}
        listeningActivities={[
          { label: "Verse 1", content: <LyricsWordActivity step="Activity 1" title="Verse 1" description="Click or drag each word into the correct lyric gap. There are no extra words." words={breakingTheHabitVerseOne.words} lyrics={breakingTheHabitVerseOne.lyrics} /> },
          { label: "Pre-Chorus And Chorus", content: <ChoiceLyricsActivity step="Activity 2" title="Pre-Chorus And Chorus" description="Choose the verb form you hear in each line." lyrics={breakingTheHabitChorus.lyrics} /> },
          { label: "Verse 2", content: <UnscrambleLyricsActivity step="Activity 3" title="Verse 2" description="Unscramble the letters shown in each gap and type the correct word." lyrics={breakingTheHabitVerseTwo.lyrics} /> },
          { label: "Verse 3", content: <OrderLyricsActivity step="Activity 4" title="Verse 3" description="Put the lyric lines in order. Click two lines to swap them, or drag one line onto another." items={breakingTheHabitVerseThree.items} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <aside className="cultural-note" aria-labelledby="breaking-the-habit-cultural-note">
            <p className="section-kicker">Cultural note</p>
            <h2 id="breaking-the-habit-cultural-note">Linkin Park and Chester Bennington</h2>
            <p>Linkin Park became one of the defining rock bands of the 2000s by combining rock, electronic music, and hip-hop. Lead singer Chester Bennington was known for expressing intense emotions through his voice. He died in 2017, and his music continues to encourage conversations about emotional pain and mental health.</p>
          </aside>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Is there any habit you want to break?", "What is the singer doing tonight?", "Why does the singer feel confused?", "Can changing a habit be difficult? Why?"]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="How can we break a habit? Is it easy to do? Explain your ideas." songTitle="Breaking the Habit" />
        </>}
      />
    </main>
  );
}
