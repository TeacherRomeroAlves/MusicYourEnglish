import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import IconLyricsActivity from "@/components/activities/IconLyricsActivity/IconLyricsActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import TypingLyricsActivity from "@/components/activities/TypingLyricsActivity/TypingLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { niceToMeetYou, niceToMeetYouChorus, niceToMeetYouFirstStanza, niceToMeetYouThirdStanza } from "@/data/songs/niceToMeetYou";
import { IconLyricsProvider } from "@/hooks/useIconLyrics";

export default function NiceToMeetYouPage() {
  const song = getSongMeta("nice-to-meet-you");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <IconLyricsProvider>
        <LessonSections
          beforeSong={(
            <>
              <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you know Myles Smith?", "Do you like folk or acoustic pop?"]} />
              <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Match each word or expression with its meaning. Click one to use the next box, or drag it to a specific box. Use the speaker button to hear it." words={niceToMeetYou.vocabulary} />
              <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Do you like crowds?", "Do you feel lonely sometimes?", "Do you have any worries?", "Life slips by very fast. Ain't that right?"]} />
            </>
          )}
          listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={niceToMeetYou.youtube.embedUrl} embedTitle={niceToMeetYou.youtube.title} />}
          listeningActivities={[
            { label: "First Stanza", content: <IconLyricsActivity step="Stanza 1" title="First Stanza" description="Click or drag each emoji into the correct lyric gap while you listen." icons={niceToMeetYouFirstStanza.icons} lyrics={niceToMeetYouFirstStanza.lyrics} /> },
            { label: "Chorus", content: <TypingLyricsActivity step="Stanza 2" title="Chorus" description="Type the missing words using only the letters in the chart." allowedLetters={niceToMeetYouChorus.allowedLetters} lyrics={niceToMeetYouChorus.lyrics} /> },
            { label: "Third Stanza", content: <IconLyricsActivity step="Stanza 3" title="Third Stanza" description="Click or drag each emoji into the correct lyric gap while you listen." icons={niceToMeetYouThirdStanza.icons} lyrics={niceToMeetYouThirdStanza.lyrics} /> },
          ]}
          checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
          afterSong={(
            <>
              <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["Is the singer happy in the song? Why or why not?", "When do you use the expression 'nice to meet you'?", "Does the singer like to dance? Do you like it too?", "Do you enjoy your life?"]} />
              <HomeworkActivity step="Homework" title="Writing And Student Report" description="Write or record your answer, then save your work." prompt="Is it easy for you to meet new people? Why or why not? Do you have a specific strategy for making new friends?" songTitle="Nice To Meet You" />
            </>
          )}
        />
      </IconLyricsProvider>
    </main>
  );
}
