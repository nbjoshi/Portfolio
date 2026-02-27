import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

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

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [commits, setCommits] = useState<string[]>([]);
  const [commitsLoading, setCommitsLoading] = useState(true);
  const [commitsError, setCommitsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch("/api/github");
        const data = await response.json();
        if (data.error) {
          setCommitsError(data.error);
        } else if (data.response?.length) {
          const messages = data.response
            .slice(0, 5)
            .map((c: { commit: { message: string } }) =>
              c.commit.message.split("\n")[0].trim(),
            );
          setCommits(messages);
        }
      } catch (error) {
        setCommitsError("Failed to fetch commits");
      } finally {
        setCommitsLoading(false);
      }
    };
    fetchCommits();
  }, [setCommits, setCommitsError, setCommitsLoading]);

  const copyEmail = () => {
    navigator.clipboard.writeText("nbjoshi@unc.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const proofBullets = [
    "Building production-grade software APIs in Spring Boot + React/TypeScript",
    "Working on an iOS app (SwiftUI) w/ Supabase + AI screenshot identification",
    "Full-time student at UNC Chapel Hill",
  ];

  const credentialCards = [
    {
      title: "Part-Time Intern",
      subtitle: "Bandwidth",
      icon: "💼",
    },
    {
      title: "Undergraduate Research Assistant",
      subtitle: "Starting research with Prof. Prasun Dewan",
      icon: "📚",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full relative max-w-6xl mx-auto px-8 py-12"
    >
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                Neel Joshi
              </h1>
              <p className="text-xl text-[#B3B3B3] leading-relaxed">
                Full-stack engineer building products with AI.
              </p>
            </div>

            {/* Proof Bullets */}
            <ul className="space-y-3">
              {proofBullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-[#888]"
                >
                  <span className="text-[#1ED760]">→</span>
                  <span className="text-sm leading-relaxed">{bullet}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* <Link
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-[#1ED760] text-black font-semibold rounded-lg hover:bg-[#1ed760]/90 transition-all flex items-center gap-2 hover:scale-105"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </Link> */}
              <Link
                href="/projects"
                className="px-6 py-3 border border-[#333] text-white font-semibold rounded-lg hover:border-[#1ED760] hover:bg-[#1ED760]/10 transition-all flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-2"
            >
              <a
                href="https://github.com/nbjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#888] hover:text-white hover:bg-[#1a1a1a] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/neelbjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#888] hover:text-white hover:bg-[#1a1a1a] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                onClick={copyEmail}
                className="p-2 rounded-lg text-[#888] hover:text-white hover:bg-[#1a1a1a] transition-all flex items-center gap-2"
                aria-label="Copy email"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-[#1ED760]" />
                    <span className="text-xs text-[#1ED760]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    <Copy className="w-3 h-3" />
                  </>
                )}
              </button>
              {/* <Link
                href="/Neel_Joshi_Resume.pdf"
                target="_blank"
                className="p-2 rounded-lg text-[#888] hover:text-white hover:bg-[#1a1a1a] transition-all flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                 Resume
              </Link> */}
            </motion.div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1ED760] via-[#1ED760]/50 to-transparent p-1 blur-sm" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#1a1a1a] shadow-2xl shadow-[#1ED760]/20">
                <img
                  src="/profile_pic.png"
                  alt="Neel Joshi"
                  className="w-full h-full object-cover object-[60%_0%] scale-[1.75]"
                />
                {/* Grain Overlay */}
                <div
                  className="absolute inset-0 opacity-10 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <motion.section variants={itemVariants} className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {credentialCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm hover:border-[#1ED760]/30 transition-all">
                <CardContent className="p-4 flex items-center gap-4">
                  <span className="text-2xl">{card.icon}</span>
                  <div>
                    <p className="text-white font-medium">{card.title}</p>
                    <p className="text-[#888] text-sm">{card.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Now Section */}
      <motion.section variants={itemVariants} className="py-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1ED760] animate-pulse" />
              <h2 className="text-white font-semibold">Now</h2>
              <span className="text-[#555] text-xs ml-auto">
                Updated Jan 2026
              </span>
            </div>
            <div className="space-y-2 text-[#888] text-sm">
              <p>
                → Building an AI agent with LangChain for CineSense chatbot
                functionality
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Quick About */}
      <motion.section variants={itemVariants} className="py-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-xl font-semibold">About</h2>
              <Link
                href="/about"
                className="text-[#1ED760] text-sm hover:underline flex items-center gap-1"
              >
                Read more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <ul className="space-y-2 text-[#888] text-sm">
              <li>• UNC Chapel Hill, CS + Stats — Class of 2027</li>
              <li>
                • Builder: iOS + Web, AI Integrations, Full-Stack Development
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Recent Commits */}
      <motion.section variants={itemVariants} className="py-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-white text-xl font-semibold mb-4">
              Recent Commits
            </h2>
            {commitsLoading ? (
              <p className="text-[#888] text-sm">Loading…</p>
            ) : commitsError ? (
              <p className="text-[#888] text-sm">{commitsError}</p>
            ) : commits.length === 0 ? (
              <p className="text-[#888] text-sm">No recent commits</p>
            ) : (
              <ul className="space-y-2">
                {commits.map((msg, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#888] text-sm"
                  >
                    <span className="text-[#1ED760]">→</span>
                    <span className="leading-relaxed">{msg}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </motion.section>
    </motion.div>
  );
}
