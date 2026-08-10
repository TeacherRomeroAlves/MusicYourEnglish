import Link from "next/link";

export default function BackLink() {
  return (
    <Link href="/songs" className="back-link">
    <span aria-hidden="true">←</span> Back to Songs
    </Link>
  );
}
