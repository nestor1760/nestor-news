"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"


const Dashboard = () => {
  const { data: session } = useSession()

  return (
    <>
      {
        (session)
          ? (
            <div className="flex items-start justify-center flex-col h-screen">
              <Image
                width={200}
                height={200}
                src={session.user?.image as string} alt="user-avatar"
                className="rounded-full"
              />
              <h1 className="text-3xl text-green-500 font-bold">Welcome back, {session.user?.name}</h1>
              <p className="text-2xl text-blue-500 font-bold">email: {session.user?.email}</p>
              <div className="flex my-2">
                <button onClick={() => signOut()} className="border border-black rounded-lg mr-2 p-2">Sign out</button>
              </div>
            </div>
          )
          : (
            <div className="flex items-center justify-center flex-col h-screen">
              <h1 className="text-3xl text-red-500 font-bold">You&lsquo;re not logged in</h1>
              <div className="flex my-2">
                <button onClick={() => signIn("github")} className="border border-black rounded-lg mr-2 p-2">Sign in with Github</button>
                <button onClick={() => signIn("google")} className="border border-black rounded-lg p-2">Sign in with Google</button>
              </div>
            </div>
          )
      }
    </>
  )
}

export default Dashboard