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
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { patientZero, patientZeroChorus, patientZeroOutro, patientZeroVerseOne, patientZeroVerseThree, patientZeroVerseTwo } from "@/data/songs/patientZero";

export default function PatientZeroPage() {
  const song = getSongMeta("patient-zero");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like Taylor Swift?", "What is her best song?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={patientZero.vocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Have you ever met a social climber?", "What are you sick of?", "When do you say, ‘I got you’ to someone?", "What can leave a person reeling?"]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={patientZero.youtube.embedUrl} embedTitle={patientZero.youtube.title} />}
        listeningActivities={[
          { label: "Chorus", content: <UnscrambleLyricsActivity step="Activity 1" title="Chorus" description="Unscramble the letters shown in each gap and type the correct word." lyrics={patientZeroChorus.lyrics} /> },
          { label: "Verse 1", content: <ChoiceLyricsActivity step="Activity 2" title="Verse 1" description="Choose the form of the verb be that you hear in each line." lyrics={patientZeroVerseOne.lyrics} /> },
          { label: "Verse 2", content: <IconLyricsActivity step="Activity 3" title="Verse 2" description="Click or drag each emoji into the correct lyric gap while you listen." icons={patientZeroVerseTwo.icons} lyrics={patientZeroVerseTwo.lyrics} /> },
          { label: "Verse 3", content: <LyricsWordActivity step="Activity 4" title="Verse 3" description="Place each complete clause in the correct lyric gap." words={patientZeroVerseThree.words} lyrics={patientZeroVerseThree.lyrics} /> },
          { label: "Outro", content: <LyricsWordActivity step="Activity 5" title="Outro" description="Listen carefully to the end of the song. Click or drag each word into the correct lyric gap. There are no extra words." words={patientZeroOutro.words} lyrics={patientZeroOutro.lyrics} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Who is Taylor talking to?", "Is she talking about a good person?", "Why does Taylor call herself ‘patient zero’ in the song?", "What advice is she giving the other person?"]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="If you had problems with an ex-boyfriend or ex-girlfriend, would you tell their current partner? Why or why not?" songTitle="Patient Zero" />
        </>}
      />
    </main>
  );
}
