import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
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

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickFacts = [
    "UNC Chapel Hill, CS + Stats — Class of 2027",
    "Builder: iOS + web, AI features, real-time systems, clean UX",
    "Care deeply about performance + reliability",
    "Currently looking for Summer 2026 internships",
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
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-[#888] text-lg">
          The quick version and the longer story.
        </p>
      </motion.div>

      {/* Quick Facts */}
      <motion.section variants={itemVariants} className="mb-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-white text-xl font-semibold mb-4">At a Glance</h2>
            <ul className="space-y-3">
              {quickFacts.map((fact, index) => (
                <li key={index} className="flex items-start gap-3 text-[#888]">
                  <span className="text-[#1ED760]">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Full Story */}
      <motion.section variants={itemVariants}>
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between text-left mb-4"
            >
              <h2 className="text-white text-xl font-semibold">
                The Longer Story
              </h2>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-[#888]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#888]" />
              )}
            </button>

            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 text-[#888] leading-relaxed">
                <p>
                  Hey — I'm Neel Joshi, a computer science student at the{" "}
                  <Link
                    href="https://www.unc.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4B9CD3] hover:underline"
                  >
                    University of North Carolina at Chapel Hill
                  </Link>{" "}
                  who loves building products that are creative, reliable, and
                  genuinely useful.
                </p>

                <p>
                  My journey didn't start with code; it started with a fascination
                  for dermatology. I entered university on the pre-med track,
                  having spent years researching skincare science to solve my own
                  health challenges. However, everything changed during my
                  freshman fall when I took an introductory Python course (COMP
                  110).
                </p>

                <p>
                  I fell in love with the inherent logic of programming and the
                  unique thrill of seeing my creative ideas come to life through
                  code. That same semester, I joined Computer Science for Social
                  Good, where I saw how web development could create tangible
                  impact. I realized that while I loved the science of medicine,
                  my true passion lay in building solutions. I swapped the
                  stethoscope for a text editor, and I haven't looked back since.
                </p>

                <p>
                  This past summer, I interned at{" "}
                  <Link
                    href="https://www.bandwidth.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#079CEE] hover:underline"
                  >
                    Bandwidth
                  </Link>{" "}
                  as a Software Development Intern, and have been working
                  part-time while attending school, where I've worked on
                  production tools and APIs that support high-volume workflows. A
                  big part of my work has been modernizing and extending legacy
                  systems, building Spring Boot services and React/TypeScript
                  dashboards, and pushing for clean interfaces, strong testing,
                  and maintainable architecture.
                </p>

                <p>
                  On campus, I stay active in the tech community through clubs
                  like App Team Carolina and Computer Science for Social Good. I
                  also serve as a Teaching Assistant for COMP 426: Modern Web
                  Programming, where I help other students build their own
                  foundation in full-stack development.
                </p>

                <p>
                  What ties all of my experience together is the same motivation:
                  I like taking problems, breaking them down into clear solutions,
                  and delivering something people can actually use. I get the
                  chance to express my creative side through some of my side
                  projects which you can find in the{" "}
                  <Link href="/projects" className="text-[#1ED760]">
                    projects section
                  </Link>
                  !
                </p>
              </div>
            </motion.div>

            {!isExpanded && (
              <p className="text-[#666] text-sm">
                Click to expand the full story...
              </p>
            )}
          </CardContent>
        </Card>
      </motion.section>
    </motion.div>
  );
}

