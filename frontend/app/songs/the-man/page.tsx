import BackLink from "@/components/BackLink";
import LessonHero from "@/components/LessonHero";
import LessonProgress from "@/components/LessonProgress";
import LessonSections from "@/components/LessonSections";
import CheckAllActivity from "@/components/activities/CheckAllActivity/CheckAllActivity";
import ChoiceLyricsActivity from "@/components/activities/ChoiceLyricsActivity/ChoiceLyricsActivity";
import HomeworkActivity from "@/components/activities/Homework/HomeworkActivity";
import InlineWordOrderActivity from "@/components/activities/InlineWordOrderActivity/InlineWordOrderActivity";
import ListeningActivity from "@/components/activities/ListeningActivity/ListeningActivity";
import MatchingActivity from "@/components/activities/MatchingActivity/MatchingActivity";
import OrderLyricsActivity from "@/components/activities/OrderLyricsActivity/OrderLyricsActivity";
import PartialWordLyricsActivity from "@/components/activities/PartialWordLyricsActivity/PartialWordLyricsActivity";
import WarmUpQuestions from "@/components/activities/WarmUp/WarmUp";
import { getSongMeta } from "@/data/songCatalog";
import { theMan, theManChorus, theManFinalChorus, theManFourthStanza, theManOpeningStanzas, theManThirdStanza } from "@/data/songs/theMan";
import { ChoiceLyricsProvider } from "@/hooks/useChoiceLyrics";
import { InlineWordOrderProvider } from "@/hooks/useInlineWordOrder";

export default function TheManPage() {
  const song = getSongMeta("the-man");

  return (
    <main className="page-shell lesson-page">
      <BackLink />
      <LessonHero title={song.title} artist={song.artist} description={song.description} level={song.level} topic={song.topic} coverImage={song.coverImage} coverClass={song.coverClass} />
      <LessonProgress />
      <ChoiceLyricsProvider>
        <InlineWordOrderProvider>
          <LessonSections
            beforeSong={(
              <>
                <WarmUpQuestions step="Warm-up" title="Warm-up Questions" questions={["Do you like Taylor Swift?", "Can pop music be political?"]} />
                <MatchingActivity step="Vocabulary" title="Match The Words To Their Meanings" description="Match each word or expression with its meaning. Click one to use the next box, or drag it to a specific box. Use the speaker button to hear it." words={theMan.vocabulary} />
                <WarmUpQuestions step="Vocabulary practice" title="Use The New Words" description="Discuss the questions and try to use the new vocabulary." layout="two-column" questions={["Are you a fearless person?", "What are you sick of?", "Do you brag about anything sometimes?", "Do young people play the field too much nowadays?"]} />
              </>
            )}
            listeningIntro={<ListeningActivity step="Listen" title="Listen To The Song" description="Listen to the song before starting the lyrics activities." embedUrl={theMan.youtube.embedUrl} embedTitle={theMan.youtube.title} />}
            listeningActivities={[
              { label: "First and Second Stanzas", content: <PartialWordLyricsActivity step="Stanza 1" title="First and Second Stanzas" description="Complete each word while you listen. The hyphens show how many letters are missing." lyrics={theManOpeningStanzas.lyrics} /> },
              { label: "Chorus", content: <InlineWordOrderActivity step="Stanza 2" title="Chorus" description="Rearrange the highlighted words or sentence parts within each lyric line." lines={theManChorus.lines} /> },
              { label: "Third Stanza", content: <OrderLyricsActivity step="Stanza 3" title="Third Stanza" description="Put the lyric lines in order. Click two lines to swap them, or drag one line onto another." items={theManThirdStanza.items} /> },
              { label: "Fourth Stanza", content: <ChoiceLyricsActivity step="Stanza 4" title="Fourth Stanza" description="Choose between verb + -ing and to + base form while you listen." lyrics={theManFourthStanza.lyrics} /> },
              { label: "Final Chorus", content: <InlineWordOrderActivity step="Stanza 5" title="Final Chorus" description="Rearrange the highlighted words or sentence parts within each lyric line." lines={theManFinalChorus.lines} /> },
            ]}
            checkAnswers={<CheckAllActivity title="Check All Answers" description="When you finish the song activities, check all your answers at once." />}
            afterSong={(
              <>
                <aside className="cultural-note artist-quote" aria-labelledby="the-man-artist-quote">
                  <p className="section-kicker">What does the artist have to say?</p>
                  <h2 id="the-man-artist-quote">Taylor Swift on “The Man”</h2>
                  <blockquote>
                    “It was a song that I wrote from my personal experience, but also from a general experience that I’ve heard from women in all parts of our industry. And I think that the more we can talk about it in a song like that, the better off we’ll be in a place to call it out when it’s happening. So many of these things are ingrained in even women, these perceptions, and it’s really about re-training your own brain to be less critical of women when we are not criticizing men for the same things. So many things that men do, you know, can be phoned-in that cannot be phoned-in for us.”
                  </blockquote>
                  <p className="artist-quote__byline">Taylor Swift</p>
                  <a className="artist-quote__source" href="https://www.billboard.com/music/pop/taylor-swift-cover-story-outtakes-the-man-8546109/" target="_blank" rel="noreferrer">Source: Billboard</a>
                </aside>
                <WarmUpQuestions step="Wrap-up" title="Talk About The Song" description="Discuss these questions after listening to the song." layout="two-column" questions={["What is the song's main message?", "Is sexism real in society today?", "Who is the Leo mentioned in the song?", "Why does she say, 'I would be the man'? Would that be true?", "Are successful women and men treated in the same way?", "Can a song help people notice sexism? How?"]} />
                <HomeworkActivity step="Homework" title="Writing And Student Report" description="Write or record your answer, then save your work." prompt="Do you have an example of sexism in your life? Is it something normal in society nowadays?" songTitle="The Man" />
              </>
            )}
          />
        </InlineWordOrderProvider>
      </ChoiceLyricsProvider>
    </main>
  );
}
