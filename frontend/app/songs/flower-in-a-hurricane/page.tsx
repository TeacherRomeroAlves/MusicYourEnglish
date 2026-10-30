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
import { flowerInAHurricane, flowerInAHurricaneChorus, flowerInAHurricaneVersesOneAndTwo, flowerInAHurricaneVerseThree } from "@/data/songs/flowerInAHurricane";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export const metadata = {
  title: "Flower in a Hurricane - Justice | Music Your English",
  description: "Practice only, like, and the simple present with an Elementary English lesson based on Flower in a Hurricane from GTA VI.",
};

export default function FlowerInAHurricanePage() {
  const song = getSongMeta("flower-in-a-hurricane");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={<>
            <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know this song?", "Do you like video games?"]} />
            <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" words={flowerInAHurricane.vocabulary} />
            <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" layout="two-column" questions={[
              "Are hurricanes dangerous?",
              "What do you do now and then?",
              "Is it easy to walk away from a relationship?",
              "Do you hesitate when you have a second chance to do something?",
            ]} />
          </>}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={flowerInAHurricane.youtube.embedUrl} embedTitle={flowerInAHurricane.youtube.title} />}
          listeningActivities={[
            { label: "Chorus", content: <IconLyricsActivity step="Activity 1" title="Chorus" description="Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap. The first three lines of each part stay in sync." icons={flowerInAHurricaneChorus.icons} lyrics={flowerInAHurricaneChorus.lyrics} /> },
            { label: "Verses 1 And 2", content: <ChoiceLyricsActivity step="Activity 2" title="Verses 1 And 2" description="Click the word or verb form you hear in each lyric gap." lyrics={flowerInAHurricaneVersesOneAndTwo.lyrics} /> },
            { label: "Verse 3", content: <LyricsWordActivity step="Activity 3" title="Verse 3" description="Click a gap, then click a phrase to place it. Or click a phrase to use the next available gap. There are no extra phrases." words={flowerInAHurricaneVerseThree.words} lyrics={flowerInAHurricaneVerseThree.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={<>
            <aside className="cultural-note" aria-labelledby="flower-gta-cultural-note">
              <p className="section-kicker">Cultural note</p>
              <h2 id="flower-gta-cultural-note">Music in GTA VI</h2>
              <p>Grand Theft Auto VI, or GTA VI, is a video game by Rockstar Games. Its music includes radio songs and original music written for the story. The French duo Justice wrote the original music, and Rockstar lists Flower in a Hurricane on both the score album and the soundtrack album. Music can help players feel the mood of the game&apos;s world.</p>
              <a href="https://www.rockstargames.com/VI/music" target="_blank" rel="noopener noreferrer">Explore GTA VI music at Rockstar Games</a>
            </aside>
            <WarmUpQuestions step="Wrap-up" title="Talk About The Song" layout="two-column" questions={[
              "Does love make people hesitate?",
              "Is it easy for a flower to survive in a hurricane?",
              "Do you live your life intensely?",
              "Do you have a good partner in your life?",
            ]} />
            <HomeworkActivity step="Homework" title="Express Yourself" description="Write or record your answer, then save your work." prompt="Can a video game be similar to real life? Why or why not?" songTitle={song.title} />
          </>}
        />
      </IconLyricsProvider>
    </main>
  );
}
