import { Sidebar, SidebarContent } from "@/app/UI/SidebarUI/sidebar"
import MenuSidebar from "./SidebarMenu/MenuSidebar"
import HeaderSidebar from "./SidebarHeader/SidebarHeader"

export function AppSidebar() {
  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      <HeaderSidebar />
      <SidebarContent>
        <MenuSidebar />
      </SidebarContent>
    </Sidebar>
  )
}

