import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  repoUrl: string;
}

const ProjectCard = ({ title, subtitle, imageUrl, repoUrl }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="group relative bg-[#181818] hover:bg-[#282828] transition-all duration-200 p-4 cursor-pointer">
        <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
          <div className="relative aspect-square w-full mb-4 rounded-md overflow-hidden bg-[#333]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#1ED760] rounded-full p-3 shadow-lg"
              >
                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
              </motion.button>
            </div>
          </div>
          <div className="min-h-[60px]">
            <h3 className="text-white font-semibold text-base mb-1 truncate">
              {title}
            </h3>
            <p className="text-[#B3B3B3] text-sm truncate">
              {subtitle}
            </p>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

