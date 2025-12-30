import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookOpen, Code, FileText, Globe } from "lucide-react";
import Image from "next/image";

const savedItems = [
  {
    id: "1",
    title: "React Best Practices",
    type: "Article",
    icon: BookOpen,
    imageUrl: "https://picsum.photos/200/200?random=1",
  },
  {
    id: "2",
    title: "TypeScript Advanced Patterns",
    type: "Tutorial",
    icon: Code,
    imageUrl: "https://picsum.photos/200/200?random=2",
  },
  {
    id: "3",
    title: "Web Performance Optimization",
    type: "Guide",
    icon: FileText,
    imageUrl: "https://picsum.photos/200/200?random=3",
  },
  {
    id: "4",
    title: "Next.js 14 Features",
    type: "Documentation",
    icon: Globe,
    imageUrl: "https://picsum.photos/200/200?random=4",
  },
  {
    id: "5",
    title: "CSS Grid Mastery",
    type: "Course",
    icon: BookOpen,
    imageUrl: "https://picsum.photos/200/200?random=5",
  },
  {
    id: "6",
    title: "GraphQL Fundamentals",
    type: "Tutorial",
    icon: Code,
    imageUrl: "https://picsum.photos/200/200?random=6",
  },
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Library() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full p-8"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">My Life</h1>
        <p className="text-[#B3B3B3]">
          Welcome to my personal library. Below are the "albums" of my life:
          moments, hobbies, and adventures that play on repeat when I'm away
          from the keyboard.
        </p>
      </div>

      <motion.div variants={containerVariants} className="space-y-4">
        {savedItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-[#181818] hover:bg-[#282828] transition-colors p-4 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-[#333]">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-[#B3B3B3]" />
                      <span className="text-xs text-[#B3B3B3]">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-base truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
