import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white p-4 flex gap-6">
      <Link href="/">
        <span className="font-bold cursor-pointer">Home</span>
      </Link>

      <Link href="/home">
        <span className="cursor-pointer">Go to Home</span>
      </Link>

      <Link href="/about">
        <span className="cursor-pointer">About</span>
      </Link>
    </header>
  );
}
