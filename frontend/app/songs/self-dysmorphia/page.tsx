import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import PartialWordLyricsActivity from "@/components/activities/PartialWordLyricsActivity/PartialWordLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import WordPresenceActivity from "@/components/activities/WordPresenceActivity/WordPresenceActivity";
import { getSongMeta } from "@/data/songCatalog";
import { selfDysmorphia, selfDysmorphiaChorus, selfDysmorphiaVerseOne, selfDysmorphiaVerseTwo } from "@/data/songs/selfDysmorphia";

export default function SelfDysmorphiaPage() {
  const song = getSongMeta("self-dysmorphia");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Who is your favorite pop singer?", "Do you know Mckenna Grace?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={selfDysmorphia.vocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Have you heard about dysmorphia before?", "What do you sometimes wonder about?", "What can make a person feel miserable?", "Do you use reminders on your phone or computer screen?"]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={selfDysmorphia.spotify.embedUrl} embedTitle={selfDysmorphia.spotify.title} />}
        listeningActivities={[
          { label: "Verse 1", content: <PartialWordLyricsActivity step="Activity 1" title="Verse 1" description="Type the missing letters to complete each word." lyrics={selfDysmorphiaVerseOne.lyrics} /> },
          { label: "Chorus", content: <LyricsWordActivity step="Activity 2" title="Chorus" description="Click or drag words into the correct lyric gaps. Four words are extra." words={selfDysmorphiaChorus.words} lyrics={selfDysmorphiaChorus.lyrics} /> },
          { label: "Verse 2", content: <WordPresenceActivity step="Activity 3" title="Verse 2" description="Activate the four words that are actually sung." lyrics={selfDysmorphiaVerseTwo.lyrics} maximumSelections={4} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Do you know the sentence ‘Who's the fairest of them all?’", "Is the singer a confident person? Why or why not?", "How can social media affect the way people see themselves?", "Is personality more important than appearance? Why?"]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="‘You can't photograph a personality.’ What do you think this sentence means? How is it connected to the internet and social media today?" songTitle="Self Dysmorphia" />
        </>}
      />
    </main>
  );
}
