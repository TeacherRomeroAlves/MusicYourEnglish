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
import { billionaire, billionaireChorus, billionaireSixthStanza, billionaireThirdStanza } from "@/data/songs/billionaire";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export default function BillionairePage() {
  const song = getSongMeta("billionaire");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={(
            <>
              <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like Bruno Mars?", "Do you know Travie McCoy?"]} />
              <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={billionaire.vocabulary} />
              <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["What does FEMA do after a disaster?", "What would you ask Santa Claus for?", "Would you like to appear in Forbes? Why or why not?", "What new activity would you like to take a crack at?"]} />
            </>
          )}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={billionaire.youtube.embedUrl} embedTitle={billionaire.youtube.title} />}
          listeningActivities={[
            { label: "Chorus", content: <IconLyricsActivity step="Activity 1" title="Chorus" description="Click or drag each emoji into the correct lyric gap while you listen." icons={billionaireChorus.icons} lyrics={billionaireChorus.lyrics} /> },
            { label: "Verse 1", content: <LyricsWordActivity step="Activity 2" title="Verse 1" description="Click a word to use the next gap, or drag it to a specific gap. Some words are extra." words={billionaireThirdStanza.words} lyrics={billionaireThirdStanza.lyrics} /> },
            { label: "Verse 2", content: <ChoiceLyricsActivity step="Activity 3" title="Verse 2" description="Select the word or expression you hear in each line." lyrics={billionaireSixthStanza.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={(
            <>
              <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Does the singer only want money for himself?", "What would you buy if you were a billionaire?", "Who would you help if you had a lot of money?", "Can money make people happy? Why or why not?"]} />
              <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="What would you do if you were a billionaire? Explain what you would buy and how you would help other people." songTitle="Billionaire" />
            </>
          )}
        />
      </IconLyricsProvider>
    </main>
  );
}
