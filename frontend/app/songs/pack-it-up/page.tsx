import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import OrderLyricsActivity from "@/components/activities/OrderLyricsActivity/OrderLyricsActivity";
import { packItUpVocabulary, packItUpVerseOne, packItUpChorus, packItUpIcons, packItUpVerseTwo, packItUpOutro } from "@/data/songs/packItUp";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

import { getSongMetadata } from "@/lib/songMetadata";

export const metadata = getSongMetadata("pack-it-up");

export default function PackItUpPage() {
  const song = getSongMeta("pack-it-up");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know The Hails?", "Do you like alternative rock?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={packItUpVocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "Can you name a famous martyr in history?",
              "What's your favorite tune?",
              "What food do you have to chew a lot?",
              "Are there bare walls in your living room?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://www.youtube.com/embed/KK_ZJSEWADw" embedTitle="Pack It Up by The Hails on YouTube" />}
          listeningActivities={[
            { label: "Verse 1", content: <ChoiceLyricsActivity step="Activity 1" title="Verse 1" description="Affirmative or negative? Click the verb form you hear in each lyric gap." lyrics={packItUpVerseOne} /> },
            { label: "Chorus", content: <OrderLyricsActivity step="Activity 2" title="Chorus" description="Put the lyric lines in order. Click two lines to swap them, or drag a line between the others to move it into place." items={packItUpChorus} /> },
            { label: "Verse 2", content: <IconLyricsActivity step="Activity 3" title="Verse 2" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap." icons={packItUpIcons} lyrics={packItUpVerseTwo} /> },
            { label: "Verse 3 and Outro", content: <ChoiceLyricsActivity step="Activity 4" title="Verse 3 and Outro" description="Click the option you hear in each lyric gap." lyrics={packItUpOutro} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "Did you like the song?",
              "Is the singer happy?",
              "What does the singer say he is not?",
              "Does the singer want to help the other person?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="Do you like your personality? Can you describe it?" songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
