import { ReactNode, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useSidebar } from "@/contexts/SidebarContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isCollapsed } = useSidebar();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays and loops
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <source src="/flow_gradient.mp4" type="video/mp4" />
      </video>

      {/* Dark Scrim Overlay */}
      <div
        className="fixed inset-0 bg-black/60 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Sidebar />
      <main
        className={`flex-1 pb-12 overflow-y-auto transition-all duration-300 relative z-10`}
        style={{
          marginLeft: isCollapsed ? "4rem" : "14rem",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
