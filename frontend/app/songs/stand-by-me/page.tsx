import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { standByMe, standByMeVerseOne, standByMeVerseTwo } from "@/data/songs/standByMe";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export default function StandByMePage() {
  const song = getSongMeta("stand-by-me");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
          <LessonSections
            beforeSong={<>
              <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Ben E. King?", "Do you enjoy old soul and R&B songs?"]} />
              <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Choose a word, then choose its meaning. You can also drag a word to a definition. Use the speaker button to hear it." words={standByMe.vocabulary} />
              <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Who always stands by you?", "What are you afraid of?", "When did you last shed a tear?", "What can make a friendship crumble?"]} />
            </>}
            listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={standByMe.spotify.embedUrl} embedTitle={standByMe.spotify.title} />}
            listeningActivities={[
              { label: "Verse 1 And Chorus", content: <ChoiceLyricsActivity step="Activity 1" title="Verse 1 And Chorus" description="Choose the verb form you hear in each line." lyrics={standByMeVerseOne.lyrics} /> },
              { label: "Verse 2", content: <IconLyricsActivity step="Activity 2" title="Verse 2" description="Click an emoji to place it in the next gap, or drag it to a specific gap while you listen." icons={standByMeVerseTwo.icons} lyrics={standByMeVerseTwo.lyrics} /> },
            ]}
            checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
            afterSong={<>
              <aside className="cultural-note" aria-labelledby="stand-by-me-cultural-note">
                <p className="section-kicker">Cultural note</p>
                <h2 id="stand-by-me-cultural-note">A soul classic about support</h2>
                <p>Ben E. King recorded “Stand by Me” in 1961. King wrote it with Jerry Leiber and Mike Stoller, drawing inspiration from an older gospel tradition. The song became popular again when it was connected to the 1986 movie <em>Stand by Me</em>, and its message of loyalty continues to cross generations.</p>
              </aside>
              <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Who is the singer asking to stand by him?", "What parts of the song make you visualize images or scenarios?", "Is emotional support important in a friendship? Why?", "Who would you stand by during a difficult time?"]} />
              <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="Who always stands by you when life is difficult? Describe this person and explain how they support you." songTitle="Stand by Me" />
            </>}
          />
      </IconLyricsProvider>
    </main>
  );
}
