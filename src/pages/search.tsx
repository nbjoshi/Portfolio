import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const categories = [
  { id: "1", name: "Frontend", color: "bg-blue-600" },
  { id: "2", name: "Backend", color: "bg-purple-600" },
  { id: "3", name: "Design", color: "bg-pink-600" },
  { id: "4", name: "Mobile", color: "bg-green-600" },
  { id: "5", name: "DevOps", color: "bg-orange-600" },
  { id: "6", name: "AI/ML", color: "bg-red-600" },
  { id: "7", name: "Database", color: "bg-yellow-600" },
  { id: "8", name: "Security", color: "bg-indigo-600" },
];

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

export default function Search() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full p-8"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Browse Categories</h1>
        <p className="text-[#B3B3B3]">Explore by skill area</p>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className={`${category.color} aspect-square p-6 cursor-pointer hover:opacity-90 transition-opacity`}>
              <div className="h-full flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

