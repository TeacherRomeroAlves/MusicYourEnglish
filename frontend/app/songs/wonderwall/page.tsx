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
import OrderLyricsActivity from "@/components/activities/OrderLyricsActivity/OrderLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import {
  wonderwall,
  wonderwallFirstStanza,
  wonderwallPreChorus,
  wonderwallSecondStanza,
} from "@/data/songs/wonderwall";

export default function WonderwallPage() {
  const song = getSongMeta("wonderwall");

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
              questions={["Do you like Oasis?", "Have you heard this song before?"]}
            />
            <MatchingActivity
              step="Vocabulary"
              title="Match The Words To Their Meanings"
              description="Match each word with its meaning. Use the speaker button to hear the pronunciation."
              words={wonderwall.vocabulary}
            />
            <WarmUpQuestions
              step="Vocabulary practice"
              title="Use The New Words"
              description="Discuss the questions and try to use the new vocabulary."
              layout="two-column"
              questions={[
                "Is life winding? Why or why not?",
                "Can you name something blinding?",
                "When did you realize the importance of English?",
                "What is your favorite beat?",
              ]}
            />
          </>
        )}
        listeningIntro={(
          <ListeningActivity
            step="Listen"
            title="Listen To The Song"
            description="Listen to the song before starting the lyrics activities."
            embedUrl={wonderwall.youtube.embedUrl}
            embedTitle={wonderwall.youtube.title}
          />
        )}
        listeningActivities={[
          {
            label: "First Stanza",
            content: (
              <LyricsWordActivity
                step="Stanza 1"
                title="First Stanza"
                description="Listen and choose the correct word. Click a word to place it in the next space, or drag it into a space."
                words={wonderwallFirstStanza.words}
                lyrics={wonderwallFirstStanza.lyrics}
              />
            ),
          },
          {
            label: "Second Stanza",
            content: (
              <IconLyricsActivity
                step="Stanza 2"
                title="Second Stanza"
                description="Choose the correct emoji to complete the lyrics."
                icons={wonderwallSecondStanza.icons}
                lyrics={wonderwallSecondStanza.lyrics}
              />
            ),
          },
          {
            label: "Pre-Chorus / Chorus",
            content: (
              <OrderLyricsActivity
                step="Stanza 3"
                title="Pre-Chorus / Chorus"
                description="Place the sentences in the correct order. The notes in parentheses show the small changes you hear the second time."
                items={wonderwallPreChorus.items}
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
                "Who is an important person in your life?",
                "What do you think a wonderwall is?",
                "Can one person save another person? How?",
                "Does the song sound hopeful or sad to you? Why?",
              ]}
            />
            <HomeworkActivity
              step="Homework"
              title="Writing And Student Report"
              description="Write your answer, then save or share your one-page report."
              prompt="Write about a person who is very important to you. Explain who this person is and how they help you."
              songTitle="Wonderwall"
            />
          </>
        )}
      />
    </main>
  );
}
