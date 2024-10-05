import Sidebar from "@/app/components/Sidebar/Sidebar";


export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full justify-end relative bg-cyan-400">
      {children}
      <Sidebar />
    </div>
  );
}
