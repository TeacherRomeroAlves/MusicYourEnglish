import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import OrderLyricsActivity from "@/components/activities/OrderLyricsActivity/OrderLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import WordPresenceActivity from "@/components/activities/WordPresenceActivity/WordPresenceActivity";
import { getSongMeta } from "@/data/songCatalog";
import {
  happy,
  happyChorus,
  happyOpening,
  happyRelativeClauses,
  happyWordPresence,
} from "@/data/songs/happy";

export default function HappyPage() {
  const song = getSongMeta("happy");

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
                "Do you like rap?",
                "Have you heard of NF before?",
              ]}
            />
            <MatchingActivity
              step="Vocabulary"
              title="Match The Words To Their Meanings"
              description="Match each expression with its meaning. Click an expression to use the next box, or drag it to a specific box. Use the speaker button to hear it."
              words={happy.vocabulary}
            />
            <WarmUpQuestions
              step="Vocabulary practice"
              title="Use The New Words"
              description="Discuss the questions and try to use the new vocabulary."
              layout="two-column"
              questions={[
                "Are you in a hole right now? Why or why not?",
                "What do you like to soak up?",
                "Who reaches out to you when you are in agony?",
                "Are there any bridges you need to burn in your life?",
              ]}
            />
          </>
        )}
        listeningIntro={(
          <ListeningActivity
            step="Listen"
            title="Listen To The Song"
            description="Listen to the song before starting the lyrics activities."
            embedUrl={happy.youtube.embedUrl}
            embedTitle={happy.youtube.title}
          />
        )}
        listeningActivities={[
          {
            label: "Initial Stanzas",
            content: (
              <LyricsWordActivity
                step="Stanza 1"
                title="Initial Stanzas"
                description="Place the correct four-letter words in the gaps. Click a word to use the next gap, or drag it to a specific gap. Some words are extra."
                words={happyOpening.words}
                lyrics={happyOpening.lyrics}
              />
            ),
          },
          {
            label: "Chorus And Post-Chorus",
            content: (
              <OrderLyricsActivity
                step="Stanza 2"
                title="Chorus And Post-Chorus"
                description="Click the lines in the order you hear them. The final three post-chorus lines only appear after the chorus is repeated for the second time."
                items={happyChorus.items}
              />
            ),
          },
          {
            label: "Third Stanza",
            content: (
              <LyricsWordActivity
                step="Stanza 3"
                title="Third Stanza"
                description="Select the relative clause that completes each noun. Click a clause to use the next gap, or drag it to a specific gap."
                words={happyRelativeClauses.words}
                lyrics={happyRelativeClauses.lyrics}
              />
            ),
          },
          {
            label: "Fourth Stanza",
            content: (
              <WordPresenceActivity
                step="Stanza 4"
                title="Fourth Stanza"
                description="Activate the two 'that' buttons only where you actually hear the word in the song."
                lyrics={happyWordPresence.lyrics}
                maximumSelections={2}
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
                "Do you think the singer is happy? Why or why not?",
                "Why can asking for help be difficult?",
                "What can help someone get out of an emotional hole?",
                "Who can you reach out to when life feels painful?",
              ]}
            />
            <HomeworkActivity
              step="Homework"
              title="Writing And Student Report"
              description="Write or record your answer, then save your work."
              prompt="Are you happy in life? Why or why not? What can you do to be even happier? Is it easy?"
              songTitle="Happy"
            />
          </>
        )}
      />
    </main>
  );
}
