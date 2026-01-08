import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import {
  GraduationCap,
  Code,
  Users,
  Briefcase,
  Award,
  TrendingUp,
} from "lucide-react";

interface TimelineEvent {
  year: string;
  month?: string;
  title: string;
  description: string;
  position: "left" | "right";
  category: "education" | "work" | "achievement" | "community";
  icon: React.ComponentType<{ className?: string }>;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2023",
    month: "August",
    title: "Started at UNC Chapel Hill",
    description: "Began Computer Science journey",
    position: "left",
    category: "education",
    icon: GraduationCap,
  },
  {
    year: "2023",
    month: "August",
    title: "First Python Course",
    description: "COMP 110 sparked my passion for coding",
    position: "right",
    category: "education",
    icon: Code,
  },
  {
    year: "2023",
    month: "August",
    title: "Joined CS for Social Good",
    description: "Built web apps for social impact",
    position: "left",
    category: "community",
    icon: Users,
  },
  {
    year: "2025",
    month: "January",
    title: "Joined App Team Carolina",
    description: "Developed the Carolina Cupboard website",
    position: "right",
    category: "community",
    icon: Code,
  },
  {
    year: "2025",
    month: "May",
    title: "My First Internship",
    description: "Joined Bandwidth's Number Porting Team",
    position: "left",
    category: "work",
    icon: Briefcase,
  },
  {
    year: "2025",
    month: "August",
    title: "Undergraduate Teaching Assistant",
    description: "Became an undergraduate TA for COMP 426: Modern Web Programming",
    position: "right",
    category: "achievement",
    icon: Award,
  },
  {
    year: "2025",
    month: "Present",
    title: "Part-Time Intern at Bandwidth",
    description: "Currently working at Bandwidth through the semester",
    position: "left",
    category: "work",
    icon: TrendingUp,
  },
];

const categoryConfig = {
  education: { label: "Education", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  work: { label: "Work", color: "bg-[#1ED760]/20 text-[#1ED760] border-[#1ED760]/30" },
  achievement: { label: "Achievement", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  community: { label: "Community", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
};

interface TimelineEventItemProps {
  event: TimelineEvent;
  index: number;
}

const TimelineEventItem = ({ event, index }: TimelineEventItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = event.icon;
  const category = categoryConfig[event.category];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: event.position === "left" ? -100 : 100, y: 20 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: event.position === "left" ? -100 : 100, y: 20 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className={`flex items-center ${
        event.position === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Event Card */}
      <div className={`flex-1 ${event.position === "left" ? "pr-8" : "pl-8"}`}>
        <motion.div
          whileHover={{
            scale: 1.02,
            x: event.position === "left" ? 8 : -8,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] border-[#282828] hover:border-[#1ED760]/50 transition-all duration-300 cursor-pointer group relative overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1ED760]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <CardContent className="p-5 relative z-10">
              <div className="flex items-start gap-4 mb-3">
                {/* Icon */}
                <motion.div
                  className={`p-3 rounded-lg bg-[#1ED760]/10 border border-[#1ED760]/20 group-hover:bg-[#1ED760]/20 group-hover:border-[#1ED760]/40 transition-all duration-300 flex-shrink-0`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-5 h-5 text-[#1ED760]" />
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <motion.span
                      className="text-[#1ED760] font-bold text-base"
                      whileHover={{ scale: 1.1 }}
                    >
                      {event.year}
                    </motion.span>
                    {event.month && (
                      <span className="text-[#B3B3B3] text-xs font-medium group-hover:text-[#1ED760] transition-colors">
                        {event.month}
                      </span>
                    )}
                    <Badge
                      variant="outline"
                      className={`text-xs ${category.color} border shrink-0`}
                    >
                      {category.label}
                    </Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#1ED760] transition-colors leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-[#B3B3B3] text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {event.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.15 + 0.2,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.4, boxShadow: "0 0 25px rgba(30, 215, 96, 0.9)" }}
          className="relative w-5 h-5 rounded-full bg-[#1ED760] border-4 border-[#121212] shadow-lg shadow-[#1ED760]/50 cursor-pointer transition-all group/node"
        >
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#1ED760]"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.8, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>
      </div>

      {/* Spacer for right side */}
      <div className={`flex-1 ${event.position === "right" ? "pr-8" : "pl-8"}`} />
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <Card className="bg-[#181818] mb-8 overflow-hidden">
      <CardContent className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-[#1ED760]/10 border border-[#1ED760]/20">
              <TrendingUp className="w-6 h-6 text-[#1ED760]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">Career Timeline</h2>
              <p className="text-[#B3B3B3] text-sm">My journey from 2023 to present</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap mt-4">
            {Object.entries(categoryConfig).map(([key, config]) => (
              <Badge
                key={key}
                variant="outline"
                className={`text-xs ${config.color} border`}
              >
                {config.label}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-[#1ED760] via-[#1ED760]/60 to-[#1ED760]"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.3,
              }}
              style={{ transformOrigin: "top" }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#1ED760] blur-sm opacity-30" />
          </div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineEventItem key={`${event.year}-${index}`} event={event} index={index} />
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 4,
              type: "spring",
            }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 rounded-full bg-[#1ED760] border-4 border-[#121212] shadow-lg shadow-[#1ED760]/50"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Timeline;

