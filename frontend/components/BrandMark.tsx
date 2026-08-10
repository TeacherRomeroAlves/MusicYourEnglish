import Link from "next/link";
import Image from "next/image";

export default function BrandMark() {
  return (
    <Link className="brand-mark" href="/" aria-label="Music Your English home">
      <Image
        className="brand-logo"
        src="/brand/music-your-english-logo.png"
        alt=""
        width={42}
        height={42}
        priority
      />
      <span>Music <strong>Your English</strong></span>
    </Link>
  );
}
