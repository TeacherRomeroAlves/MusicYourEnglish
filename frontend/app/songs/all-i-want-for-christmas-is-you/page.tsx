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
import { allIWantForChristmasIsYou, christmasOpeningVersesAndChorus, christmasVerseTwoAndChorus, christmasBridgeAndFinalVerse } from "@/data/songs/allIWantForChristmasIsYou";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export const metadata = {
  title: "All I Want for Christmas Is You - Mariah Carey | Music Your English",
  description: "Practice verbs and Christmas vocabulary with an Elementary English lesson based on Mariah Carey's holiday classic.",
};

export default function AllIWantForChristmasIsYouPage() {
  const song = getSongMeta("all-i-want-for-christmas-is-you");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like Mariah Carey?", "Is this song iconic?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={allIWantForChristmasIsYou.vocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "Do you like Christmas?",
              "Do you believe in Santa Claus, or did you as a child?",
              "What is underneath your Christmas tree?",
              "Which symbol best represents Christmas for you?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={allIWantForChristmasIsYou.youtube.embedUrl} embedTitle={allIWantForChristmasIsYou.youtube.title} />}
          listeningActivities={[
            { label: "Opening Verses And Chorus", content: <UnscrambleLyricsActivity step="Activity 1" title="Opening Verses And Chorus" description="Unscramble the letters shown in each gap and type the correct four-letter verb. The slow introduction repeats the opening lines and chorus; use this activity for those parts too." lyrics={christmasOpeningVersesAndChorus.lyrics} /> },
            { label: "Verse 2 And Chorus", content: <IconLyricsActivity step="Activity 2" title="Verse 2 And Chorus" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap." icons={christmasVerseTwoAndChorus.icons} lyrics={christmasVerseTwoAndChorus.lyrics} /> },
            { label: "Bridge And Final Verse", content: <LyricsWordActivity step="Activity 3" title="Bridge And Final Verse" description="Click a gap, then click an -ing verb to place it. Or click an -ing verb to use the next available gap. There are no extra words." words={christmasBridgeAndFinalVerse.words} lyrics={christmasBridgeAndFinalVerse.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <aside className="cultural-note" aria-labelledby="mariah-christmas-cultural-note">
              <p className="section-kicker">Cultural note</p>
              <h2 id="mariah-christmas-cultural-note">A Christmas classic</h2>
              <p>Mariah Carey released this song in 1994. It is still a Christmas favorite many years later, with people playing and singing it every holiday season. In 2023, the US Library of Congress chose it for its collection of important recordings, showing its special place in music and culture.</p>
              <a href="https://www.loc.gov/item/prn-23-036/national-recording-registry-inducts-music-from-madonna-mariah-carey-queen-latifah-daddy-yankee/2023-04-12/" target="_blank" rel="noopener noreferrer">Read more at the Library of Congress</a>
            </aside>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "What does Mariah want for Christmas?",
              "Is this a happy song? Why or why not?",
              "Is love more important than presents?",
              "Who do you like to spend Christmas with?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="What do you want for Christmas? Explain your answer." songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
