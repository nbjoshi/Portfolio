export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  problem: string;
  approach: string[];
  result: string;
  techStack: string[];
  screenshots: { src: string; caption: string }[];
  improvements: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cinesense",
    title: "CineSense (In Progress)",
    subtitle: "AI-powered movie discovery iOS app",
    heroImage: "/cinesense.jpeg",
    problem:
      "Movie discovery is broken. Streaming platforms push their own content, and finding movies that match your taste requires scrolling through endless catalogs. Users often screenshot movie recommendations from social media but have no easy way to identify or track them.",
    approach: [
      "Built a native iOS app using SwiftUI with a focus on smooth animations and intuitive UX",
      "Integrated Google Gemini API to identify movies from user screenshots using vision AI",
      "Implemented Supabase for authentication, real-time database sync, and row-level security",
      "Designed a personalized discovery feed based on viewing history and preferences",
      "Added watchlist and rating functionality with offline support",
    ],
    result:
      "A polished iOS app that transforms how users discover and track movies. The AI screenshot identification works with 90%+ accuracy, and the personalized feed has received positive feedback from beta testers.",
    techStack: ["Swift", "SwiftUI", "Supabase", "Google Gemini API", "PostgreSQL"],
    screenshots: [
      { src: "/cinesense.jpeg", caption: "Home screen with personalized recommendations" },
    ],
    improvements: [
      "Add social features to share watchlists with friends",
      "Build a companion widget for quick access to recommendations",
      "Add integration with streaming service availability APIs",
    ],
    links: {
      github: "https://github.com/nbjoshi/cinesense",
    },
  },
  {
    slug: "carolina-lost-found",
    title: "Carolina Lost & Found",
    subtitle: "Campus-wide lost item recovery platform",
    heroImage: "/carolina_lost_found.png",
    problem:
      "UNC students frequently lose items on campus, and the existing recovery process relied on scattered posts across various social media platforms. There was no centralized system, leading to low recovery rates and frustrated students.",
    approach: [
      "Built a full-stack web application using Next.js and TypeScript for type safety",
      "Designed a real-time notification system using Supabase's realtime subscriptions",
      "Optimized lighthouse scores for SEO, Performance, and Accessibility (all 100) for local search",
      "Created an admin dashboard for campus security integration",
      "Added location-tagging feature using campus building data",
      "Built responsive UI with TailwindCSS and ShadCN components",
    ],
    result:
      "Presented the project to a panel of students and faculty, who provided valuable feedback and suggestions for improvement.",
    techStack: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "ShadCN"],
    screenshots: [
      { src: "/carolina_lost_found.png", caption: "Main dashboard showing recent lost and found items" },
    ],
    improvements: [
      "Add machine learning for automatic item categorization from photos",
      "Implement a mobile app for faster reporting",
      "Build integration with campus card system for verification",
      "Add analytics dashboard for campus security trends",
    ],
    links: {
      github: "https://github.com/nbjoshi",
    },
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);

