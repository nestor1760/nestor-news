import { authOptions } from '@/app/lib/authOptions';
import { getServerSession } from 'next-auth/next'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <h2 className='text-2xl'>Admin page - welcome back {session?.user.username}</h2>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <h2 className='text-2xl'>Please login to see this admin page</h2>
    </div>
  )
}

export default page