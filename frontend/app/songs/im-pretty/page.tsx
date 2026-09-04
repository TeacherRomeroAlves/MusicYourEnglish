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
import { imPretty, imPrettyChorus, imPrettyFifthStanza, imPrettyFirstStanza } from "@/data/songs/imPretty";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export default function ImPrettyPage() {
  const song = getSongMeta("im-pretty");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={(
            <>
              <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like KATSEYE?", "Are they the future of pop music?"]} />
              <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Match each word or expression with its meaning. Click one to use the next box, or drag it to a specific box. Use the speaker button to hear it." words={imPretty.vocabulary} />
              <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Do you wear makeup? Do you use a brush?", "Can you name one pretty person?", "Tell me something you are pretty sure about.", "Do you have abilities you like to show off?"]} />
            </>
          )}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={imPretty.youtube.embedUrl} embedTitle={imPretty.youtube.title} />}
          listeningActivities={[
            { label: "Verse 1 And Pre-Chorus", content: <IconLyricsActivity step="Activity 1" title="Verse 1 And Pre-Chorus" description="Click or drag each emoji into the correct lyric gap while you listen." icons={imPrettyFirstStanza.icons} lyrics={imPrettyFirstStanza.lyrics} /> },
            { label: "Chorus", content: <LyricsWordActivity step="Activity 2" title="Chorus" description="Click a word to use the next gap, or drag it to a specific gap. Some words are extra." words={imPrettyChorus.words} lyrics={imPrettyChorus.lyrics} /> },
            { label: "Verse 2 And Pre-Chorus", content: <IconLyricsActivity step="Activity 3" title="Verse 2 And Pre-Chorus" description="Click or drag each emoji into the correct lyric gap. The repeated answers are synchronized with Activity 1." icons={imPrettyFifthStanza.icons} lyrics={imPrettyFifthStanza.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={(
            <>
              <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Do you get sad sometimes? Do you put on a front or not?", "Do you think you are pretty?", "Is it easy to finish a relationship?", "What helps you feel better after heartbreak?"]} />
              <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="Is it important to feel pretty? Why or why not?" songTitle="I'm Pretty" />
            </>
          )}
        />
      </IconLyricsProvider>
    </main>
  );
}
