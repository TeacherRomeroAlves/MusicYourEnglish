"use client";

import { useState } from "react";
import Link from "next/link";
import BrandMark from "./BrandMark";
import AuthButton from "./AuthButton";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Explore Songs", href: "/songs" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Teachers", href: "/#for-teachers" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <BrandMark />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span /><span />
        </button>
        <div className={`nav-panel${isOpen ? " is-open" : ""}`} id="primary-navigation">
          <nav className="main-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/music.yourenglish/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Instagram
            </a>
          </nav>
          <div className="nav-actions">
            <AuthButton onNavigate={() => setIsOpen(false)} />
            <a
              className="button button--secondary button--compact"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeOPF6KSC_AeLO1EG7sn-_qZ8h7K2clnojW46OkE6YzMlPELw/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Send Feedback
            </a>
            <Link className="button button--primary button--compact" href="/songs" onClick={() => setIsOpen(false)}>
              Start exploring
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
