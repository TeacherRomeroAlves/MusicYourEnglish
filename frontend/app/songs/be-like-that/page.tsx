import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import OrderLyricsActivity from "@/components/activities/OrderLyricsActivity/OrderLyricsActivity";
import { beLikeThatVocabulary, beLikeThatVerseOne, beLikeThatChorus, beLikeThatVerseTwo } from "@/data/songs/beLikeThat";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export const metadata = {
  title: "Be Like That - 3 Doors Down | Music Your English",
  description: "Practice conditionals, would, and adjectives in this Pre-intermediate English lesson.",
};

export default function BeLikeThatPage() {
  const song = getSongMeta("be-like-that");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like rock from the 2000s?", "Do you know 3 Doors Down?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={beLikeThatVocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "Do you wonder about life sometimes?",
              "Is it easy to put yourself in someone else's shoes?",
              "Would you rather live in a small town or a big city?",
              "What do you hold onto in difficult moments?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://www.youtube.com/embed/HHpMtWtgUvc" embedTitle="Be Like That by 3 Doors Down on YouTube" />}
          listeningActivities={[
            { label: "Verse 1", content: <LyricsWordActivity step="Activity 1" title="Verse 1" description="Click a gap, then click a verb to place it. Or click a verb to use the next available gap. Three verbs are extra." {...beLikeThatVerseOne} /> },
            { label: "Chorus", content: <OrderLyricsActivity step="Activity 2" title="Chorus" description="Put the lyric lines in order. Click two lines to swap them, or drag a line between the others to move it into place. Either copy of the repeated line fits either matching spot." {...beLikeThatChorus} /> },
            { label: "Verse 2", content: <IconLyricsActivity step="Activity 3" title="Verse 2" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap." {...beLikeThatVerseTwo} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "Verses 1 and 2 describe two people. Are they similar to each other?",
              "Do you understand these people?",
              "Do people usually have big dreams?",
              "Do you have a good life? Why or why not?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="What's your dream? What would you do to make it come true?" songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
