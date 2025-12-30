import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

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
              className="w-full h-full object-cover object-[60%_0%] scale-[1.75]"
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
                My journey didn't start with code; it started with a fascination
                for dermatology. I entered university on the pre-med track,
                having spent years researching skincare science to solve my own
                health challenges. However, everything changed during my
                freshman fall when I took an introductory Python course (COMP
                110).
              </p>

              <p className="text-[#B3B3B3] leading-relaxed mt-2">
                I fell in love with the logic and immediate feedback loop of
                programming. That same semester, I joined Computer Science for
                Social Good, where I saw how web development could create
                tangible impact. I realized that while I loved the science of
                medicine, my true passion lay in building solutions. I swapped
                the stethoscope for a text editor, and I haven't looked back
                since.
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
                On campus, I stay active in the tech community through clubs
                like App Team Carolina and Computer Science for Social Good. I
                also serve as a Teaching Assistant for COMP 426: Modern Web
                Programming, where I help other students build their own
                foundation in full-stack development.
              </p>
              <p className="text-[#B3B3B3] leading-relaxed mt-2">
                What ties all of my experience together is the same motivation:
                I like taking problems, breaking them down into clear solutions,
                and delivering something people can actually use. I get the
                chance to express my creative side through some of my side
                projects which you can find in the experience section!
              </p>
              <p className="text-[#B3B3B3] leading-relaxed mt-2">
                If you’re building something interesting or just want to talk
                computer science, feel free to reach out. My social media is in
                the bottom right corner!
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}
