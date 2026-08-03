import LessonHero from "@/components/LessonHero";
import BackLink from "@/components/BackLink";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import { countOnMe, countOnMeFirstStanza, countOnMeChorus, countOnMeChoiceLyrics } from "@/data/songs/countOnMe";
import "../../../styles/layout.css";
import "../../../styles/navigation.css";
import "../../../styles/cards.css";
import "../../../styles/activities.css";
import "../../../styles/responsive.css";
import "../../../styles/variables.css";
import "../../../styles/lesson.css";
import "../../../styles/buttons.css";
import "../../../styles/reports.css";
import "../../../styles/forms.css";
import "../../globals.css";

export default function CountOnMePage() {
  return (
    <main className="page-shell">
      <BackLink />
      <LessonHero
        title="Count on Me"
        artist="Bruno Mars"
        description="A lesson page with warm-up speaking, listening, vocabulary, and discussion practice."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/b1/BrunoMars.jpg"
      />
      <WarmUpQuestions
        step="Step 1"
        title="Warm-up Questions"
        questions={[
          "Who do you ask for help when you have a problem?",
          "What makes someone a good friend?",
        ]}
      />
      <MatchingActivity
        step="Step 2"
        title="Match The Words To Their Meanings"
        description="Drag each word into the correct meaning box. Use the speaker button to hear the pronunciation."
        words={countOnMe.vocabulary}
      />
      <ListeningActivity
        step="Step 3"
        title="Listen To The Song"
        description="Listen to the song before moving on to the next activity."
        embedUrl={countOnMe.spotify.embedUrl}
        embedTitle={countOnMe.spotify.title}
      />
      <IconLyricsActivity
        step="Step 4"
        title="First Stanza"
        description="Drag each icon into the correct space while you listen."
        icons={countOnMeFirstStanza.icons}
        lyrics={countOnMeFirstStanza.lyrics}
      />
      <LyricsWordActivity
        step="Step 5"
        title="Pre-Chorus And Chorus"
        description="Drag the correct words into the lyrics while you listen. Some extra words are there to make it more challenging."
        words={countOnMeChorus.words}
        lyrics={countOnMeChorus.lyrics}
      />
      <ChoiceLyricsActivity
        step="Step 6"
        title="Next Stanza"
        description="Listen carefully and click the correct option in each line."
        lyrics={countOnMeChoiceLyrics.lyrics}
      />
      <CheckAllActivity
        title="Check All Answers"
        description="When students finish the whole song, click below to check every activity at once."
      />
      <WarmUpQuestions
        step="Wrap-Up"
        title="Talk About The Song"
        description="Use these questions to finish the lesson with speaking practice."
        questions={[
            "What makes someone a really good friend?",
            "Who is an important person in your life? Why?",
            "Is friendship more about helping, listening, or spending time together? Why?",
            "Have you ever helped a friend, or has a friend helped you?"
        ]}
      />
      <HomeworkActivity
        step="Homework"
        title="Writing And Student Report"
        description="Write your homework answer, then save or share your report."
        prompt="Write about an important person in your life. Explain why this person is important and how they help you."
        songTitle="Count on Me"
      />
    </main>
  );
}