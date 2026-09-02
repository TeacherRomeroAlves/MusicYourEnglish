import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import InlineWordOrderActivity from "@/components/activities/InlineWordOrderActivity/InlineWordOrderActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import TypingLyricsActivity from "@/components/activities/TypingLyricsActivity/TypingLyricsActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import {
  heroOfWar,
  heroOfWarChorus,
  heroOfWarFifthStanza,
  heroOfWarFinalChorus,
  heroOfWarFirstStanza,
  heroOfWarThirdStanza,
} from "@/data/songs/heroOfWar";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";
import { InlineWordOrderProvider } from "@/hooks/useInlineWordOrder";

export default function HeroOfWarPage() {
  const song = getSongMeta("hero-of-war");

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
              <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Have you heard of Rise Against before?", "Can music be political?"]} />
              <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Match each word or expression with its meaning. Click one to use the next box, or drag it to a specific box. Use the speaker button to hear it." words={heroOfWar.vocabulary} />
              <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Can you name one hero?", "Describe the flag of your country.", "Are there any wars happening at the moment?", "Do you yell at other people sometimes?"]} />
            </>
          )}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={heroOfWar.youtube.embedUrl} embedTitle={heroOfWar.youtube.title} />}
          listeningActivities={[
            { label: "Verse 1", content: <IconLyricsActivity step="Activity 1" title="Verse 1" description="Click or drag each emoji into the correct lyric gap while you listen." icons={heroOfWarFirstStanza.icons} lyrics={heroOfWarFirstStanza.lyrics} /> },
            { label: "Chorus", content: <UnscrambleLyricsActivity step="Activity 2" title="Chorus" description="Unscramble the letters shown in each gap and type the correct word." lyrics={heroOfWarChorus.lyrics} /> },
            { label: "Verse 2", content: <TypingLyricsActivity step="Activity 3" title="Verse 2" description="Type the correct past form of each verb. Use the base forms in the chart to help you. One verb is used twice." wordBank={heroOfWarThirdStanza.wordBank} wordBankLabel="Verbs in their base form" lyrics={heroOfWarThirdStanza.lyrics} /> },
            { label: "Verse 3", content: <ChoiceLyricsActivity step="Activity 4" title="Verse 3" description="Select the pronoun or adjective form you hear in the song." lyrics={heroOfWarFifthStanza.lyrics} /> },
            { label: "Final Chorus", content: <InlineWordOrderActivity step="Activity 5" title="Final Chorus" description="Rearrange the highlighted words or sentence parts within each lyric line." lines={heroOfWarFinalChorus.lines} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={(
            <>
              <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["What was the singer's occupation in this song?", "Is it a shocking song? Why or why not?", "How do you see heroes of war?", "Why does the soldier change his idea of being a hero?", "Can people follow orders and still be responsible for their actions?", "What does the white flag mean at the end of the song?"]} />
              <HomeworkActivity step="Homework" title="Writing And Student Report" description="Write or record your answer, then save your work." prompt="What is your opinion about wars? Are there real heroes in a war? Who decides that?" songTitle="Hero of War" />
            </>
          )}
          />
        </InlineWordOrderProvider>
      </IconLyricsProvider>
    </main>
  );
}
