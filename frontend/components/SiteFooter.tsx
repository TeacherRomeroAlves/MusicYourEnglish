import Link from "next/link";
import BrandMark from "./BrandMark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <BrandMark />
          <p>Interactive English lessons built around the music people already love.</p>
          <span>Part of the Your English learning experience.</span>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/songs">Explore Songs</Link>
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/#for-teachers">For Teachers</Link>
          <a href="https://www.instagram.com/music.yourenglish/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a
            className="button button--secondary button--compact footer-feedback"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeOPF6KSC_AeLO1EG7sn-_qZ8h7K2clnojW46OkE6YzMlPELw/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
          >
            Send Feedback
          </a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Music Your English.</span>
        <span className="footer-creators">
          Created by{" "}
          <a href="https://www.instagram.com/teacherromeroalves?igsi=MWJkNnM2OHV3amE2cA==" target="_blank" rel="noreferrer">
            Teacher Romero Alves
          </a>{" "}
          and{" "}
          <a href="https://www.instagram.com/teacherlaisqueiroz?igsi=MWJkdTdmNTZvNGJtaQ==" target="_blank" rel="noreferrer">
            Teacher Lais Queiroz
          </a>
        </span>
        <span>Learn it. Hear it. Use it.</span>
      </div>
    </footer>
  );
}
