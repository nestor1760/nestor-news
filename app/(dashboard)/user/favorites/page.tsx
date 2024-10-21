import { authOptions } from '@/app/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        Favorites
      </div>
    )
  } else {
    redirect("/sign-in");
  }
}

export default page