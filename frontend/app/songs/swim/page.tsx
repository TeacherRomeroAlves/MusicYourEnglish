import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import InlineWordOrderActivity from "@/components/activities/InlineWordOrderActivity/InlineWordOrderActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import MissingWordsActivity from "@/components/activities/MissingWordsActivity/MissingWordsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { swim, swimChorus, swimFinalStanzas, swimInitialStanzas, swimMiddleStanza } from "@/data/songs/swim";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";
import { InlineWordOrderProvider } from "@/hooks/useInlineWordOrder";

export default function SwimPage() {
  const song = getSongMeta("swim");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <InlineWordOrderProvider>
          <LessonSections
            beforeSong={(
              <>
                <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like K-pop?", "Do you know BTS?"]} />
                <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={swim.vocabulary} />
                <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Do you like to swim and dive?", "Can you name one stunning person?", "Do you get cold feet sometimes?", "Do you have drip?"]} />
              </>
            )}
            listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={swim.youtube.embedUrl} embedTitle={swim.youtube.title} />}
            listeningActivities={[
              { label: "Chorus", content: <InlineWordOrderActivity step="Activity 1" title="Chorus" description="Rearrange the highlighted words or sentence parts within each lyric line." lines={swimChorus.lines} /> },
              { label: "Verse 1 And Pre-Chorus", content: <IconLyricsActivity step="Activity 2" title="Verse 1 And Pre-Chorus" description="Click or drag each emoji into the correct lyric gap while you listen." icons={swimInitialStanzas.icons} lyrics={swimInitialStanzas.lyrics} /> },
              { label: "Verse 2 And Pre-Chorus", content: <LyricsWordActivity step="Activity 3" title="Verse 2 And Pre-Chorus" description="Click or drag each adjective into the correct lyric gap. There are no extra words." words={swimMiddleStanza.words} lyrics={swimMiddleStanza.lyrics} /> },
              { label: "Bridge", content: <MissingWordsActivity step="Activity 4" title="Bridge" description="Select the 3 words shown inside the lyrics that are NOT actually sung." lyrics={swimFinalStanzas.lyrics} maximumSelections={3} /> },
            ]}
            checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
            afterSong={(
              <>
                <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Does the singer want to escape from a difficult world?", "What does swimming represent in the song?", "Do you like swimming in the sea?", "What helps you continue when life is difficult?"]} />
                <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="Are you a resilient person? Do you normally continue swimming in your life, or do you sometimes stop?" songTitle="Swim" />
              </>
            )}
          />
        </InlineWordOrderProvider>
      </IconLyricsProvider>
    </main>
  );
}
