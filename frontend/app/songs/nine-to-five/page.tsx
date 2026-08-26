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
import PartialWordLyricsActivity from "@/components/activities/PartialWordLyricsActivity/PartialWordLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { nineToFive, nineToFiveFirstChorus, nineToFiveFirstStanza, nineToFiveSecondChorus, nineToFiveThirdStanza } from "@/data/songs/nineToFive";
import { ChoiceLyricsProvider } from "@/hooks/useChoiceLyrics";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";
import { PartialWordLyricsProvider } from "@/hooks/usePartialWordLyrics";

export default function NineToFivePage() {
  const song = getSongMeta("nine-to-five");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <ChoiceLyricsProvider>
        <IconLyricsProvider>
          <PartialWordLyricsProvider>
            <LessonSections
              beforeSong={(
                <>
                  <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like country music?", "Do you know Dolly Parton?"]} />
                  <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={nineToFive.vocabulary} />
                  <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Who drives you crazy?", "What time do you work?", "When do you yawn?", "What helps someone climb the ladder at work?"]} />
                </>
              )}
              listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={nineToFive.youtube.embedUrl} embedTitle={nineToFive.youtube.title} />}
              listeningActivities={[
                { label: "First Stanza", content: <ChoiceLyricsActivity step="Stanza 1" title="First Stanza" description="Select the preposition you hear in the song." lyrics={nineToFiveFirstStanza.lyrics} /> },
                { label: "First Chorus", content: <PartialWordLyricsActivity step="Stanza 2" title="First Chorus" description="Type the missing letters to complete each word while you listen." lyrics={nineToFiveFirstChorus.lyrics} /> },
                { label: "Third Stanza", content: <IconLyricsActivity step="Stanza 3" title="Third Stanza" description="Click or drag each emoji into the correct lyric gap while you listen." icons={nineToFiveThirdStanza.icons} lyrics={nineToFiveThirdStanza.lyrics} /> },
                { label: "Second Chorus", content: <PartialWordLyricsActivity step="Stanza 4" title="Second Chorus" description="Type the missing letters to complete each word while you listen." lyrics={nineToFiveSecondChorus.lyrics} /> },
              ]}
              checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
              afterSong={(
                <>
                  <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Is your boss out to get you sometimes?", "Is it easy to work from 9 to 5?", "Do you want a promotion at work?", "What can make a job better?"]} />
                  <HomeworkActivity step="Homework" title="Writing And Student Report" description="Write or record your answer, then save your work." prompt="Do you like your job? Why or why not? Do you work a lot? Is your routine easy?" songTitle="9 to 5" />
                </>
              )}
            />
          </PartialWordLyricsProvider>
        </IconLyricsProvider>
      </ChoiceLyricsProvider>
    </main>
  );
}
