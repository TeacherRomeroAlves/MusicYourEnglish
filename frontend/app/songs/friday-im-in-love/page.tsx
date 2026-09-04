import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconChoiceLyricsActivity from "@/components/activities/IconChoiceLyricsActivity/IconChoiceLyricsActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import MissingWordsActivity from "@/components/activities/MissingWordsActivity/MissingWordsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import {
  fridayFirstStanza,
  fridayFourthStanza,
  fridayImInLove,
  fridaySecondStanza,
  fridayThirdStanza,
} from "@/data/songs/fridayImInLove";
import { ChoiceLyricsProvider } from "@/hooks/useChoiceLyrics";

export default function FridayImInLovePage() {
  const song = getSongMeta("friday-im-in-love");

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
      <ChoiceLyricsProvider>
        <LessonSections
          beforeSong={(
            <>
              <WarmUpQuestions
                step="Warm-up"
                title="Warm-up Questions"
                questions={[
                  "Do you know The Cure?",
                  "Do you like rock from the 1980s or 1990s?",
                ]}
              />
              <MatchingActivity
                step="Vocabulary"
                title="Match The Words To Their Meanings"
                description="Match each word or expression with its meaning. Click one to use the next box, or drag it to a specific box. Use the speaker button to hear it."
                words={fridayImInLove.vocabulary}
              />
              <WarmUpQuestions
                step="Vocabulary practice"
                title="Use The New Words"
                description="Discuss the questions and try to use the new vocabulary."
                layout="two-column"
                questions={[
                  "Can you name the days of the week?",
                  "What is your favorite day of the week? Why?",
                  "When do you dress up? Do you like to look gorgeous?",
                  "In which situations do you frown?",
                ]}
              />
            </>
          )}
          listeningIntro={(
            <ListeningActivity
              step="Listen"
              title="Listen To The Song"
              description="Listen to the song before starting the lyrics activities."
              embedUrl={fridayImInLove.youtube.embedUrl}
              embedTitle={fridayImInLove.youtube.title}
            />
          )}
          listeningActivities={[
            {
              label: "Opening Verses",
              content: (
                <LyricsWordActivity
                  step="Activity 1"
                  title="Opening Verses"
                  description="Place the days in the lyrics while you listen. Each day appears twice, and this section is repeated later in the song. Click a day to use the next gap, or drag it to a specific gap."
                  words={fridayFirstStanza.words}
                  lyrics={fridayFirstStanza.lyrics}
                />
              ),
            },
            {
              label: "Pre-Chorus And Verse",
              content: (
                <ChoiceLyricsActivity
                  step="Activity 2"
                  title="Pre-Chorus And Verse"
                  description="Click the correct option while you listen. The Saturday and Sunday answers are synchronized with the next activity."
                  lyrics={fridaySecondStanza.lyrics}
                />
              ),
            },
            {
              label: "Verse And Pre-Chorus",
              content: (
                <IconChoiceLyricsActivity
                  step="Activity 3"
                  title="Verse And Pre-Chorus"
                  description="Click or drag each emoji into the correct gap. Then complete the repeated Saturday and Sunday lines; those answers are synchronized with the previous activity."
                  icons={fridayThirdStanza.icons}
                  iconLyrics={fridayThirdStanza.iconLyrics}
                  choiceLyrics={fridayThirdStanza.choiceLyrics}
                />
              ),
            },
            {
              label: "Bridge",
              content: (
                <MissingWordsActivity
                  step="Activity 4"
                  title="Bridge"
                  description="Select the three adjectives that are shown here but are NOT actually sung."
                  lyrics={fridayFourthStanza.lyrics}
                  maximumSelections={3}
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
                  "Why does the singer love Friday?",
                  "How do you usually feel on Friday?",
                  "Which day of the week is difficult for you?",
                  "What do you like to do at the weekend?",
                ]}
              />
              <HomeworkActivity
                step="Homework"
                title="Express Yourself"
                description="Answer the prompt in writing or record yourself speaking."
                prompt="What is your favorite day of the week? Which day don't you like? Explain why."
                songTitle="Friday I'm in Love"
              />
            </>
          )}
        />
      </ChoiceLyricsProvider>
    </main>
  );
}
