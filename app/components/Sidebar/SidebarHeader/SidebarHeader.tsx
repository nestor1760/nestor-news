import { authOptions } from '@/app/lib/authOptions'
import Avatar from '@/app/UI/Avatar/Avatar'
import { getServerSession } from 'next-auth'
import React from 'react'

const SidebarHeader = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className='w-full flex items-start p-6'>
      <Avatar path={session?.user.image ? session?.user.image : ''} />
      <p className='ml-[10px] font-bold'>
        {session?.user.name ? session?.user.name : session?.user.username}
      </p>
    </div>
  )
}

export default SidebarHeader