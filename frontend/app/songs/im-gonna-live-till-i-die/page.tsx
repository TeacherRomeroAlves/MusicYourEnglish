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
import { liveTillIDieVocabulary, liveTillIDieOpening, liveTillIDieIcons, liveTillIDieLaterVerses } from "@/data/songs/imGonnaLiveTillIDie";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";
import { getSongMetadata } from "@/lib/songMetadata";

export const metadata = getSongMetadata("im-gonna-live-till-i-die");

export default function ImGonnaLiveTillIDiePage() {
  const song = getSongMeta("im-gonna-live-till-i-die");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Frank Sinatra?", "Do you like Jazz?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={liveTillIDieVocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "Do you believe in devils and angels?",
              "Do you have any flings at the moment?",
              "Are you feeling blue today?",
              "In your life, do you ride high or lay low?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://open.spotify.com/embed/track/2fhMMMA2Ea9MjGYW2sOue3" embedTitle="I'm Gonna Live Till I Die by Frank Sinatra on Spotify" />}
          listeningActivities={[
            { label: "Verses 1 and 2", content: <LyricsWordActivity step="Activity 1" title="Verses 1 and 2" description="Click a gap, then click a verb to place it. Or click a verb to use the next available gap." {...liveTillIDieOpening} /> },
            { label: "Verses 3 and 4", content: <IconLyricsActivity step="Activity 2" title="Verses 3 and 4" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap." icons={liveTillIDieIcons} lyrics={liveTillIDieLaterVerses} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "Does the singer enjoy life?",
              "Are you similar to the singer?",
              "Do you like to drink and dance?",
              "Can you manage your feelings when you feel blue?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="Is it important to enjoy life? How do you balance responsibilities and fun?" songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
