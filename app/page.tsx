import Link from "next/link";
import User from "./components/User/User";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl">Home</h1>
      <Link href='/admin'>Open My Admin</Link>

      <h2>Client Session</h2>
      <User />

      <h2>Server Session</h2>
      {JSON.stringify(session)}
    </div>
  );
}
