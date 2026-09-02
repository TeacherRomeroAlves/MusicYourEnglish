import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { gossip, gossipChorus, gossipLaterStanzas, gossipOpeningStanzas } from "@/data/songs/gossip";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export default function GossipPage() {
  const song = getSongMeta("gossip");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={(
            <>
              <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you follow European music?", "Do you know Måneskin?"]} />
              <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={gossip.vocabulary} />
              <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Do you like gossip?", "Can you name one iconic person?", "How is your throat today?", "Do people sometimes hide problems under the rug?"]} />
            </>
          )}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={gossip.youtube.embedUrl} embedTitle={gossip.youtube.title} />}
          listeningActivities={[
            { label: "Verse 1 And Pre-Chorus", content: <IconLyricsActivity step="Activity 1" title="Verse 1 And Pre-Chorus" description="Click or drag each emoji into the correct lyric gap while you listen." icons={gossipOpeningStanzas.icons} lyrics={gossipOpeningStanzas.lyrics} /> },
            { label: "Chorus", content: <UnscrambleLyricsActivity step="Activity 2" title="Chorus" description="Unscramble the letters shown in each gap and type the correct word." lyrics={gossipChorus.lyrics} /> },
            { label: "Verse 2 And Pre-Chorus", content: <IconLyricsActivity step="Activity 3" title="Verse 2 And Pre-Chorus" description="Click or drag each emoji into the correct lyric gap. The repeated answers are synchronized with the first activity." icons={gossipLaterStanzas.icons} lyrics={gossipLaterStanzas.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={(
            <>
              <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["What does the song say about famous people?", "Can gossip hurt people? How?", "Do people sometimes pretend to be happy?", "Is being famous always good?"]} />
              <HomeworkActivity step="Homework" title="Writing And Student Report" description="Write or record your answer, then save your work." prompt="Is gossip a problem? Explain how gossip can hurt people and what we can do to stop it." songTitle="GOSSIP" />
            </>
          )}
        />
      </IconLyricsProvider>
    </main>
  );
}
