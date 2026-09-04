import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import InlineWordOrderActivity from "@/components/activities/InlineWordOrderActivity/InlineWordOrderActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import {
  badLife,
  badLifeFirstChorus,
  badLifeFullChorus,
  badLifeLaterUnscramble,
  badLifeOpeningStanzas,
} from "@/data/songs/badLife";
import { InlineWordOrderProvider } from "@/hooks/useInlineWordOrder";

export default function BadLifePage() {
  const song = getSongMeta("bad-life");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero
        title={song.title}
        artist={song.artist}
        description={song.description}
        level={song.level}
        topic={song.topic}
        coverImage={song.coverImage}
        coverClass={song.coverClass}
      />
      <LessonProgress />
      <InlineWordOrderProvider>
        <LessonSections
          beforeSong={(
            <>
              <WarmUpQuestions
                step="Warm-up"
                title="Warm-up Questions"
                questions={[
                  "Do you know Bring Me the Horizon or Sigrid?",
                  "Do you like rock? Why or why not?",
                ]}
              />
              <MatchingActivity
                step="Vocabulary"
                title="Match The Words To Their Meanings"
                words={badLife.vocabulary}
              />
              <WarmUpQuestions
                step="Vocabulary practice"
                title="Use The New Words"
                description="Discuss the questions and try to use the new vocabulary."
                layout="two-column"
                questions={[
                  "What makes someone be considered a loser in life?",
                  "Have you ever felt numb or on the edge?",
                  "How do you keep your head above water when things fall apart?",
                  "What responsibilities do you bear on your shoulders?",
                ]}
              />
            </>
          )}
          listeningIntro={(
            <ListeningActivity
              step="Listen"
              title="Listen To The Song"
              description="Listen to the song before starting the lyrics activities."
              embedUrl={badLife.youtube.embedUrl}
              embedTitle={badLife.youtube.title}
            />
          )}
          listeningActivities={[
            {
              label: "Verse 1 And Pre-Chorus",
              content: (
                <LyricsWordActivity
                  step="Activity 1"
                  title="Verse 1 And Pre-Chorus"
                  description="Place each word in the correct gap. Click a word to use the next gap, or drag it to a specific gap."
                  words={badLifeOpeningStanzas.words}
                  lyrics={badLifeOpeningStanzas.lyrics}
                />
              ),
            },
            {
              label: "Chorus",
              content: (
                <InlineWordOrderActivity
                  step="Activity 2"
                  title="Chorus"
                  description="The highlighted parts are scrambled. Drag one word onto another to swap them, or click two words to swap their positions."
                  lines={badLifeFirstChorus.lines}
                />
              ),
            },
            {
              label: "Verse 2 And Pre-Chorus",
              content: (
                <UnscrambleLyricsActivity
                  step="Activity 3"
                  title="Verse 2 And Pre-Chorus"
                  description="Unscramble the letters and type the correct adjective or adverb in each gap."
                  lyrics={badLifeLaterUnscramble.lyrics}
                />
              ),
            },
            {
              label: "Final Chorus",
              content: (
                <InlineWordOrderActivity
                  step="Activity 4"
                  title="Final Chorus"
                  description="Reorder the scrambled parts. Your answers from the first chorus are already synchronized here."
                  lines={badLifeFullChorus.lines}
                />
              ),
            },
          ]}
          checkAnswers={(
            <CheckAllActivity
              title="Check All Answers"
              description="When you finish the song activities, check all your answers at once."
            />
          )}
          afterSong={(
            <>
              <WarmUpQuestions
                step="Wrap-up"
                title="Talk About The Song"
                description="Discuss these questions after listening to the song."
                layout="two-column"
                questions={[
                  "What is the main message of the song?",
                  "What helps you recover from a bad day?",
                  "Why do people sometimes hide difficult feelings?",
                  "Who supports you when you feel on the edge?",
                ]}
              />
              <HomeworkActivity
                step="Homework"
                title="Express Yourself"
                description="Answer the prompt in writing or record yourself speaking."
                prompt="Does a bad day mean a bad life? What can we do to stop one bad day from affecting the following days or weeks?"
                songTitle="Bad Life"
              />
            </>
          )}
        />
      </InlineWordOrderProvider>
    </main>
  );
}
