import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import PartialWordLyricsActivity from "@/components/activities/PartialWordLyricsActivity/PartialWordLyricsActivity";
import TypingLyricsActivity from "@/components/activities/TypingLyricsActivity/TypingLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { doTheMath, doTheMathOpening, doTheMathChorus, doTheMathLaterVerses } from "@/data/songs/doTheMath";

export default function DoTheMathPage() {
  const song = getSongMeta("do-the-math");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Dove Cameron?", "Do you like pop music?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word and its meaning, or choose a definition first and then a word. Use the speaker button to hear it." words={doTheMath.vocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={["Are you good at math?", "What will happen in your life sooner or later?", "What is the lowest common denominator of 1/3 and 1/4?", "Are daddy issues common?"]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://www.youtube.com/embed/cTWeKhZhxT8" embedTitle="Do the Math by Dove Cameron on YouTube" />}
        listeningActivities={[
          { label: "Verse 1 and Pre-Chorus", content: <LyricsWordActivity step="Activity 1" title="Verse 1 and Pre-Chorus" description="Click a gap, then click a word to place it. Or click a word to use the next available gap. Three words are extra." words={doTheMathOpening.words} lyrics={doTheMathOpening.lyrics} /> },
          { label: "Chorus", content: <TypingLyricsActivity step="Activity 2" title="Chorus" description="Type the missing words directly into the lyrics. Tip: all missing words have four letters." lyrics={doTheMathChorus} /> },
          { label: "Verse 2 and Pre-Chorus", content: <PartialWordLyricsActivity step="Activity 3" title="Verse 2 and Pre-Chorus" description="Type the missing letters to complete each word." lyrics={doTheMathLaterVerses} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={["Do you have exes? Are they crazy?", "Are you healing at the moment?", "Did the singer have a good relationship? Why or why not?", "Does the singer think her ex is the problem?"]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="Are men more problematic than women in relationships? Why or why not?" songTitle={song.title} />
        </>}
      />
    </main>
  );
}
