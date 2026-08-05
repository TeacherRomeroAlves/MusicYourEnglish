import LessonHero from "@/components/LessonHero";
import BackLink from "@/components/BackLink";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import PronounLyricsActivity from "@/components/activities/PronounLyricsActivity/PronounLyricsActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";

import { monsters, monstersPronouns, monstersSecondStanza, monstersThirdStanza, monstersFourthStanza, monstersFifthStanza } from "@/data/songs/monsters";
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

export default function monsterPage() {
    return (
        <main className="page-shell">
            <BackLink />
            <LessonHero
                title="Monsters"
                artist="All Time Low"
                description="A lesson about strong feelings, fear, and personal struggles."
                imageUrl=""
            />
            <WarmUpQuestions
                step="Step 1"
                title="Warm-up Questions"
                questions={[
                    "What do people do when they feel stressed or worried?",
                    "Why do people sometimes hide their feelings?",
                ]}
            />
            <MatchingActivity
                step="Step 2"
                title="Match The Words To Their Meanings"
                description="Drag each word into the correct meaning box. Use the speaker button to hear the pronunciation."
                words={monsters.vocabulary}
            />
            <ListeningActivity
                step="Step 3"
                title="Listen To The Song"
                description="Listen to the song before moving on to the next activity."
                embedUrl={monsters.spotify.embedUrl}
                embedTitle={monsters.spotify.title}
            />
            <PronounLyricsActivity
                step="Step 4"
                title="First Stanza"
                description="Complete the gaps using a pronoun. Use the chart to help you."
                pronouns={monstersPronouns.pronouns}
                lyrics={monstersPronouns.lyrics}
            />
            <IconLyricsActivity
                step="Step 5"
                title="Second Stanza"
                description="Drag each emoji into the correct space while you listen."
                icons={monstersSecondStanza.icons}
                lyrics={monstersSecondStanza.lyrics}
            />
            <PronounLyricsActivity
                step="Step 6"
                title="Third Stanza"
                description="Complete the gaps using pronouns. Matching blanks fill together."
                pronouns={monstersThirdStanza.pronouns}
                lyrics={monstersThirdStanza.lyrics}
            />
            <LyricsWordActivity
                step="Step 7"
                title="Fourth Stanza"
                description="Complete the sentences with the verbs in the present continuous form."
                words={monstersFourthStanza.words}
                lyrics={monstersFourthStanza.lyrics}
            />
            <ChoiceLyricsActivity
                step="Step 8"
                title="Fifth Stanza"
                description="Listen carefully and click the correct option in each line."
                lyrics={monstersFifthStanza.lyrics}
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
                    "What feelings do you think the singer has in this song?",
                    "Why do people sometimes go back to someone who hurts them?",
                    "What can a person do when their thoughts feel too strong?",
                    "Do you think this song is more about love, pain, or fear? Why?"
                ]}
            />
            <HomeworkActivity
                step="Homework"
                title="Writing And Student Report"
                description="Write your homework answer, then save or share your report."
                prompt="Write about a time when your feelings were very strong. Explain what happened and how you felt."
                songTitle="Monsters"
            />
        </main>
    );
}
