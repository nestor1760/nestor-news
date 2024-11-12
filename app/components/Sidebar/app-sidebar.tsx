import { Sidebar, SidebarContent } from "@/app/UI/SidebarUI/sidebar"
import MenuSidebar from "./SidebarMenu/MenuSidebar"
import HeaderSidebar from "./SidebarHeader/SidebarHeader"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/authOptions"
import FooterSidebar from "./SidebarFooter/SidebarFooter"

export async function AppSidebar() {
  const session = await getServerSession(authOptions)

  const defPath = '/media/default-avatar.svg'
  const userName = session?.user.name ? session?.user.name : session?.user.username
  const imagePath = session?.user.image ? session?.user.image : defPath

  return (
    <Sidebar side="left" variant="sidebar">
      <HeaderSidebar
        img={imagePath}
        name={userName}
      />
      <SidebarContent>
        <MenuSidebar />
      </SidebarContent>
      <FooterSidebar />
    </Sidebar>
  )
}

