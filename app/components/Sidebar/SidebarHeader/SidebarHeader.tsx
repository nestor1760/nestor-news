import { authOptions } from '@/app/lib/authOptions'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/UI/Avatar/avatar'
import { SidebarHeader, SidebarMenu, SidebarMenuItem } from '@/app/UI/SidebarUI/sidebar'
import { getServerSession } from 'next-auth'

const HeaderSidebar = async () => {
  const session = await getServerSession(authOptions)

  const defPath = '/media/default-avatar.svg'

  return (
    // <SidebarHeader>
    //   <Avatar>
    //     <AvatarImage src={session?.user.image ? session?.user.image : defPath} />
    //     <AvatarFallback>CN</AvatarFallback>
    //   </Avatar>
    //   <span>
    //     {session?.user.name ? session?.user.name : session?.user.username}
    //   </span>
    // </SidebarHeader>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <Avatar>
            <AvatarImage src={session?.user.image ? session?.user.image : defPath} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )
}

export default HeaderSidebar