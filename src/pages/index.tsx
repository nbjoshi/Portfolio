import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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

const languages: Record<string, string> = {
  Java: "Java.png",
  Python: "Python.jpeg",
  JavaScript: "JavaScript.png",
  TypeScript: "TypeScript.png",
  Swift: "Swift.png",
  SQL: "SQL.png",
  C: "C.png",
  HTML: "HTML.png",
  CSS: "CSS.png",
};

const frontend: Record<string, string> = {
  TailwindCSS: "Tailwind.png",
  React: "React.png",
  "TanStack Query": "TanStackQuery.png",
  "React Router": "ReactRouter.png",
  "Next.js": "Next.png",
  SwiftUI: "SwiftUI.jpeg",
};

const backend: Record<string, string> = {
  "Spring Boot": "SpringBoot.png",
  FastAPI: "FastApi.jpeg",
  Django: "Django.png",
  "Express.js": "Express.png",
  "Node.js": "Node.png",
};

const infrastructure: Record<string, string> = {
  Docker: "Docker.png",
  AWS: "AWS.png",
  MySQL: "MySQL.png",
  PostgreSQL: "PostgreSQL.png",
  Supabase: "Supabase.jpeg",
  "Git/GitHub Actions": "Git.png",
};

const testing: Record<string, string> = {
  Jest: "Jest.png",
  Cypress: "Cypress.jpeg",
  JUnit: "JUnit.png",
  TestNG: "TestNG.jpeg",
  Mockito: "Mockito.jpeg",
};

const artificialIntelligence: Record<string, string> = {
  ChatGPT: "ChatGPT.png",
  "Gemini API": "Gemini.png",
  Cursor: "Cursor.jpeg",
  "GitHub Copilot": "Copilot.png",
};

const generateBadge = (skill: string, path: string) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge
        variant="outline"
        className="
          group rounded-full pl-[7px] pr-3 py-1
          flex items-center
          border-white/15 bg-white/[0.02]
          transition-all duration-200
          hover:-translate-y-[1px]
          hover:border-[#00E5FF]/60
          hover:shadow-[0_0_18px_rgba(0,229,255,0.35)]
          hover:bg-white/[0.04]
        "
      >
        <span
          className="
            mr-2 flex h-10 w-10 items-center justify-center rounded-full
            bg-white/5
            transition-all duration-200
            group-hover:bg-[#00E5FF]/10
            group-hover:shadow-[0_0_16px_rgba(0,229,255,0.35)]
          "
        >
          <img
            src={`/icons/${path}`}
            alt=""
            className="h-6 w-6 object-contain"
          />
        </span>

        <span className="transition-colors duration-200 group-hover:text-[#BFF7FF]">
          {skill}
        </span>
      </Badge>
    </div>
  );
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full relative max-w-7xl mx-auto p-8"
    >
      {/* Hero Section */}
      <div className="relative pt-16 pb-8 overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end gap-6">
          <motion.div
            variants={itemVariants}
            className="group relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl flex-shrink-0 bg-[#333]"
          >
            <img
              src="/profile_pic.png"
              alt="Profile"
              className="w-full h-full object-cover object-[60%_20%] scale-150"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex-1 pb-4 text-center sm:text-left"
          >
            <p className="text-lg text-[#B3B3B3] mb-2">PROFILE</p>
            <h1
              className="
  text-4xl sm:text-5xl md:text-7xl lg:text-9xl
  font-extrabold tracking-tight
  text-white
  mb-6
  drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]
  [&_.Typewriter__cursor]:opacity-80
  [&_.Typewriter__cursor]:ml-1
"
            >
              Neel Joshi
            </h1>
          </motion.div>
        </div>
      </div>

      {/* About Me Section */}
      <motion.div variants={itemVariants} className="py-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Summary Card */}
          <Card className="bg-[#181818]">
            <CardHeader>
              <CardTitle className="text-white text-2xl">About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#B3B3B3] leading-relaxed">
                Hey — I’m Neel Joshi, a computer science student at the{" "}
                <Link
                  href="https://www.unc.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block text-[#4B9CD3]"
                >
                  University of North Carolina at Chapel Hill
                  <span className="block h-[2px] w-0 bg-current transition-all duration-500 group-hover:w-full" />
                </Link>{" "}
                who loves building products that are creative, reliable, and
                genuinely useful.
              </p>

              <p className="text-[#B3B3B3] leading-relaxed mt-2">
                I’m currently a Software Development Intern at{" "}
                <Link
                  href="https://www.bandwidth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block text-[#079CEE]"
                >
                  Bandwidth
                  <span className="block h-[2px] w-0 bg-current transition-all duration-500 group-hover:w-full" />
                </Link>{" "}
                (Raleigh, NC), where I’ve worked on production tools and APIs
                that support high-volume workflows. A big part of my work has
                been modernizing and extending internal systems—building Spring
                Boot services and React/TypeScript dashboards, and pushing for
                clean interfaces, strong testing, and maintainable architecture.
              </p>
              <p className="text-[#B3B3B3] leading-relaxed mt-2">
                What ties all of my experience together is the same motivation:
                I like taking ambiguous problems, breaking them down into clear
                systems, and delivering something people can actually use. I
                care a lot about engineering fundamentals—good APIs, thoughtful
                data models, observability, and performance—while still keeping
                an eye on product polish and user experience.
              </p>
              <p className="text-[#B3B3B3] leading-relaxed mt-2">
                If you’re building something interesting or just want to talk
                software, startups, or the best way to architect a clean
                project, feel free to reach out.
              </p>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className="bg-[#181818]">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b border-[#282828]">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    {Object.entries(languages).map(([language, filename]) =>
                      generateBadge(language, filename)
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b border-[#282828]">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    {Object.entries(frontend).map(([language, filename]) =>
                      generateBadge(language, filename)
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b border-[#282828]">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    {Object.entries(backend).map(([language, filename]) =>
                      generateBadge(language, filename)
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b border-[#282828]">
                    Infrastructure
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    {Object.entries(infrastructure).map(
                      ([language, filename]) =>
                        generateBadge(language, filename)
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b border-[#282828]">
                    Testing
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    {Object.entries(testing).map(([language, filename]) =>
                      generateBadge(language, filename)
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b border-[#282828]">
                    Artificial Intelligence (AI)
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    {Object.entries(artificialIntelligence).map(
                      ([language, filename]) =>
                        generateBadge(language, filename)
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}
