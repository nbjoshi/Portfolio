import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Search, Library } from "lucide-react";

const Sidebar = () => {
  const router = useRouter();
  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Library, label: "Your Library", href: "/library" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#000000] z-40 flex flex-col">
      <div className="p-6">
        <h2 className="text-white text-2xl font-bold mb-8">Portfolio</h2>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 transition-colors rounded-md group ${
                  isActive
                    ? "text-white bg-[#1a1a1a]"
                    : "text-[#B3B3B3] hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
