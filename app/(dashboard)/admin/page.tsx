import { authOptions } from '@/app/lib/authOptions';
import { getServerSession } from 'next-auth/next'
import Image from 'next/image';
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    return (
      <div className='flex items-center justify-center h-screen flex-col'>
        {(session?.user.image)
          ? <Image src={session?.user.image!} alt='avatar' width={200} height={200} />
          : null
        }
        {(session?.user.username)
          ? <h2 className='text-2xl'>Admin page - welcome back {session?.user.username}</h2>
          : <h2 className='text-2xl'>Admin page - welcome back {session?.user.name}</h2>
        }

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