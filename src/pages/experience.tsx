import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
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

interface Class {
  code: string;
  name: string;
  semester: string;
  year: string;
  description: string;
}

const classes: Class[] = [
  {
    code: "COMP 110",
    name: "Introduction to Programming",
    semester: "Fall",
    year: "2023",
    description: "...",
  },
  {
    code: "MATH 381",
    name: "Discrete Math",
    semester: "Spring",
    year: "2024",
    description: "...",
  },
  {
    code: "COMP 210",
    name: "Data Structures and Algorithms",
    semester: "Spring",
    year: "2024",
    description: "...",
  },
  {
    code: "MATH 347",
    name: "Linear Algebra",
    semester: "Fall",
    year: "2024",
    description: "...",
  },
  {
    code: "STOR 120",
    name: "Foundations of Statistics and Data Science",
    semester: "Fall",
    year: "2024",
    description: "...",
  },
  {
    code: "COMP 301",
    name: "Design Patterns and Object-Oriented Programming",
    semester: "Fall",
    year: "2024",
    description: "...",
  },
  {
    code: "COMP 211",
    name: "Systems Fundamentals",
    semester: "Fall",
    year: "2024",
    description: "...",
  },
  {
    code: "COMP 433",
    name: "Mobile Development",
    semester: "Spring",
    year: "2025",
    description: "...",
  },
  {
    code: "COMP 426",
    name: "Modern Web Development",
    semester: "Spring",
    year: "2025",
    description: "...",
  },
  {
    code: "COMP 421",
    name: "Files and Databases",
    semester: "Spring",
    year: "2025",
    description: "...",
  },
  {
    code: "COMP 550",
    name: "Algorithms and Analysis",
    semester: "Spring",
    year: "2025",
    description: "...",
  },
  {
    code: "COMP 455",
    name: "Models of Languages and Computation",
    semester: "Fall",
    year: "2025",
    description: "...",
  },
  {
    code: "COMP 311",
    name: "Computer Architecture",
    semester: "Fall",
    year: "2025",
    description: "...",
  },
  {
    code: "MATH 233",
    name: "Multivariable Calculus",
    semester: "Fall",
    year: "2025",
    description: "...",
  },
];

const ProjectsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="px-12">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => {
            const isCenter = current === index;
            const isSide =
              Math.abs(current - index) === 1 ||
              (current === 0 && index === projects.length - 1) ||
              (current === projects.length - 1 && index === 0);

            return (
              <CarouselItem
                key={project.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/3"
              >
                <motion.div
                  variants={itemVariants}
                  className={`relative transition-all duration-500 ${
                    isCenter
                      ? "scale-100 z-10"
                      : isSide
                      ? "scale-90 blur-sm opacity-60"
                      : "scale-75 blur-md opacity-40"
                  }`}
                >
                  <motion.div
                    whileHover={isCenter ? { scale: 1.05 } : {}}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ProjectCard
                      title={project.title}
                      subtitle={project.subtitle}
                      imageUrl={project.imageUrl}
                      repoUrl={project.repoUrl}
                    />
                  </motion.div>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-[#1ED760] hover:bg-[#1ed760]/90 border-[#1ED760] text-white" />
        <CarouselNext className="bg-[#1ED760] hover:bg-[#1ed760]/90 border-[#1ED760] text-white" />
      </Carousel>
    </div>
  );
};

const generateBadge = (skill: string, path: string) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge
        variant="outline"
        className="
  group rounded-full
  flex items-center
  border-white/15 bg-white/[0.02]
  transition-all duration-200
  hover:-translate-y-[1px]
  hover:border-[#00E5FF]/60
  hover:shadow-[0_0_18px_rgba(0,229,255,0.35)
  hover:bg-white/[0.04]"
      >
        <span
          className="
  
  mr-2 flex h-10 w-10 items-center justify-center rounded-full
  bg-white/5
  transition-all duration-200
  group-hover:bg-[#00E5FF]/10
  group-hover:shadow-[0_0_16px_rgba(0,229,255,0.35)]
  overflow-hidden
  shrink-0
  "
        >
          <img
            src={`/icons/${path}`}
            alt={skill}
            className="max-h-7 max-w-7 h-auto w-auto object-contain"
          />
        </span>

        <span className="transition-colors duration-200 group-hover:text-[#BFF7FF]">
          {skill}
        </span>
      </Badge>
    </div>
  );
};

export default function Experience() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full relative max-w-7xl mx-auto p-8"
    >
      {/* Timeline */}
      <motion.div variants={itemVariants}>
        <Timeline />
      </motion.div>

      {/* Skills Card */}
      <motion.div variants={itemVariants}>
        <Card className="bg-[#181818] mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Languages */}
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

              {/* Frontend */}
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

              {/* Backend */}
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

              {/* Infrastructure */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b border-[#282828]">
                  Infrastructure
                </h3>
                <div className="flex flex-wrap gap-6">
                  {Object.entries(infrastructure).map(([language, filename]) =>
                    generateBadge(language, filename)
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Classes Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-[#181818] mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {classes.map((classItem, index) => (
                <motion.div
                  key={`${classItem.code}-${index}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-[#121212] border-[#282828] hover:border-[#1ED760]/50 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[#1ED760] font-semibold text-sm">
                              {classItem.code}
                            </span>
                            <span className="text-[#B3B3B3] text-xs group-hover:text-[#1ED760] transition-colors">
                              {classItem.semester} {classItem.year}
                            </span>
                          </div>
                          <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#1ED760] transition-colors">
                            {classItem.name}
                          </h3>
                          <p className="text-[#B3B3B3] text-sm leading-relaxed group-hover:text-white transition-colors">
                            {classItem.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-[#181818] py-8 mb-8">
          <CardContent>
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2 border-b border-[#282828] pb-2">
                Projects
              </h2>
            </motion.div>
            <ProjectsCarousel />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
