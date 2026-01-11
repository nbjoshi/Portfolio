import Link from "next/link";
import { useRouter } from "next/router";
import {
  Home,
  FolderKanban,
  Briefcase,
  User,
  Mail,
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
    { icon: FolderKanban, label: "Projects", href: "/projects" },
    { icon: Briefcase, label: "Experience", href: "/experience" },
    { icon: User, label: "About", href: "/about" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-[#0a0a0a]/95 backdrop-blur-md z-40 flex flex-col transition-all duration-300 border-r border-[#1a1a1a] ${
        isCollapsed ? "w-16 items-center" : "w-56"
      }`}
    >
      <div
        className={`p-5 flex flex-col h-full ${
          isCollapsed ? "items-center" : ""
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center mb-6 ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          {!isCollapsed && (
            <h2 className="text-white text-xl font-semibold tracking-tight">
              Neel Joshi
            </h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={`${isCollapsed ? "" : "ml-auto"} hover:bg-[#1a1a1a]`}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Navigation Label */}
        {!isCollapsed && (
          <div className="mb-3">
            <span className="text-[#666] text-xs font-medium uppercase tracking-wider">
              Nav
            </span>
            <div className="mt-2 border-b border-[#1a1a1a]" />
          </div>
        )}

        {/* Navigation Items */}
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              router.pathname === item.href ||
              (item.href !== "/" && router.pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                title={isCollapsed ? item.label : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg group relative
                  transition-all duration-200 ease-out
                  ${isCollapsed ? "justify-center" : ""}
                  ${
                    isActive
                      ? "text-white bg-[#1a1a1a]"
                      : "text-[#888] hover:text-white hover:bg-[#1a1a1a]/50"
                  }`}
              >
                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-[#1ED760] rounded-r-full" />
                )}
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && (
                  <span className="font-medium text-sm whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="pt-4 border-t border-[#1a1a1a]">
            <p className="text-[#555] text-xs">© 2026 Neel Joshi</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
