import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import BottomPlayer from "./BottomPlayer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 ml-64 bg-[#121212]">
        {children}
      </main>
      <BottomPlayer />
    </div>
  );
};

export default Layout;

