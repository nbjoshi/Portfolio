import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
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

const languages = [
  "Java",
  "Python",
  "JavaScript/TypeScript",
  "Swift",
  "SQL",
  "C",
  "HTML/CSS",
];

const frontend = [
  "TailwindCSS",
  "React",
  "TanStack Query",
  "React Router",
  "Next.js",
  "SwiftUI",
];

const testing = ["Jest", "Cypress", "JUnit", "Mockito", "TestNG"];

const backend = [
  "Spring Boot",
  "FastAPI",
  "Django",
  "Express.js/Node.js",
  "SQLAlchemy",
  "Drizzle",
  "Supabase",
];

const tools = [
  "Docker",
  "AWS",
  "MySQL",
  "PostgreSQL",
  "Supabase",
  "GitHub Actions",
  "Cursor",
  "Claude Code",
  "Google Gemini API",
];

// Focus Areas
const focusAreas = [
  {
    title: "Backend APIs",
    description: "RESTful services, Spring Boot, microservices",
  },
  {
    title: "Mobile Development",
    description: "iOS apps with SwiftUI, native performance",
  },
  {
    title: "Full-Stack Web",
    description: "React/Next.js frontends, real-time features",
  },
  {
    title: "ML/AI Integration",
    description: "AI-powered features, LLM APIs, vision models",
  },
];

interface ClassItem {
  code: string;
  name: string;
  semester: string;
  year: string;
  learned?: string[];
}

const classes: ClassItem[] = [
  {
    code: "COMP 110",
    name: "Introduction to Programming",
    semester: "Fall",
    year: "2023",
    learned: ["Python", "OOP", "Classes/Objects", "Functions", "Loops", "Variables", "Data Types"]
  },
  { code: "MATH 381", name: "Discrete Math", semester: "Spring", year: "2024", learned: ["Proofs", "Set Theory", "Relations"]},
  {
    code: "COMP 210",
    name: "Data Structures and Algorithms",
    semester: "Spring",
    year: "2024",
    learned: ["Java", "Data Structures", "Algorithms", "Sorting", "Searching", "Big-O Notation"]
  },
  { code: "MATH 347", name: "Linear Algebra", semester: "Fall", year: "2024", learned: ["Vectors", "Matrix Operations", "Eigenvalues"]},
  {
    code: "STOR 120",
    name: "Foundations of Statistics",
    semester: "Fall",
    year: "2024",
    learned: ["Probability", "Statistics", "Python", "Pandas", "Matplotlib", "Numpy"]
  },
  {
    code: "COMP 301",
    name: "Design Patterns and OOP",
    semester: "Fall",
    year: "2024",
    learned: ["Java", "OOP", "Design Patterns", "Testing"]
  },
  {
    code: "COMP 211",
    name: "Systems Fundamentals",
    semester: "Fall",
    year: "2024",
    learned: ["C", "Operating Systems", "Memory Management", "Processes"]
  },
  {
    code: "COMP 433",
    name: "Mobile Development",
    semester: "Spring",
    year: "2025",
    learned: ["Swift", "SwiftUI", "WidgetKit"]
  },
  {
    code: "COMP 426",
    name: "Modern Web Development",
    semester: "Spring",
    year: "2025",
    learned: ["React", "Next.js", "TypeScript", "TailwindCSS", "Supabase"]
  },
  {
    code: "COMP 421",
    name: "Files and Databases",
    semester: "Spring",
    year: "2025",
    learned: ["SQL", "ORMs", "Indexing", "ACID Properties"]
  },
  {
    code: "COMP 550",
    name: "Algorithms and Analysis",
    semester: "Spring",
    year: "2025",
    learned: ["Graph Theory", "Dynamic Programming", "Greedy", "NP-Completeness", "Big-O Notation", "Trees"]
  },
  {
    code: "COMP 455",
    name: "Models of Languages and Computation",
    semester: "Fall",
    year: "2025",
    learned: ["Automata", "Context-Free Languages", "Regular Expressions", "Pumping Lemma", "Turing Machines"]
  },
  {
    code: "COMP 311",
    name: "Computer Architecture",
    semester: "Fall",
    year: "2025",
    learned: ["MIPS", "Assembly", "Caches", "Processor Scheduling", "Memory", "Circuits", "Digital Logic"]
  },
  {
    code: "MATH 233",
    name: "Multivariable Calculus",
    semester: "Fall",
    year: "2025",
    learned: ["Vectors", "3-D Space, Regions, and Surfaces", "Partial Derivatives", "Double/Triple Integrals", "Vector Fields", "Line Integrals", "Surface Integrals"]
  },
  {
    code: "COMP 488",
    name: "Data Science in Business",
    semester: "Spring",
    year: "2026",
  },
  {
    code: "COMP 560",
    name: "Artificial Intelligence",
    semester: "Spring",
    year: "2026",
  },
  {
    code: "COMP 423",
    name: "Software Engineering",
    semester: "Spring",
    year: "2026",
  },
  { code: "STOR 435", name: "Probability", semester: "Spring", year: "2026" },
];

const SkillBadge = ({
  skill,
  variant = "language",
}: {
  skill: string;
  variant?: "language" | "frontend" | "backend" | "tools" | "testing";
}) => {
  const variantStyles = {
    language: "border-[#1ED760]/40 bg-[#1ED760]/10 text-[#1ED760]",
    frontend: "border-[#3B82F6]/40 bg-[#3B82F6]/10 text-[#3B82F6]",
    backend: "border-[#888]/30 bg-[#888]/10 text-[#888]",
    tools: "border-[#A855F7]/40 bg-[#A855F7]/10 text-[#A855F7]",
    testing: "border-[#F59E0B]/40 bg-[#F59E0B]/10 text-[#F59E0B]",
  };

  return (
    <Badge
      variant="outline"
      className={`${variantStyles[variant]} text-sm px-3 py-1 hover:scale-105 transition-transform cursor-default`}
    >
      {skill}
    </Badge>
  );
};

export default function Experience() {
  const [classesExpanded, setClassesExpanded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full relative max-w-6xl mx-auto px-8 py-12"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
        <p className="text-[#888] text-lg">
          Skills, focus areas, and coursework that shape my engineering
          practice.
        </p>
      </motion.div>

      <motion.section variants={itemVariants} className="mb-8">
        <Link href="/projects">
          <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm hover:border-[#1ED760]/30 transition-all cursor-pointer group">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h2 className="text-white text-xl font-semibold mb-1 group-hover:text-[#1ED760] transition-colors">
                  View My Projects
                </h2>
                <p className="text-[#888] text-sm">
                  Featured case studies and more work
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#888] group-hover:text-[#1ED760] group-hover:translate-x-1 transition-all" />
            </CardContent>
          </Card>
        </Link>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-white text-xl font-semibold mb-6">
              Focus Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg bg-[#1a1a1a]/50 border border-[#1a1a1a] hover:border-[#1ED760]/30 transition-all"
                >
                  <h3 className="text-white font-medium mb-1">{area.title}</h3>
                  <p className="text-[#666] text-sm">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-white text-xl font-semibold mb-6">Skills</h2>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#1ED760]" />
                <h3 className="text-white font-medium">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((skill) => (
                  <SkillBadge key={skill} skill={skill} variant="language" />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <h3 className="text-white font-medium">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontend.map((skill) => (
                  <SkillBadge key={skill} skill={skill} variant="frontend" />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#888]" />
                <h3 className="text-white font-medium">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {backend.map((skill) => (
                  <SkillBadge key={skill} skill={skill} variant="backend" />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <h3 className="text-white font-medium">Testing</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {testing.map((tool) => (
                  <SkillBadge key={tool} skill={tool} variant="testing" />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                <h3 className="text-white font-medium">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <SkillBadge key={tool} skill={tool} variant="tools" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Classes - Collapsible */}
      <motion.section variants={itemVariants}>
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <button
              onClick={() => setClassesExpanded(!classesExpanded)}
              className="w-full flex items-center justify-between text-left mb-4"
            >
              <div>
                <h2 className="text-white text-xl font-semibold">
                  Relevant Coursework
                </h2>
                <p className="text-[#666] text-sm">
                  {classes.length} courses completed
                </p>
              </div>
              {classesExpanded ? (
                <ChevronUp className="w-5 h-5 text-[#888]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#888]" />
              )}
            </button>

            <motion.div
              initial={false}
              animate={{
                height: classesExpanded ? "auto" : 0,
                opacity: classesExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2 overflow-visible">
                {classes.map((classItem, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, borderColor: "#1ED760" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-3 rounded-lg bg-[#1a1a1a]/50 border border-[#1a1a1a] transition-all duration-300"
                    style={{ transformOrigin: "center" }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#1ED760] font-mono text-xs">
                        {classItem.code}
                      </span>
                      <span className="text-[#555] text-xs">
                        {classItem.semester} {classItem.year}
                      </span>
                    </div>
                    <p className="text-white text-sm mb-2">{classItem.name}</p>
                    {classItem.learned && classItem.learned.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-[#282828]">
                        <div className="flex flex-wrap gap-1.5">
                          {classItem.learned.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-[#1ED760]/10 text-[#1ED760] border border-[#1ED760]/20 hover:border-[#1ED760]/40 transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {!classesExpanded && (
              <p className="text-[#666] text-sm">
                Click to view all courses...
              </p>
            )}
          </CardContent>
        </Card>
      </motion.section>
    </motion.div>
  );
}
