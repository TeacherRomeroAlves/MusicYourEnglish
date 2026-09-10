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
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { flowers, flowersChorus, flowersVerseOneAndPreChorus, flowersVerseTwoAndPreChorus } from "@/data/songs/flowers";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export default function FlowersPage() {
  const song = getSongMeta("flowers");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Miley Cyrus?", "Did you watch her on TV when she was younger?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={flowers.vocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Do you talk to yourself sometimes?", "Do you paint your nails? What color?", "Do you regret anything in your life?", "Is it easy for you to forgive someone?"]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={flowers.spotify.embedUrl} embedTitle={flowers.spotify.title} />}
          listeningActivities={[
            { label: "Verse 1 And Pre-Chorus", content: <ChoiceLyricsActivity step="Activity 1" title="Verse 1 And Pre-Chorus" description="Choose the word you hear in each line." lyrics={flowersVerseOneAndPreChorus.lyrics} /> },
            { label: "Chorus", content: <LyricsWordActivity step="Activity 2" title="Chorus" description="What can Miley do? Click a clause to use the next gap, or drag it to a specific gap while you listen." words={flowersChorus.words} lyrics={flowersChorus.lyrics} /> },
            { label: "Verse 2 And Pre-Chorus", content: <IconLyricsActivity step="Activity 3" title="Verse 2 And Pre-Chorus" description="Click or drag each emoji into the correct lyric gap while you listen." icons={flowersVerseTwoAndPreChorus.icons} lyrics={flowersVerseTwoAndPreChorus.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["What happened in the singer's life?", "Is she still sad? Why or why not?", "What can Miley do by herself?", "Does the song present being alone as something negative?"]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="Is it easy to break up with someone? Have you had this experience in your life? What can help a person move forward?" songTitle="Flowers" />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
