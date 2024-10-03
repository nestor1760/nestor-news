import { getServerSession } from "next-auth";
import { authOptions } from "./lib/authOptions";
import User from "./(dashboard)/user/page";
import SignIn from "./(auth)/sign-in/page";


export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="h-screen flex items-center justify-center flex-col w-full">
      {(session?.user) ? <User /> : <SignIn />}
    </div>
  );
}
