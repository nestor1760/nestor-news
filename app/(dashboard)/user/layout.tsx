import { AppSidebar } from "@/app/components/Sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/app/UI/SidebarUI/sidebar";


export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-[100vh] overflow-hidden">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
