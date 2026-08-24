import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";
import "@/styles/variables.css";
import "@/styles/layout.css";
import "@/styles/navigation.css";
import "@/styles/buttons.css";
import "@/styles/cards.css";
import "@/styles/activities.css";
import "@/styles/lesson.css";
import "@/styles/forms.css";
import "@/styles/reports.css";
import "@/styles/library.css";
import "@/styles/home.css";
import "@/styles/responsive.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Music Your English | Learn English Through Songs",
  description: "Interactive English lessons built around songs you love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={leagueSpartan.variable}
    >
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
