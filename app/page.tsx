import Link from "next/link";
import { buttonVariants } from "./UI/Button/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/authOptions";
import Admin from "./(dashboard)/admin/page";


export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="h-screen flex items-center justify-center flex-col w-full">
      {(session?.user)
        ?
        <Admin />
        :
        <>
          <h1 className="mb-3">Welcome to the NestorNews page</h1>
          <Link href='/sign-in' className={buttonVariants()}>Login</Link>
        </>

      }
    </div>
  );
}
