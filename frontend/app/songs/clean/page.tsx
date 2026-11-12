import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { cleanVocabulary, cleanIcons, cleanVerseOne, cleanChorus, cleanVerseTwo } from "@/data/songs/clean";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export const metadata = {
  title: "Clean - Hillsong UNITED | Music Your English",
  description: "Practice will and pronouns in a Beginner English lesson about forgiveness and faith.",
};

export default function CleanPage() {
  const song = getSongMeta("clean");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Are you religious?", "Do you like gospel music?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={cleanVocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "What is a covenant between God and people?",
              "Is it easy to forgive a friend?",
              "What is an example of a sin?",
              "Do you think prayers can purify your heart?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://www.youtube.com/embed/AVJa-9tSDKI" embedTitle="Clean by Hillsong UNITED on YouTube" />}
          listeningActivities={[
            { label: "Verse 1", content: <IconLyricsActivity step="Activity 1" title="Verse 1" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap." icons={cleanIcons} lyrics={cleanVerseOne} /> },
            { label: "Chorus", content: <LyricsWordActivity step="Activity 2" title="Chorus" description="Click a gap, then click a word to place it. Or click a word to use the next available gap." {...cleanChorus} /> },
            { label: "Verse 2", content: <ChoiceLyricsActivity step="Activity 3" title="Verse 2" description="Click the option you hear in each lyric gap." lyrics={cleanVerseTwo} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "What does Jesus teach you?",
              "Is Jesus merciful?",
              "How do you clean your heart?",
              "Do gospel songs help you connect to Jesus?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="What can a person do to be a better person? How can Jesus help this person?" songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
