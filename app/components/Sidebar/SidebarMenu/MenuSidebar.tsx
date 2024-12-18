'use client'

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/app/UI/SidebarUI/sidebar';
import { Heart, Home, MessageSquareText } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const MenuSidebar = () => {
  const pathname = usePathname();

  const items = [
    {
      title: "Home",
      url: "/user/home",
      icon: Home,
    },
    {
      title: "Articles",
      url: "/user/articles",
      icon: MessageSquareText,
    },
    {
      title: "Favourites",
      url: "/user/favorites",
      icon: Heart,
    },
  ]

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url} className={pathname === item.url ? 'font-bold' : ''}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>

  )
}

export default MenuSidebar