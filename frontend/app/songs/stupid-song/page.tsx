import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import InlineWordOrderActivity from "@/components/activities/InlineWordOrderActivity/InlineWordOrderActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { stupidSong, stupidSongBridge, stupidSongChorusPartOne, stupidSongChorusPartTwo, stupidSongVerseOne, stupidSongVerseTwo } from "@/data/songs/stupidSong";
import { InlineWordOrderProvider } from "@/hooks/useInlineWordOrder";

export default function StupidSongPage() {
  const song = getSongMeta("stupid-song");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <InlineWordOrderProvider>
        <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Olivia Rodrigo?", "Is she the future of pop music?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Match each word or expression with its meaning. Click one to select it, then click its definition, or drag it to a specific box. Use the speaker button to hear it." words={stupidSong.vocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Are you a bit blue today?", "Is there a boulevard in your city?", "Do you skip lunch sometimes?", "What is the relationship between wax and fire?"]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={stupidSong.youtube.embedUrl} embedTitle={stupidSong.youtube.title} />}
        listeningActivities={[
          { label: "Verse 1", content: <LyricsWordActivity step="Activity 1" title="Verse 1" description="Place each complete verb form in the correct lyric gap while you listen." words={stupidSongVerseOne.words} lyrics={stupidSongVerseOne.lyrics} /> },
          { label: "Chorus: Part 1", content: <InlineWordOrderActivity step="Activity 2" title="Chorus: Part 1" description="Rearrange the highlighted words or sentence parts within each lyric line." lines={stupidSongChorusPartOne.lines} /> },
          { label: "Chorus: Part 2", content: <ChoiceLyricsActivity step="Activity 3" title="Chorus: Part 2" description="Select the word or verb form you hear in each line." lyrics={stupidSongChorusPartTwo.lyrics} /> },
          { label: "Verse 2", content: <IconLyricsActivity step="Activity 4" title="Verse 2" description="Click or drag each emoji into the correct lyric gap while you listen." icons={stupidSongVerseTwo.icons} lyrics={stupidSongVerseTwo.lyrics} /> },
          { label: "Bridge", content: <LyricsWordActivity step="Activity 5" title="Bridge" description="Click or drag words into the correct lyric gaps. Three words are extra. This section repeats in the recording, but complete it once." words={stupidSongBridge.words} lyrics={stupidSongBridge.lyrics} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Are love songs stupid? Why or why not?", "How does love make the singer feel?", "Which image in the song describes love best?", "Have you ever wanted someone more than words could express?"]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="What is the best love song you have ever heard? Why is it special to you?" songTitle="stupid song" />
        </>}
        />
      </InlineWordOrderProvider>
    </main>
  );
}
