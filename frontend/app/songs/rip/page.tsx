import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import InlineWordOrderActivity from "@/components/activities/InlineWordOrderActivity/InlineWordOrderActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import OrderLyricsActivity from "@/components/activities/OrderLyricsActivity/OrderLyricsActivity";
import PartialWordLyricsActivity from "@/components/activities/PartialWordLyricsActivity/PartialWordLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { rip, ripChorus, ripOutro, ripVerseOne, ripVerseTwo } from "@/data/songs/rip";
import { InlineWordOrderProvider } from "@/hooks/useInlineWordOrder";

export const metadata = {
  title: "R.I.P. - Motionless in White ft. Skylar Grey | Music Your English",
  description: "Practice if, would, and verbs with this Pre-intermediate English lesson based on R.I.P.",
};

export default function RipPage() {
  const song = getSongMeta("rip");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <InlineWordOrderProvider>
      <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like metal?", "Do you know Motionless in White?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={rip.vocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
            "Do you believe in fate?",
            "What makes you suffer?",
            "Do you like poems or requiems? Can you recite any?",
            "When might someone feel emptiness?",
          ]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={rip.youtube.embedUrl} embedTitle={rip.youtube.title} />}
        listeningActivities={[
          { label: "Chorus", content: <InlineWordOrderActivity step="Activity 1" title="Chorus" description="Put the highlighted words in order within each line. Click two words to swap them, or drag one word onto another. The repeated phrase stays in sync. The italic note shows a change in the final chorus." lines={ripChorus.lines} /> },
          { label: "Verse 1", content: <LyricsWordActivity step="Activity 2" title="Verse 1" description="Click a gap, then click a verb to place it. Or click a verb to use the next available gap. There are four extra verbs." words={ripVerseOne.words} lyrics={ripVerseOne.lyrics} /> },
          { label: "Verse 2", content: <PartialWordLyricsActivity step="Activity 3" title="Verse 2" description="Type the missing letters to complete each word." lyrics={ripVerseTwo.lyrics} /> },
          { label: "Outro", content: <OrderLyricsActivity step="Activity 4" title="Outro" description="Put the lyric lines in order. Click two lines to swap them, or drag a line between the others to move it into place." items={ripOutro.items} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
            "The song says love is pain. Do you agree?",
            "Would it be easy to lose your partner?",
            "Are you afraid of living alone?",
            "What makes a relationship healthy?",
          ]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="Would you do anything for your partner? Why or why not?" songTitle={song.title} />
        </>}
      />
      </InlineWordOrderProvider>
    </main>
  );
}
