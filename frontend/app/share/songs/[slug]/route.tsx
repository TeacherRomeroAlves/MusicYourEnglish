import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { songCatalog } from "@/data/songCatalog";

export const runtime = "nodejs";
export const dynamic = "force-static";

export function generateStaticParams() {
  return songCatalog.map(({ slug }) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const song = songCatalog.find((item) => item.slug === slug);
  if (!song) return new Response("Song not found", { status: 404 });

  // The catalog, not the URL parameter, determines the local asset path.
  const [bytes, logoBytes, regular, bold] = await Promise.all([
    readFile(path.join(process.cwd(), "public", song.coverImage)),
    readFile(path.join(process.cwd(), "public/brand/music-your-english-logo.png")),
    readFile(path.join(process.cwd(), "assets/fonts/LeagueSpartan-Regular.ttf")),
    readFile(path.join(process.cwd(), "assets/fonts/LeagueSpartan-Bold.ttf")),
  ]);
  const cover = await sharp(bytes).rotate().resize(390, 390, { fit: "inside" }).png().toBuffer();
  const logo = await sharp(logoBytes).resize(64, 64).png().toBuffer();
  const coverSrc = `data:image/png;base64,${cover.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "36px 48px", color: "#ffffff", background: "linear-gradient(125deg, #180815, #491037 65%, #7d1252)", fontFamily: "League Spartan" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 700 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Embedded asset rendered by ImageResponse. */}
          <img src={logoSrc} alt="" width={64} height={64} style={{ borderRadius: 14 }} />
          Music Your English
        </div>
        <div style={{ display: "flex", color: "#f7b9dc", fontSize: 20 }}>Learn English through songs</div>
      </div>
      <div style={{ display: "flex", width: "100%", gap: 48, alignItems: "center", justifyContent: "center", flex: 1 }}>
        <div style={{ display: "flex", width: 390, height: 390, flexShrink: 0, borderRadius: 22, overflow: "hidden", background: "#130c16", alignItems: "center", justifyContent: "center", border: "1px solid #9c5380" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders embedded bytes, not browser images. */}
          <img src={coverSrc} alt="" width={390} height={390} style={{ objectFit: "contain" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 600, alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <div style={{ display: "flex", color: "#ffb5d9", fontSize: 26.4, fontWeight: 700, marginBottom: 20 }}>ENGLISH SONG LESSON</div>
          <div style={{ display: "flex", justifyContent: "center", fontSize: song.title.length > 32 ? 52.8 : song.title.length > 20 ? 62.4 : 76.8, fontWeight: 700, lineHeight: 1.08, marginBottom: 20 }}>{song.title}</div>
          <div style={{ display: "flex", color: "#eadbe7", fontSize: song.artist.length > 36 ? 31.2 : 36, lineHeight: 1.25, marginBottom: 26 }}>{song.artist}</div>
          <div style={{ display: "flex", alignSelf: "center", padding: "12px 20px", borderRadius: 24, background: "#f650a0", color: "#210b1b", fontSize: 27.6, fontWeight: 700 }}>{song.level}</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", color: "#e4c7dc", fontSize: 20, marginTop: 16 }}>musicyourenglish.com</div>
    </div>,
    {
      width: 1200, height: 630,
      fonts: [
        { name: "League Spartan", data: regular, weight: 400, style: "normal" },
        { name: "League Spartan", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
