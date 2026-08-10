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
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Music Your English.</span>
        <span>Learn it. Hear it. Use it.</span>
      </div>
    </footer>
  );
}
