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

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full relative bg-gradient-to-b from-[#1ED760]/20 to-[#121212] max-w-7xl mx-auto p-8"
    >
      {/* Hero Section */}
      <div className="relative pt-16 pb-8 overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end gap-6">
          <motion.div
            variants={itemVariants}
            className="relative h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-2xl flex-shrink-0 bg-[#333]"
          >
            <img
              src="https://picsum.photos/400/400?random=profile"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="flex-1 pb-4 text-center sm:text-left">
            <p className="text-sm text-[#B3B3B3] mb-2">PROFILE</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">Neel Joshi</h1>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
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
