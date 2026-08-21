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
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { ordinary, ordinaryChorus, ordinaryFirstStanza, ordinaryFourthStanza, ordinaryThirdStanza } from "@/data/songs/ordinary";

export default function OrdinaryPage() {
  const song = getSongMeta("ordinary");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <LessonSections
        beforeSong={(
          <>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Alex Warren?", "What kind of pop music do you like?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Match each word or expression with its meaning. Click one to use the next box, or drag it to a specific box. Use the speaker button to hear it." words={ordinary.vocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Can you name something ordinary or mundane in your routine?", "Are you jealous sometimes?", "Are you running out of anything at the moment?", "What gives you a feeling of ecstasy?"]} />
          </>
        )}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={ordinary.youtube.embedUrl} embedTitle={ordinary.youtube.title} />}
        listeningActivities={[
          { label: "First Stanza", content: <IconLyricsActivity step="Stanza 1" title="First Stanza" description="Click or drag each emoji into the correct lyric gap while you listen." icons={ordinaryFirstStanza.icons} lyrics={ordinaryFirstStanza.lyrics} /> },
          { label: "Chorus", content: <TypingLyricsActivity step="Stanza 2" title="Chorus" description="Type the correct form of each word. Use the base forms in the chart to help you." wordBank={ordinaryChorus.wordBank} lyrics={ordinaryChorus.lyrics} /> },
          { label: "Third Stanza", content: <ChoiceLyricsActivity step="Stanza 3" title="Third Stanza" description="Choose the correct option inside the lyrics while you listen." lyrics={ordinaryThirdStanza.lyrics} /> },
          { label: "Fourth Stanza", content: <ChoiceLyricsActivity step="Stanza 4" title="Fourth Stanza" description="Select the correct two-letter word in each line while you listen." lyrics={ordinaryFourthStanza.lyrics} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={(
          <>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Is the singer in love?", "Do you understand what he is feeling?", "What makes an ordinary day feel special?", "Can love change the way we see the world?"]} />
            <HomeworkActivity step="Homework" title="Writing And Student Report" description="Write or record your answer, then save your work." prompt="Do you have someone who takes you out of the ordinary? Is it easy to find a person like that?" songTitle="Ordinary" />
          </>
        )}
      />
    </main>
  );
}
