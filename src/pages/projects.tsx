import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  getFeaturedProjects,
  getOtherProjects,
  Project,
} from "@/data/projects";

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

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm hover:border-[#1ED760]/30 transition-all h-full overflow-hidden group">
        {/* Image */}
        <div
          className={`relative ${
            featured ? "h-48" : "h-32"
          } bg-[#1a1a1a] overflow-hidden`}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
        </div>

        <CardContent className={`${featured ? "p-6" : "p-4"}`}>
          {/* Title & Description */}
          <h3
            className={`text-white font-semibold mb-1 ${
              featured ? "text-xl" : "text-base"
            }`}
          >
            {project.title}
          </h3>
          <p className="text-[#888] text-sm mb-3">{project.subtitle}</p>

          {/* Impact Bullets */}
          {project.impact && project.impact.length > 0 && (
            <ul className={`space-y-1.5 mb-4 ${featured ? "" : "space-y-1"}`}>
              {project.impact
                .slice(0, featured ? 3 : 3)
                .map((bullet, index) => (
                  <li
                    key={index}
                    className="text-[#666] text-xs flex items-start gap-2"
                  >
                    <span className="text-[#1ED760]">→</span>
                    {bullet}
                  </li>
                ))}
            </ul>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, featured ? 6 : 3).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs text-[#888] border-[#333] bg-transparent"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            {project.caseStudySlug && (
              <Link
                href={`/projects/${project.caseStudySlug}`}
                className="px-3 py-1.5 bg-[#1ED760] text-black text-xs font-medium rounded-md hover:bg-[#1ed760]/90 transition-all flex items-center gap-1"
              >
                Case Study
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#333] text-white text-xs font-medium rounded-md hover:border-[#1ED760] hover:bg-[#1ED760]/10 transition-all flex items-center gap-1"
            >
              <Github className="w-3 h-3" />
              GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-[#333] text-white text-xs font-medium rounded-md hover:border-[#1ED760] hover:bg-[#1ED760]/10 transition-all flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                Live
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Projects() {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = getOtherProjects();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full relative max-w-6xl mx-auto px-8 py-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-[#888] text-lg">
          A selection of work I've built — from iOS apps to full-stack
          platforms.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1ED760]" />
          Featured Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </motion.section>

      {/* Other Projects */}
      <motion.section variants={itemVariants}>
        <h2 className="text-white text-xl font-semibold mb-6">More Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
