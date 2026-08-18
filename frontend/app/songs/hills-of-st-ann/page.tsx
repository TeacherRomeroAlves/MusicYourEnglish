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
import MissingWordsActivity from "@/components/activities/MissingWordsActivity/MissingWordsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import {
  hillsFirstStanza,
  hillsFourthStanza,
  hillsOfStAnn,
  hillsSecondStanza,
  hillsThirdStanza,
} from "@/data/songs/hillsOfStAnn";

export default function HillsOfStAnnPage() {
  const song = getSongMeta("hills-of-st-ann");

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
                "Do you know Stephen Marley?",
                "What about his father, Bob Marley?",
              ]}
            />
            <MatchingActivity
              step="Vocabulary"
              title="Match The Words To Their Meanings"
              words={hillsOfStAnn.vocabulary}
            />
            <WarmUpQuestions
              step="Vocabulary practice"
              title="Use The New Words"
              description="Discuss the questions and try to use the new vocabulary."
              layout="two-column"
              questions={[
                "Do you like hiking in hills or mountains?",
                "Which city are your family's roots in?",
                "Do you know anything about Rastafari culture? Are Jah and Zion new words for you?",
                "Is there sometimes mist or a cool breeze in your city?",
              ]}
            />
          </>
        )}
        listeningIntro={(
          <ListeningActivity
            step="Listen"
            title="Listen To The Song"
            description="Listen to the song before starting the lyrics activities."
            embedUrl={hillsOfStAnn.youtube.embedUrl}
            embedTitle={hillsOfStAnn.youtube.title}
          />
        )}
        listeningActivities={[
          {
            label: "First Stanza",
            content: (
              <IconLyricsActivity
                step="Stanza 1"
                title="First Stanza"
                description="Place the correct emoji in each gap. Click an emoji to use the next gap, or drag it to a specific gap."
                icons={hillsFirstStanza.icons}
                lyrics={hillsFirstStanza.lyrics}
              />
            ),
          },
          {
            label: "Second Stanza",
            content: (
              <ChoiceLyricsActivity
                step="Stanza 2"
                title="Second Stanza"
                description="Listen and choose the correct word according to the song."
                lyrics={hillsSecondStanza.lyrics}
              />
            ),
          },
          {
            label: "Third Stanza",
            content: (
              <MissingWordsActivity
                step="Stanza 3"
                title="Which Words Are NOT In The Song?"
                description="Select the 3 words or expressions shown inside the lyrics that are NOT actually in the song."
                lyrics={hillsThirdStanza.lyrics}
                maximumSelections={3}
              />
            ),
          },
          {
            label: "Fourth Stanza",
            content: (
              <LyricsWordActivity
                step="Stanza 4"
                title="Fourth Stanza"
                description="Place each word in the correct gap. Listen carefully to the sound."
                words={hillsFourthStanza.words}
                lyrics={hillsFourthStanza.lyrics}
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
            <aside className="cultural-note" aria-labelledby="st-ann-cultural-note">
              <p className="section-kicker">Cultural note</p>
              <h2 id="st-ann-cultural-note">Bob Marley and St. Ann, Jamaica</h2>
              <p>Bob Marley was born in Nine Mile, a village in Saint Ann Parish, Jamaica. The area is an important part of the Marley family&apos;s history, and reggae often connects music with home, faith, and identity.</p>
            </aside>
            <WarmUpQuestions
              step="Wrap-up"
              title="Talk About The Song"
              description="Discuss these questions after listening to the song."
              layout="two-column"
              questions={[
                "What makes a birthplace special?",
                "Which images of nature appear in the song?",
                "How does the song show love for Jamaica?",
                "Can music help us learn about another culture? How?",
              ]}
            />
            <HomeworkActivity
              step="Homework"
              title="Writing And Student Report"
              description="Write your answer, then save or share your one-page report."
              prompt="Describe your birthplace. Is it a special place to you? Why or why not?"
              songTitle="Hills of St. Ann"
            />
          </>
        )}
      />
    </main>
  );
}
