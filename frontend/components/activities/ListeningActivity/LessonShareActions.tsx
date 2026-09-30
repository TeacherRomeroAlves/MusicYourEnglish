"use client";

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export default function LessonShareActions() {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const getLessonUrl = () => `${window.location.origin}${window.location.pathname}`;

  const copyLink = async () => {
    const lessonUrl = getLessonUrl();
    await navigator.clipboard.writeText(lessonUrl);
    setCopyStatus("Link copied");
    window.setTimeout(() => setCopyStatus(""), 2200);
  };

  const shareLesson = async () => {
    const lessonUrl = getLessonUrl();

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Music Your English lesson",
          text: "Open this Music Your English lesson.",
          url: lessonUrl,
        });
        return;
      }
      await copyLink();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setCopyStatus("Could not copy the link");
    }
  };

  return (
    <>
      <div className="lesson-share-actions">
        <button className="lesson-share-button" type="button" onClick={shareLesson}>
          Share
        </button>
        <button className="lesson-share-button lesson-share-button--qr" type="button" onClick={() => setIsQrOpen(true)}>
          QR code
        </button>
        {copyStatus && <span className="lesson-share-status" role="status">{copyStatus}</span>}
      </div>

      {isQrOpen && (
        <div className="lesson-share-dialog" role="dialog" aria-modal="true" aria-labelledby="lesson-qr-title">
          <button className="lesson-share-dialog__backdrop" type="button" aria-label="Close QR code" onClick={() => setIsQrOpen(false)} />
          <div className="lesson-share-dialog__panel">
            <button className="lesson-share-dialog__close" type="button" aria-label="Close QR code" onClick={() => setIsQrOpen(false)}>
              Close
            </button>
            <p className="lesson-share-dialog__eyebrow">Share this lesson</p>
            <h2 id="lesson-qr-title">Scan to open this song page</h2>
            <p>Project this code so students can join the same lesson on their devices.</p>
            <div className="lesson-share-dialog__qr">
              <QRCodeSVG value={getLessonUrl()} size={260} level="M" includeMargin />
            </div>
            <button className="lesson-share-dialog__copy" type="button" onClick={copyLink}>
              Copy lesson link
            </button>
            {copyStatus && <span className="lesson-share-dialog__status" role="status">{copyStatus}</span>}
          </div>
        </div>
      )}
    </>
  );
}
