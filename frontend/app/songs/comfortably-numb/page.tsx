import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { comfortablyNumb, comfortablyNumbChorusOne, comfortablyNumbChorusTwo, comfortablyNumbVerseOne, comfortablyNumbVerseThree } from "@/data/songs/comfortablyNumb";
import { LyricsWordSyncProvider } from "@/hooks/useLyricsWordSync";

export default function ComfortablyNumbPage() {
  const song = getSongMeta("comfortably-numb");

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
        credit={<>This song was suggested by Dr. Andy Goldhawk (<a href="https://www.instagram.com/learning.theories.shared/" target="_blank" rel="noreferrer">@learning.theories.shared</a>).</>}
      />
      <LessonProgress />
      <LyricsWordSyncProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Pink Floyd?", "What is their best song?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={comfortablyNumb.vocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["When do you nod?", "When was the last time you had a fever? Did it take long to recede?", "Can you mention something that comes in waves?", "When did you last catch a glimpse of something interesting?"]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={comfortablyNumb.youtube.embedUrl} embedTitle={comfortablyNumb.youtube.title} />}
          listeningActivities={[
            { label: "Verse 1", content: <LyricsWordActivity step="Activity 1" title="Verse 1" description="Click or drag the correct verbs into the lyric gaps. There are no extra words." words={comfortablyNumbVerseOne.words} lyrics={comfortablyNumbVerseOne.lyrics} /> },
            { label: "Chorus 1", content: <LyricsWordActivity step="Activity 2" title="Chorus 1" description="Place each complete clause in the correct lyric gap. The repeated top lines are shared with Chorus 2." words={comfortablyNumbChorusOne.words} lyrics={comfortablyNumbChorusOne.lyrics} /> },
            { label: "Verse 3", content: <UnscrambleLyricsActivity step="Activity 3" title="Verse 3" description="Unscramble the letters shown in each gap and type the correct word." lyrics={comfortablyNumbVerseThree.lyrics} /> },
            { label: "Chorus 2", content: <LyricsWordActivity step="Activity 4" title="Chorus 2" description="Place each complete clause in the correct lyric gap. The repeated top lines are shared with Chorus 1." words={comfortablyNumbChorusTwo.words} lyrics={comfortablyNumbChorusTwo.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <aside className="cultural-note" aria-labelledby="comfortably-numb-cultural-note">
              <p className="section-kicker">Cultural note</p>
              <h2 id="comfortably-numb-cultural-note">A landmark album: The Wall</h2>
              <p>Released in 1979, <em>The Wall</em> is Pink Floyd&apos;s double concept album about the fictional rock star Pink, who builds an emotional wall to protect himself from pain and isolation. In “Comfortably Numb,” a doctor gives Pink an injection so he can perform, and the two voices show different sides of his experience. The album became a major work of rock theatre, later inspiring huge stage productions and a film.</p>
            </aside>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["What is happening in this song?", "Who do you think are the speakers in the story?", "How do you feel when you listen to this song?", "Why do you think the song uses the image of a wall?"]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="Is it comfortable being an adult? Do you feel numb sometimes?" songTitle="Comfortably Numb" />
          </>}
        />
      </LyricsWordSyncProvider>
    </main>
  );
}
