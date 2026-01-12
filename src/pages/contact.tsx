import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nbjoshi@unc.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nbjoshi",
      username: "@nbjoshi",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/neelbjoshi",
      username: "neelbjoshi",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full relative max-w-4xl mx-auto px-8 py-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-[#888] text-lg">
          I'm always open to discussing new opportunities, interesting projects,
          or just chatting about technology.
        </p>
      </motion.div>

      {/* Email Card */}
      <motion.section variants={itemVariants} className="mb-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm hover:border-[#1ED760]/30 transition-all">
          <CardContent className="p-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <div className="bg-[#1a1a1a] rounded-lg flex items-center justify-center w-12 h-12 min-w-12 min-h-12">
                <Mail className="w-5 h-5 text-white" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-white font-medium">Email</p>
                <p className="text-[#888] break-words">nbjoshi@unc.edu</p>
              </div>

              <button
                onClick={copyEmail}
                className="
        w-full sm:w-auto
        sm:ml-auto
        px-4 py-2 rounded-lg border border-[#333]
        text-white hover:border-[#1ED760] hover:bg-[#1ED760]/10
        transition-all flex items-center justify-center gap-2
        shrink-0
      "
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#1ED760]" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Social Links */}
      <motion.section variants={itemVariants} className="mb-8">
        <h2 className="text-white text-xl font-semibold mb-4">Social</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm hover:border-[#1ED760]/30 transition-all">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-[#1a1a1a]">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{link.label}</p>
                      <p className="text-[#888] text-sm">{link.username}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            );
          })}
        </div>
      </motion.section>

      {/* Location */}
      <motion.section variants={itemVariants}>
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#1a1a1a]">
                <MapPin className="w-6 h-6 text-[#888]" />
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-[#888]">Chapel Hill, NC</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </motion.div>
  );
}
