import LessonHero from "@/components/LessonHero";
import BackLink from "@/components/BackLink";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import OrderLyricsActivity from "@/components/activities/OrderLyricsActivity/OrderLyricsActivity";
import TypingLyricsActivity from "@/components/activities/TypingLyricsActivity/TypingLyricsActivity";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import { golden, goldenFirstStanza, goldenChorus, goldenOrder, goldenFinalStanza } from "@/data/songs/golden";
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

export default function goldenPage() {
    return (
        <main className="page-shell">
          <BackLink />
            <LessonHero
            title="Golden"
            artist="Huntr/x"
            description="A new lesson focused on confidence, feelings, and expressive vocabulary."
            imageUrl=""
            />
            <WarmUpQuestions
            step="Step 1"
            title="Warm-up Questions"
            questions={[
              "When do you feel strong and condident?",
              "What helps you when you feel nervous or afraid?",
            ]}
            />
            <MatchingActivity
            step="Step 2"
            title="Match The Words To Their Meanings"
            description="Drag each word into the correct meaning box. Use the speaker button to hear the pronunciation."
            words={golden.vocabulary}
            />
            <ListeningActivity
            step="Step 3"
            title="Listen To The Song"
            description="Listen to the song before moving on to the next activity."
            embedUrl={golden.spotify.embedUrl}
            embedTitle={golden.spotify.title}
            />
            <IconLyricsActivity
            step="Step 4"
            title="First Stanza"
            description="Drag each icon into the correct space while you listen."
            icons={goldenFirstStanza.icons}
            lyrics={goldenFirstStanza.lyrics}
            />
            <ChoiceLyricsActivity
            step="Step 5"
            title="Pre-Chorus"
            description="Listen carefully and click the correct option in each line."
            lyrics={goldenChorus.lyrics}
            />
            <OrderLyricsActivity
            step="Step 6"
            title="Chorus"
            description="Click the lines in the correct order while you listen."
            items={goldenOrder.items}
            />
            <TypingLyricsActivity
            step="Step 7"
            title="Final Stanza"
            description="Listen and type the missing words. Tip: every answer has 2 letters."
            lyrics={goldenFinalStanza.lyrics}
            />
            <CheckAllActivity
            title="Check All Answers"
            description="When students finish the whole song, click below to check every activity at once."
            />
            <WarmUpQuestions
            step="Wrap-up"
            title="Talk About The Song"
            description="Use these questions to finish the lesson with speaking practice."
            questions={[
              "What does this song say about confidence?",
              "Why do people sometimes hide who they really are?",
              "What helps a person feel stronger?",
              "Can fears make us stronger? Why or why not?"
            ]}
            />
            <HomeworkActivity
            step="Homework"
            title="Writing And Student Report"
            description="Write your homework answer, then save or share your report."
            prompt="Write about a time you felt stronger or more confident. Explain what happened and how you felt."
            songTitle="Golden"
            />
        </main>
    );
}