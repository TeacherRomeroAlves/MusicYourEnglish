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
import TypingLyricsActivity from "@/components/activities/TypingLyricsActivity/TypingLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import {
  waitingForLove,
  waitingForLoveChorus,
  waitingForLoveFirstStanzas,
  waitingForLoveFourthStanza,
} from "@/data/songs/waitingForLove";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export default function WaitingForLovePage() {
  const song = getSongMeta("waiting-for-love");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={(
            <>
              <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Avicii?", "Do you like electronic dance music?"]} />
              <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Match each word or expression with its meaning. Click one to use the next box, or drag it to a specific box. Use the speaker button to hear it." words={waitingForLove.vocabulary} />
              <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Tell me something or someone that is irreplaceable in your life.", "Do you believe in miracles?", "Can you name the days of the week?", "Is there an obstacle in your life right now?"]} />
            </>
          )}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={waitingForLove.youtube.embedUrl} embedTitle={waitingForLove.youtube.title} />}
          listeningActivities={[
            { label: "Verse 1 And Pre-Chorus", content: <TypingLyricsActivity step="Activity 1" title="Verse 1 And Pre-Chorus" description="Type the correct form of the verbs be or have. Use the chart to help you." wordBank={waitingForLoveFirstStanzas.wordBank} wordBankLabel="Verbs" lyrics={waitingForLoveFirstStanzas.lyrics} /> },
            { label: "Chorus", content: <LyricsWordActivity step="Activity 2" title="Chorus" description="Click a day to use the next gap, or drag it to a specific gap while you listen." words={waitingForLoveChorus.words} lyrics={waitingForLoveChorus.lyrics} /> },
            { label: "Verse 2", content: <IconLyricsActivity step="Activity 3" title="Verse 2" description="Click or drag each emoji into the correct lyric gap while you listen." icons={waitingForLoveFourthStanza.icons} lyrics={waitingForLoveFourthStanza.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={(
            <>
              <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Is the singer happy in the song? Why or why not?", "Are you waiting for love in your life?", "Does the singer still believe in love?", "Which day of the week feels best to you? Why?"]} />
              <HomeworkActivity step="Homework" title="Writing And Student Report" description="Write or record your answer, then save your work." prompt="Is love important in your life? Why or why not?" songTitle="Waiting For Love" />
            </>
          )}
        />
      </IconLyricsProvider>
    </main>
  );
}
