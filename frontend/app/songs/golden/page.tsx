import Image from "next/image";
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
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import { getSongMeta } from "@/data/songCatalog";
import { golden, goldenFirstStanza, goldenChorus, goldenOrder, goldenFinalStanza } from "@/data/songs/golden";

export default function goldenPage() {
    const song = getSongMeta("golden");
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
                <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like K-pop?", "Did you watch the movie KPop Demon Hunters?"]} />
                <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Drag each word into the correct meaning box. Use the speaker button to hear the pronunciation." words={golden.vocabulary} />
                <WarmUpQuestions
                  step="Vocabulary practice"
                  title="Use The New Words"
                  description="Discuss the questions and try to use the vocabulary from the matching activity."
                  layout="two-column"
                  questions={[
                    "Can you name one wild animal?",
                    "What are some fears you have?",
                    "Do you like golden things? Why or why not?",
                    "Do you sometimes feel alone?",
                  ]}
                />
              </>}
              listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before moving on to the next activity." embedUrl={golden.spotify.embedUrl} embedTitle={golden.spotify.title} />}
              listeningActivities={[
                { label: "Verse 1", content: <IconLyricsActivity step="Activity 1" title="Verse 1" description="Drag each icon into the correct space while you listen." icons={goldenFirstStanza.icons} lyrics={goldenFirstStanza.lyrics} /> },
                { label: "Pre-Chorus", content: <ChoiceLyricsActivity step="Activity 2" title="Pre-Chorus" description="Listen carefully and click the correct option in each line." lyrics={goldenChorus.lyrics} /> },
                { label: "Chorus", content: <OrderLyricsActivity step="Activity 3" title="Chorus" description="Put the lyric lines in order. Click two lines to swap them, or drag one line onto another." items={goldenOrder.items} /> },
                { label: "Verse 2 And Pre-Chorus", content: <TypingLyricsActivity step="Activity 4" title="Verse 2 And Pre-Chorus" description="Listen and type the missing words. Tip: every answer has 2 letters." lyrics={goldenFinalStanza.lyrics} /> },
              ]}
              checkAnswers={<CheckAllActivity title="Check All Answers" description="When students finish the whole song, click below to check every activity at once." />}
              afterSong={<>
                <aside className="cultural-note cultural-note--with-poster" aria-labelledby="golden-cultural-note">
                  <Image
                    className="cultural-note__poster"
                    src="/images/cultural-notes/kpop-demon-hunters/poster.png"
                    alt="KPop Demon Hunters movie poster"
                    width={683}
                    height={1024}
                    sizes="(max-width: 580px) 100vw, 220px"
                  />
                  <div className="cultural-note__content">
                    <p className="section-kicker">Cultural note</p>
                    <h2 id="golden-cultural-note">Golden and KPop Demon Hunters</h2>
                    <p>
                      &quot;Golden&quot; is part of the animated movie <em>KPop Demon Hunters</em>.
                      At the 98th Academy Awards, the movie won Best Animated Feature and
                      &quot;Golden&quot; won Best Original Song.
                    </p>
                    <a
                      className="button button--primary cultural-note__action"
                      href="https://movieyourenglish.vercel.app/kpop-demon-hunters/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Practice English With The Movie
                    </a>
                  </div>
                </aside>
                <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Use these questions to finish the lesson with speaking practice." questions={["What does this song say about confidence?", "Why do people sometimes hide who they really are?", "What helps a person feel stronger?", "Can fears make us stronger? Why or why not?"]} />
                <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="Write about a time you felt stronger or more confident. Explain what happened and how you felt." songTitle="Golden" />
              </>}
            />
        </main>
    );
}
