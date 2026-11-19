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
import TypingLyricsActivity from "@/components/activities/TypingLyricsActivity/TypingLyricsActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { maybeVocabulary, maybeIcons, maybeVerseOne, maybeChorus, maybeVerseTwo, maybeOutro } from "@/data/songs/maybe";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";
import { getSongMetadata } from "@/lib/songMetadata";

export const metadata = getSongMetadata("maybe");

export default function MaybePage() {
  const song = getSongMeta("maybe");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Machine Gun Kelly (MGK)?", "Do you like rock music?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={maybeVocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "What might you do tonight?",
              "Is there anything you regret in life?",
              "Is it easy for you to make up your mind?",
              "What can help put us out of our misery?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://www.youtube.com/embed/9xht4JIOfjU" embedTitle="Maybe by MGK ft. Bring Me The Horizon on YouTube" />}
          listeningActivities={[
            { label: "Verse 1", content: <IconLyricsActivity step="Activity 1" title="Verse 1" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap." icons={maybeIcons} lyrics={maybeVerseOne} /> },
            { label: "Chorus", content: <UnscrambleLyricsActivity step="Activity 2" title="Chorus" description="Unscramble the letters shown in each gap and type the correct word." lyrics={maybeChorus} /> },
            { label: "Verse 2", content: <TypingLyricsActivity step="Activity 3" title="Verse 2" description="Type the missing verbs directly into the lyrics." lyrics={maybeVerseTwo} /> },
            { label: "Outro", content: <ChoiceLyricsActivity step="Activity 4" title="Outro" description="Select the word you hear in the song. Tip: these options sound alike, so use the meaning and grammar to help you choose." lyrics={maybeOutro} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "Who is the singer singing to? Is he happy?",
              "Has he decided anything?",
              "Does he seem to regret any decisions he made?",
              "Do you think everyone can be fixed?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="Some relationships are as toxic as drinking. What can we do about them?" songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
