import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

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

export default function Projects() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full relative max-w-7xl mx-auto p-8"
    >
      <div className="py-8">
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Projects</h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                imageUrl={project.imageUrl}
                repoUrl={project.repoUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
