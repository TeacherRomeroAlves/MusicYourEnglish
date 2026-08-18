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
import OrderLyricsActivity from "@/components/activities/OrderLyricsActivity/OrderLyricsActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import {
  opheliaChorus,
  opheliaFifthStanza,
  opheliaFirstStanza,
  opheliaFourthStanza,
  opheliaPreChorus,
  theFateOfOphelia,
} from "@/data/songs/theFateOfOphelia";

export default function TheFateOfOpheliaPage() {
  const song = getSongMeta("the-fate-of-ophelia");

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
      <LessonSections
        beforeSong={(
          <>
            <WarmUpQuestions
              step="Warm-up"
              title="Warm-up Questions"
              questions={[
                "Is Taylor Swift famous?",
                "What is her best song?",
              ]}
            />
            <MatchingActivity
              step="Vocabulary"
              title="Match The Words To Their Meanings"
              description="Match each word with its meaning. Use the speaker button to hear the pronunciation."
              words={theFateOfOphelia.vocabulary}
            />
            <WarmUpQuestions
              step="Vocabulary practice"
              title="Use The New Words"
              description="Discuss the questions and try to use the new vocabulary."
              layout="two-column"
              questions={[
                "Can you name a venomous animal?",
                "What skill would you like to hone?",
                "Why might someone pledge allegiance to a country or a team?",
                "Why can a memory linger for a long time?",
              ]}
            />
          </>
        )}
        listeningIntro={(
          <ListeningActivity
            step="Listen"
            title="Listen To The Song"
            description="Listen to the song before starting the lyrics activities."
            embedUrl={theFateOfOphelia.youtube.embedUrl}
            embedTitle={theFateOfOphelia.youtube.title}
          />
        )}
        listeningActivities={[
          {
            label: "First Stanza",
            content: (
              <ChoiceLyricsActivity
                step="Stanza 1"
                title="First Stanza"
                description="Click on the two-letter word you hear."
                lyrics={opheliaFirstStanza.lyrics}
              />
            ),
          },
          {
            label: "Pre-Chorus",
            content: (
              <IconLyricsActivity
                step="Stanza 2"
                title="Pre-Chorus"
                description="Click an emoji to place it in the next space, or drag it into a space. This section repeats later in the song."
                icons={opheliaPreChorus.icons}
                lyrics={opheliaPreChorus.lyrics}
              />
            ),
          },
          {
            label: "Chorus",
            content: (
              <OrderLyricsActivity
                step="Stanza 3"
                title="Chorus"
                description="Click the lines in the correct order. This chorus repeats later in the song."
                items={opheliaChorus.items}
              />
            ),
          },
          {
            label: "Fourth Stanza",
            content: (
              <ChoiceLyricsActivity
                step="Stanza 4"
                title="Fourth Stanza"
                description="Choose the correct verb form according to the song."
                lyrics={opheliaFourthStanza.lyrics}
              />
            ),
          },
          {
            label: "Fifth Stanza",
            content: (
              <UnscrambleLyricsActivity
                step="Stanza 5"
                title="Fifth Stanza"
                description="Unscramble the letters shown in each space and type the correct word."
                lyrics={opheliaFifthStanza.lyrics}
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
            <aside className="cultural-note" aria-labelledby="ophelia-cultural-note">
              <p className="section-kicker">Cultural note</p>
              <h2 id="ophelia-cultural-note">Ophelia in Shakespeare&apos;s Hamlet</h2>
              <p>Ophelia is a young woman in William Shakespeare&apos;s play Hamlet. She is Polonius&apos;s daughter and has a difficult relationship with Prince Hamlet. Her story ends tragically when she drowns, so she is often connected with love, sadness, and loss.</p>
            </aside>
            <WarmUpQuestions
              step="Wrap-up"
              title="Talk About The Song"
              description="Discuss these questions after listening to the song."
              layout="two-column"
              questions={[
                "How does the song connect love and fate?",
                "Can love change a person's life? How?",
                "Why does the singer compare love to fire, a crown, and a vine?",
                "Is the singer saved by another person, or does she also save herself?",
              ]}
            />
            <HomeworkActivity
              step="Homework"
              title="Writing And Student Report"
              description="Write your answer, then save or share your one-page report."
              prompt="Can one person save another person's heart from loneliness? Is this fate or hard work? Explain your opinion."
              songTitle="The Fate of Ophelia"
            />
          </>
        )}
      />
    </main>
  );
}
