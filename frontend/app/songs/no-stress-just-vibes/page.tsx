import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import UnscrambleLyricsActivity from "@/components/activities/UnscrambleLyricsActivity/UnscrambleLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { noStressJustVibes, noStressJustVibesChorus, noStressJustVibesOpeningVerses, noStressJustVibesMiddleVerses, noStressJustVibesClosingVerses } from "@/data/songs/noStressJustVibes";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export const metadata = {
  title: "No Stress, Just Vibes - AI IRIE FM | Music Your English",
  description: "Practice no, adjectives, and everyday words with a Beginner reggae lesson based on No Stress, Just Vibes.",
};

export default function NoStressJustVibesPage() {
  const song = getSongMeta("no-stress-just-vibes");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like reggae?", "Is reggae relaxing?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={noStressJustVibes.vocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "Is it good to feel stress?",
              "What's your vibe today?",
              "How is your mind today?",
              "Do you like to do things in a rush?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={noStressJustVibes.youtube.embedUrl} embedTitle={noStressJustVibes.youtube.title} />}
          listeningActivities={[
            { label: "Chorus", content: <UnscrambleLyricsActivity step="Activity 1" title="Chorus" description="Unscramble the letters shown in each gap and type the correct word. The repeated answers stay in sync." lyrics={noStressJustVibesChorus.lyrics} /> },
            { label: "Verses 1 And 2", content: <IconLyricsActivity step="Activity 2" title="Verses 1 And 2" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap." icons={noStressJustVibesOpeningVerses.icons} lyrics={noStressJustVibesOpeningVerses.lyrics} /> },
            { label: "Verses 3 And 4", content: <LyricsWordActivity step="Activity 3" title="Verses 3 And 4" description="Click a gap, then click a word to place it. Or click a word to use the next available gap. There are no extra words." words={noStressJustVibesMiddleVerses.words} lyrics={noStressJustVibesMiddleVerses.lyrics} /> },
            { label: "Verses 5 And 6", content: <LyricsWordActivity step="Activity 4" title="Verses 5 And 6" description="Click a gap, then click a phrase to place it. Or click a phrase to use the next available gap. There are no extra phrases." words={noStressJustVibesClosingVerses.words} lyrics={noStressJustVibesClosingVerses.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <aside className="cultural-note" aria-labelledby="no-stress-ai-note">
              <p className="section-kicker">Cultural note</p>
              <h2 id="no-stress-ai-note">A song made with AI</h2>
              <p>This song was created using artificial intelligence, or AI. AI is computer technology that can help people make music, voices, and lyrics. As you listen, think about how the song makes you feel. Does knowing it was made with AI change your opinion?</p>
            </aside>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "What is the song's message?",
              "Do you get stressed sometimes?",
              "What's the key to feeling good?",
              "Can AI make good music?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="How do you control stress in your life? Can music help?" songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
