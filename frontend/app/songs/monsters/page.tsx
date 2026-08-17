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
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import { getSongMeta } from "@/data/songCatalog";

import { monsters, monstersPronouns, monstersSecondStanza, monstersThirdStanza, monstersFourthStanza, monstersFifthStanza } from "@/data/songs/monsters";

export default function monsterPage() {
    const song = getSongMeta("monsters");
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
              beforeSong={<>
                <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know All Time Low or Demi Lovato?", "Do you believe in monsters?"]} />
                <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Drag each word into the correct meaning box. Use the speaker button to hear the pronunciation." words={monsters.vocabulary} />
                <WarmUpQuestions
                  step="Vocabulary practice"
                  title="Use The New Words"
                  description="Discuss the questions and try to use the vocabulary from the matching activity."
                  layout="two-column"
                  questions={[
                    "Can you name any famous monsters?",
                    "Do you fear anything?",
                    "Do you have any scars? Do you try to hide them?",
                    "How can people deal with tunnel vision? Can it be a problem?",
                  ]}
                />
              </>}
              listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before moving on to the next activity." embedUrl={monsters.spotify.embedUrl} embedTitle={monsters.spotify.title} />}
              listeningActivities={[
                { label: "First Stanza", content: <PronounLyricsActivity step="Stanza 1" title="First Stanza" description="Complete the gaps using a pronoun. Use the chart to help you." pronouns={monstersPronouns.pronouns} lyrics={monstersPronouns.lyrics} /> },
                { label: "Second Stanza", content: <IconLyricsActivity step="Stanza 2" title="Second Stanza" description="Drag each emoji into the correct space while you listen." icons={monstersSecondStanza.icons} lyrics={monstersSecondStanza.lyrics} /> },
                { label: "Third Stanza", content: <PronounLyricsActivity step="Stanza 3" title="Third Stanza" description="Complete the gaps using pronouns. Matching blanks fill together." pronouns={monstersThirdStanza.pronouns} lyrics={monstersThirdStanza.lyrics} /> },
                { label: "Fourth Stanza", content: <LyricsWordActivity step="Stanza 4" title="Fourth Stanza" description="Complete the sentences with the verbs in the present continuous form." words={monstersFourthStanza.words} lyrics={monstersFourthStanza.lyrics} /> },
                { label: "Fifth Stanza", content: <ChoiceLyricsActivity step="Stanza 5" title="Fifth Stanza" description="Listen carefully and click the correct option in each line." lyrics={monstersFifthStanza.lyrics} /> },
              ]}
              checkAnswers={<CheckAllActivity title="Check All Answers" description="When students finish the whole song, click below to check every activity at once." />}
              afterSong={<>
                <WarmUpQuestions step="Wrap-Up" title="Talk About The Song" description="Use these questions to finish the lesson with speaking practice." questions={["What feelings do you think the singer has in this song?", "Why do people sometimes go back to someone who hurts them?", "What can a person do when their thoughts feel too strong?", "Do you think this song is more about love, pain, or fear? Why?"]} />
                <HomeworkActivity step="Homework" title="Writing And Student Report" description="Write your homework answer, then save or share your report." prompt="Write about a time when your feelings were very strong. Explain what happened and how you felt." songTitle="Monsters" />
              </>}
            />
        </main>
    );
}
