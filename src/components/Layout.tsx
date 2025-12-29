import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import BottomPlayer from "./BottomPlayer";
import { useSidebar } from "@/contexts/SidebarContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main
        className={`flex-1 pb-24 overflow-y-auto bg-[#121212] transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {children}
      </main>
      <BottomPlayer />
    </div>
  );
};

export default Layout;
