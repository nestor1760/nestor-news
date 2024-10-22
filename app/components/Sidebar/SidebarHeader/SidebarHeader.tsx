'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/app/UI/Avatar/avatar'
import { SidebarHeader, useSidebar } from '@/app/UI/SidebarUI/sidebar'
import { FC } from 'react'

type HeaderProps = {
  img: string,
  name: string | undefined | null
}

const HeaderSidebar: FC<HeaderProps> = ({ img, name }) => {
  const { open } = useSidebar()

  return (
    <SidebarHeader>
      <div className='flex items-center'>
        <Avatar className='mr-3'>
          <AvatarImage src={img} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {open && (
          <span className='text-lg font-semibold'>{name}</span>
        )}
      </div>
    </SidebarHeader>
  )
}

export default HeaderSidebar