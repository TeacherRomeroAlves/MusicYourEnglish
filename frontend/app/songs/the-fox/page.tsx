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
import { theFoxVocabulary, theFoxIcons, theFoxVerseOne, theFoxVerseTwo, theFoxVerseThree } from "@/data/songs/theFox";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

import { getSongMetadata } from "@/lib/songMetadata";

export const metadata = getSongMetadata("the-fox");

export default function TheFoxPage() {
  const song = getSongMeta("the-fox");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know this song?", "Do you like funny songs?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={theFoxVocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "Can you imitate any animals?",
              "Do you like to walk in the woods?",
              "Which animals are tiny? Do they have fur?",
              "If you see a mouse, will you run or stand still?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://open.spotify.com/embed/track/5HOpkTTVcmZHnthgyxrIL8" embedTitle="The Fox by Ylvis on Spotify" />}
          listeningActivities={[
            { label: "Verse 1 and Chorus", content: <IconLyricsActivity step="Activity 1" title="Verse 1 and Chorus" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap." icons={theFoxIcons} lyrics={theFoxVerseOne} /> },
            { label: "Verse 2 and Chorus", content: <LyricsWordActivity step="Activity 2" title="Verse 2 and Chorus" description="Click a gap, then click an adjective to place it. Or click an adjective to use the next available gap." {...theFoxVerseTwo} /> },
            { label: "Verse 3", content: <ChoiceLyricsActivity step="Activity 3" title="Verse 3" description="Will, want, or what? Click the option you hear in each lyric gap." lyrics={theFoxVerseThree} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "What does the bird say? What about the fox?",
              "Which animals are in the song?",
              "Is this a serious song?",
              "Is this a good song?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="Do you have a favorite animal? Can you describe it?" songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
