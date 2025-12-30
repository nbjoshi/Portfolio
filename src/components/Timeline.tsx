import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

interface TimelineEvent {
  year: string;
  month?: string;
  title: string;
  description: string;
  position: "left" | "right";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2023",
    month: "August",
    title: "Started at UNC Chapel Hill",
    description: "Began Computer Science journey",
    position: "left",
  },
  {
    year: "2023",
    month: "August",
    title: "First Python Course",
    description: "COMP 110 sparked my passion for coding",
    position: "right",
  },
  {
    year: "2023",
    month: "August",
    title: "Joined CS for Social Good",
    description: "Built web apps for social impact",
    position: "left",
  },
  {
    year: "2025",
    month: "January",
    title: "Joined App Team Carolina",
    description: "Developed the Carolina Cupboard website",
    position: "right",
  },
  {
    year: "2025",
    month: "May",
    title: "My First Internship",
    description: "Joined Bandwidth's Number Porting Team",
    position: "left",
  },
  {
    year: "2025",
    month: "August",
    title: "Undergraduate Teaching Assistant",
    description: "Became an undergraduate TA for COMP 426: Modern Web Programming",
    position: "right",
  },
  {
    year: "2025",
    month: "Present",
    title: "Part-Time Intern at Bandwidth",
    description: "Worked at Bandwidth through the semester",
    position: "left",
  },
];

// Organic vine path with natural curves
const vinePath = "M 50 0 Q 55 80 48 160 Q 52 240 48 320 Q 52 400 48 480 Q 52 560 48 640 Q 52 720 50 800";

interface TimelineEventItemProps {
  event: TimelineEvent;
  index: number;
}

const TimelineEventItem = ({ event, index }: TimelineEventItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <Card className="bg-[#121212] border-[#282828] hover:border-[#1ED760]/50 transition-all duration-300 cursor-pointer group">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <motion.span
                      className="text-[#1ED760] font-semibold text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {event.year}
                    </motion.span>
                    {event.month && (
                      <span className="text-[#B3B3B3] text-xs group-hover:text-[#1ED760] transition-colors">
                        {event.month}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#1ED760] transition-colors">
                    {event.title}
                  </h3>
                </div>
              </div>
              <p className="text-[#B3B3B3] text-sm leading-relaxed group-hover:text-white transition-colors">
                {event.description}
              </p>
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
          whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(30, 215, 96, 0.8)" }}
          className="w-4 h-4 rounded-full bg-[#1ED760] border-4 border-[#121212] shadow-lg shadow-[#1ED760]/50 cursor-pointer transition-all"
        />
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
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Timeline</h2>
          <p className="text-[#B3B3B3] text-sm">My journey from 2023 to present</p>
        </motion.div>

        <div className="relative">
          {/* Vine Branch SVG */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 800"
              preserveAspectRatio="none"
            >
              <motion.path
                d={vinePath}
                fill="none"
                stroke="#1ED760"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
              {/* Vine leaves/branches */}
              {[150, 350, 550].map((y, i) => (
                <motion.circle
                  key={i}
                  cx={i % 2 === 0 ? 45 : 55}
                  cy={y}
                  r="4"
                  fill="#1ED760"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: 2 + i * 0.3,
                  }}
                />
              ))}
            </svg>
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

