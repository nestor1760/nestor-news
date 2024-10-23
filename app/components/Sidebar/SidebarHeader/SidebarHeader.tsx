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
    <SidebarHeader className='flex items-center flex-col'>
      <Avatar>
        <AvatarImage src={img} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {open && (
        <span className='text-lg font-semibold'>{name}</span>
      )}
    </SidebarHeader>
  )
}

export default HeaderSidebar