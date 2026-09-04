import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import LyricsWordActivity from "@/components/activities/LyricsWordActivity/LyricsWordActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import PronounLyricsActivity from "@/components/activities/PronounLyricsActivity/PronounLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { girlFromIpanema, girlFromIpanemaBridgeAndFinalVerse, girlFromIpanemaOpeningVerses } from "@/data/songs/girlFromIpanema";

export default function GirlFromIpanemaPage() {
  const song = getSongMeta("girl-from-ipanema");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <LessonSections
        beforeSong={<>
          <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know the music style bossa nova?", "Do you know Nat King Cole?"]} />
          <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Match each word or expression with its meaning. Click one to select it, then click its definition, or drag it to a specific box. Use the speaker button to hear it." words={girlFromIpanema.vocabulary} />
          <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Would you like to visit Ipanema and see the sea?", "Do you like samba or other Brazilian music?", "When you dance, do you sway from side to side?", "When you walk, do you look straight ahead?"]} />
        </>}
        listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={girlFromIpanema.spotify.embedUrl} embedTitle={girlFromIpanema.spotify.title} />}
        listeningActivities={[
          { label: "Opening Verses", content: <LyricsWordActivity step="Activity 1" title="Opening Verses" description="Click or drag each verb into the correct lyric gap while you listen. One verb is used twice." words={girlFromIpanemaOpeningVerses.words} lyrics={girlFromIpanemaOpeningVerses.lyrics} /> },
          { label: "Bridge And Final Verse", content: <PronounLyricsActivity step="Activity 2" title="Bridge And Final Verse" description="Type the correct pronoun or possessive adjective. Use the reference chart to help you." chartLabel="Pronouns and possessive adjectives" pronouns={girlFromIpanemaBridgeAndFinalVerse.pronouns} lyrics={girlFromIpanemaBridgeAndFinalVerse.lyrics} /> },
        ]}
        checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
        afterSong={<>
          <aside className="cultural-note" aria-labelledby="ipanema-cultural-note">
            <p className="section-kicker">Cultural note</p>
            <h2 id="ipanema-cultural-note">A Brazilian bossa nova classic</h2>
            <p>Nat King Cole recorded an English-language cover of the Brazilian song “Garota de Ipanema.” Antônio Carlos Jobim composed the music in 1962, Vinícius de Moraes wrote the original Portuguese lyrics, and Norman Gimbel later created the English lyrics. The song became one of the best-known examples of bossa nova around the world.</p>
          </aside>
          <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Where is the girl from?", "Does the singer love her from a distance?", "Does the girl notice the singer?", "How does the music make you feel?"]} />
          <HomeworkActivity step="Homework" title="Express Yourself" description="Answer the prompt in writing or record yourself speaking." prompt="Is there a girl or boy in your city who makes you go ‘ah’? Who is this person, and why do you feel this way?" songTitle="Girl from Ipanema" />
        </>}
      />
    </main>
  );
}
