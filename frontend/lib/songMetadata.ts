import type { Metadata } from "next";
import { getSongMeta, type SongMeta } from "@/data/songCatalog";

export const SITE_URL = "https://musicyourenglish.com";

export function getSongMetadata(slug: SongMeta["slug"]): Metadata {
  const song = getSongMeta(slug);
  const title = `${song.title} - ${song.artist} | Music Your English`;
  const description = `${song.level} English lesson. ${song.description}`;
  const url = `${SITE_URL}/songs/${slug}`;
  const image = {
    url: `${SITE_URL}/share/songs/${slug}?v=3`,
    width: 1200,
    height: 630,
    alt: `${song.title} by ${song.artist} - ${song.level} English lesson`,
    type: "image/png",
  };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", siteName: "Music Your English", locale: "en_US",
      title, description, url, images: [image],
    },
    twitter: {
      card: "summary_large_image", title, description, images: [image],
    },
  };
}
