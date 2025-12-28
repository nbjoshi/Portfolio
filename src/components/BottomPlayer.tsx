import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  File,
  Play,
  SkipForward,
  SkipBack,
  Repeat,
} from "lucide-react";
import Image from "next/image";
import ResumeModal from "./ResumeModal";
import { Button } from "@/components/ui/button";

const BottomPlayer = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/nbjoshi",
      label: "GitHub",
      isLink: true,
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/neelbjoshi",
      label: "LinkedIn",
      isLink: true,
    },
    {
      icon: Mail,
      href: "mailto:nbjoshi@unc.edu",
      label: "Email",
      isLink: true,
    },
    { icon: File, href: "#", label: "Resume", isLink: false },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-[#000000] border-t border-[#282828] z-50 flex items-center justify-between px-6">
        {/* Album Art & Song Info */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0 bg-[#333]">
            <Image
              src="https://picsum.photos/200/200?random=avatar"
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-white text-sm font-medium truncate">
              Hire Me
            </span>
            <span className="text-[#B3B3B3] text-xs truncate">Neel Joshi</span>
          </div>
        </div>

        <div className="flex items-center flex-col">
          {/* Top */}
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="p-2">
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="p-2">
              <Play className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="p-2">
              <SkipForward className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="p-2">
              <Repeat className="w-5 h-5" />
            </Button>
          </div>
          {/* Bottom */}
          <div></div>
        </div>

        {/* Social Links (Controls) */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            if (social.isLink) {
              return (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="p-2"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              );
            } else {
              return (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsResumeOpen(true)}
                  className="p-2"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              );
            }
          })}
        </div>
      </div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default BottomPlayer;
