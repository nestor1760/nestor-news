import Sidebar from "@/app/components/Sidebar/Sidebar";


export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen justify-end relative bg-cyan-400">
      <div style={{ flexGrow: 1 }}>
        {children}
      </div>
      <Sidebar />
    </div>
  );
}
