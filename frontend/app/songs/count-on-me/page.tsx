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
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import { getSongMeta } from "@/data/songCatalog";
import { countOnMe, countOnMeFirstStanza, countOnMeChorus, countOnMeChoiceLyrics } from "@/data/songs/countOnMe";

export default function CountOnMePage() {
  const song = getSongMeta("count-on-me");
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
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Who do you ask for help when you have a problem?", "What makes someone a good friend?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Drag each word into the correct meaning box. Use the speaker button to hear the pronunciation." words={countOnMe.vocabulary} />
          <WarmUpQuestions
            step="Vocabulary practice"
            title="Use The New Words"
            description="Discuss the questions and try to use the vocabulary from the matching activity."
            layout="two-column"
            questions={[
              "What's beside your TV at home?",
              "Can you count on your best friend for anything?",
              "Do you like sailing? How can you guide yourself across the ocean?",
              "Is it easy for other people to find out things about you?",
            ]}
          />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before moving on to the next activity." embedUrl={countOnMe.spotify.embedUrl} embedTitle={countOnMe.spotify.title} />}
        listeningActivities={[
          { label: "First Stanza", content: <IconLyricsActivity step="Stanza 1" title="First Stanza" description="Drag each icon into the correct space while you listen." icons={countOnMeFirstStanza.icons} lyrics={countOnMeFirstStanza.lyrics} /> },
          { label: "Pre-Chorus And Chorus", content: <LyricsWordActivity step="Stanza 2" title="Pre-Chorus And Chorus" description="Drag the correct words into the lyrics while you listen. Some extra words are there to make it more challenging." words={countOnMeChorus.words} lyrics={countOnMeChorus.lyrics} /> },
          { label: "Next Stanza", content: <ChoiceLyricsActivity step="Stanza 3" title="Next Stanza" description="Listen carefully and click the correct option in each line." lyrics={countOnMeChoiceLyrics.lyrics} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When students finish the whole song, click below to check every activity at once." />}
        afterSong={<>
          <WarmUpQuestions step="Wrap-Up" title="Talk About The Song" description="Use these questions to finish the lesson with speaking practice." questions={["What makes someone a really good friend?", "Who is an important person in your life? Why?", "Is friendship more about helping, listening, or spending time together? Why?", "Have you ever helped a friend, or has a friend helped you?"]} />
          <HomeworkActivity step="Homework" title="Writing And Student Report" description="Write your homework answer, then save or share your report." prompt="Write about an important person in your life. Explain why this person is important and how they help you." songTitle="Count on Me" />
        </>}
      />
    </main>
  );
}
