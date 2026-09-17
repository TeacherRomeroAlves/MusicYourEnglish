"use client";

import { useState } from "react";

interface SongStoryProps {
  title: string;
  artist: string;
  coverImage: string;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Cover image could not be loaded"));
    image.src = new URL(src, window.location.origin).href;
  });
}

function fitText(context: CanvasRenderingContext2D, text: string, maxWidth: number, initialSize: number) {
  let size = initialSize;
  do {
    context.font = `800 ${size}px Arial, sans-serif`;
    if (context.measureText(text).width <= maxWidth) break;
    size -= 2;
  } while (size > 42);
  return size;
}

function createStory(template: HTMLImageElement, cover: HTMLImageElement, title: string, artist: string): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas is unavailable");

  context.drawImage(template, 0, 0, 1080, 1920);

  context.fillStyle = "#fff";
  context.beginPath();
  context.roundRect(244, 704, 592, 592, 24);
  context.fill();
  const side = Math.min(cover.naturalWidth, cover.naturalHeight);
  context.drawImage(cover, (cover.naturalWidth - side) / 2, (cover.naturalHeight - side) / 2, side, side, 256, 716, 568, 568);

  context.textAlign = "center";
  context.fillStyle = "#fff";
  fitText(context, title, 870, 72);
  context.fillText(title, 540, 1398, 870);
  context.fillStyle = "#efd2e4";
  context.font = "500 42px Arial, sans-serif";
  context.fillText(artist, 540, 1470, 870);
  return canvas;
}

export default function SongStory({ title, artist, coverImage }: SongStoryProps) {
  const [status, setStatus] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleDownload = async () => {
    setIsCreating(true);
    setStatus("Creating your Story image...");
    try {
      const [template, cover] = await Promise.all([
        loadImage("/images/song-story-template.png"),
        loadImage(coverImage),
      ]);
      const canvas = createStory(template, cover, title, artist);
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
      if (!blob) throw new Error("Story image could not be created");
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-story.png`;
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 30000);
      setStatus("Story image downloaded. Add it to your Instagram Story!");
    } catch {
      setStatus("We couldn't create the Story image. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <section className="song-story" aria-labelledby="song-story-title">
      <div>
        <p className="section-kicker">Share your progress</p>
        <h3 id="song-story-title">Make it a Story</h3>
        <p>Download a ready-to-post Instagram Story featuring this song. You can share it from your phone.</p>
      </div>
      <div className="song-story__action">
        <button className="action-btn" type="button" onClick={handleDownload} disabled={isCreating}>
          {isCreating ? "Creating Story..." : "Download Instagram Story"}
        </button>
        <p role="status" aria-live="polite">{status}</p>
      </div>
    </section>
  );
}
