import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl">Home</h1>
      <Link href='/admin'>Open My Admin</Link>
    </div>
  );
}
