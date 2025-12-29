import Link from "next/link";
import { useRouter } from "next/router";
import {
  Home,
  Library,
  FolderCog,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useSidebar } from "@/contexts/SidebarContext";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebar } = useSidebar();
  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: FolderCog, label: "Experience", href: "/projects" },
    { icon: Library, label: "My Library", href: "/library" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-[#000000] z-40 flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <h2 className="text-white text-2xl font-bold">Portfolio</h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="ml-auto"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </Button>
        </div>
        <nav className="space-y-2 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                title={isCollapsed ? item.label : undefined}
                className={`flex items-center gap-4 px-4 py-3 rounded-md group
    transition-all duration-200 ease-out
    ${isCollapsed ? "justify-center" : ""}
    ${
      isActive
        ? "text-white bg-[#1a1a1a]"
        : "text-[#B3B3B3] hover:text-white hover:bg-[#1a1a1a] hover:translate-x-1"
    }`}
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
                {!isCollapsed && (
                  <span className="font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
