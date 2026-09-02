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
import MissingWordsActivity from "@/components/activities/MissingWordsActivity/MissingWordsActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { manchild, manchildChorus, manchildFirstStanza, manchildMissingWords, manchildSecondStanza } from "@/data/songs/manchild";

export default function ManchildPage() {
  const song = getSongMeta("manchild");

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
              questions={["Do you know Sabrina Carpenter?", "What is your opinion about men?"]}
            />
            <MatchingActivity
              step="Vocabulary"
              title="Match The Words To Their Meanings"
              description="Match each word with its meaning. Use the speaker button to hear the pronunciation."
              words={manchild.vocabulary}
            />
            <WarmUpQuestions
              step="Vocabulary practice"
              title="Use The New Words"
              description="Discuss the questions and try to use the new vocabulary."
              layout="two-column"
              questions={[
                "Do you use self-care products?",
                "Can you name a dumb, incompetent, or useless person?",
                "What is your outfit today?",
                "Are men immature? Why or why not?",
              ]}
            />
          </>
        )}
        listeningIntro={(
          <ListeningActivity
            step="Listen"
            title="Listen To The Song"
            description="Listen to the song before starting the lyrics activities."
            embedUrl={manchild.spotify.embedUrl}
            embedTitle={manchild.spotify.title}
          />
        )}
        listeningActivities={[
          {
            label: "Verse 1",
            content: (
              <ChoiceLyricsActivity
                step="Activity 1"
                title="Verse 1"
                description="Simple present or simple past? Listen and choose the correct option."
                lyrics={manchildFirstStanza.lyrics}
              />
            ),
          },
          {
            label: "Chorus",
            content: (
              <UnscrambleLyricsActivity
                step="Activity 2"
                title="Chorus"
                description="Listen, unscramble the letters, and type the correct word."
                lyrics={manchildChorus.lyrics}
              />
            ),
          },
          {
            label: "Verse 2",
            content: (
              <IconLyricsActivity
                step="Activity 3"
                title="Verse 2"
                description="Click or drag each emoji into the correct lyric gap while you listen."
                icons={manchildSecondStanza.icons}
                lyrics={manchildSecondStanza.lyrics}
              />
            ),
          },
          {
            label: "Bridge",
            content: (
              <MissingWordsActivity
                step="Activity 4"
                title="Which Word Is NOT In The Song?"
                description="There are 8 words. Select the 4 words that are NOT part of the lyrics."
                lyrics={manchildMissingWords.lyrics}
                maximumSelections={4}
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
                "What does the singer mean by manchild?",
                "Which problems does the singer describe?",
                "What makes someone mature and responsible?",
                "Is the song serious, funny, or both? Why?",
              ]}
            />
            <HomeworkActivity
              step="Homework"
              title="Writing And Student Report"
              description="Write your answer, then save or share your one-page report."
              prompt="Is it easy to find a good man to date nowadays? Why or why not? Do you know any manchild?"
              songTitle="Manchild"
            />
          </>
        )}
      />
    </main>
  );
}
