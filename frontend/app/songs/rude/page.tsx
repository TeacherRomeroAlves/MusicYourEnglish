import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import InlineWordOrderActivity from "@/components/activities/InlineWordOrderActivity/InlineWordOrderActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import WordPresenceActivity from "@/components/activities/WordPresenceActivity/WordPresenceActivity";
import { getSongMeta } from "@/data/songCatalog";
import { rude, rudeChorus, rudeFirstStanza, rudeFourthStanza } from "@/data/songs/rude";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";
import { InlineWordOrderProvider } from "@/hooks/useInlineWordOrder";

export default function RudePage() {
  const song = getSongMeta("rude");

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
                <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like reggae?", "Do you know this song?"]} />
                <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={rude.vocabulary} />
                <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Are you old-fashioned?", "Has anyone been rude to you?", "Why might someone ask for a family's blessing?", "When might someone say 'tough luck'?"]} />
              </>
            )}
            listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={rude.youtube.embedUrl} embedTitle={rude.youtube.title} />}
            listeningActivities={[
              { label: "Verse 1", content: <IconLyricsActivity step="Activity 1" title="Verse 1" description="Click or drag each emoji into the correct lyric gap while you listen." icons={rudeFirstStanza.icons} lyrics={rudeFirstStanza.lyrics} /> },
              { label: "Chorus", content: <InlineWordOrderActivity step="Activity 2" title="Chorus" description="Rearrange the highlighted words or sentence parts within each lyric line." lines={rudeChorus.lines} /> },
              { label: "Verse 2", content: <WordPresenceActivity step="Activity 3" title="Verse 2" description="Activate a preposition only where it is actually sung. Select 3 words." lyrics={rudeFourthStanza.lyrics} maximumSelections={3} /> },
            ]}
            checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
            afterSong={(
              <>
                <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Who is the singer talking to?", "Is it necessary to ask someone's family for permission to get married?", "Why does the father say no?", "What does the singer decide to do anyway?"]} />
                <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="Are you married? If yes, describe the proposal. If not, how do you imagine a marriage proposal?" songTitle="Rude" />
              </>
            )}
          />
        </InlineWordOrderProvider>
      </IconLyricsProvider>
    </main>
  );
}
