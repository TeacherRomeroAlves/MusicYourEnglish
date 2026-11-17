import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import PartialWordLyricsActivity from "@/components/activities/PartialWordLyricsActivity/PartialWordLyricsActivity";
import Image from "next/image";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { iKnewVocabulary, iKnewVerseOne, iKnewChorus, iKnewIcons, iKnewVerseTwo, iKnewFinal } from "@/data/songs/iKnewItIKnewYou";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

import { getSongMetadata } from "@/lib/songMetadata";

export const metadata = getSongMetadata("i-knew-it-i-knew-you");

export default function IKnewItIKnewYouPage() {
  const song = getSongMeta("i-knew-it-i-knew-you");
  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Have you ever watched Toy Story?", "Do you like Taylor Swift?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={iKnewVocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "Have you ever had a mood ring?",
              "What matters in your life?",
              "Are you feeling blue today?",
              "Has it been a while since you watched a good movie?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" embedUrl="https://www.youtube.com/embed/hDU4GB1PTxc" embedTitle="I Knew It, I Knew You by Taylor Swift on YouTube" />}
          listeningActivities={[
            { label: "Verse 1", content: <LyricsWordActivity step="Activity 1" title="Verse 1" description="Click a gap, then click a verb to place it. Or click a verb to use the next available gap. Three words are extra." {...iKnewVerseOne} /> },
            { label: "Chorus", content: <PartialWordLyricsActivity step="Activity 2" title="Chorus" description="Type the missing letters to complete each verb." lyrics={iKnewChorus} /> },
            { label: "Verse 2", content: <IconLyricsActivity step="Activity 3" title="Verse 2" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap." icons={iKnewIcons} lyrics={iKnewVerseTwo} /> },
            { label: "Bridge and Final Chorus", content: <LyricsWordActivity step="Activity 4" title="Bridge and Final Chorus" description="Click a gap, then click a noun to place it. Or click a noun to use the next available gap." {...iKnewFinal} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <aside className="cultural-note cultural-note--with-poster" aria-labelledby="i-knew-movie-title">
              <Image className="cultural-note__poster" src="/images/cultural-notes/toy-story-5/poster.webp" alt="Toy Story 5 movie poster" width={300} height={450} />
              <div className="cultural-note__content">
                <p className="section-kicker">Keep learning with movies</p>
                <h2 id="i-knew-movie-title">Practice with Toy Story 5, too</h2>
                <p>Enjoyed learning with this song? Visit our sister project, Movie Your English, to practice English with Toy Story 5. Explore the movie lesson and keep learning with familiar characters.</p>
                <a className="button button--primary cultural-note__action" href="https://movieyourenglish.vercel.app/toy-story-5/index.html" target="_blank" rel="noopener noreferrer">Explore Toy Story 5 on Movie Your English</a>
              </div>
            </aside>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "What makes you cry rivers?",
              'Do you think "love can bring things back to life"?',
              "Tell me about one person you love. Do you think about this person every day?",
              "Is this a good song for Toy Story?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="Do you remember when you were a kid? Did you love your toys?" songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
