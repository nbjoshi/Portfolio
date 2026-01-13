export interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  repoUrl: string;
  liveUrl?: string;
  caseStudySlug?: string;
  description: string;
  impact: string[];
  tech: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "CineSense (In Progress)",
    subtitle: "AI-powered movie discovery iOS app",
    imageUrl: "/cinesense.jpeg",
    repoUrl: "https://github.com/nbjoshi/cinesense",
    caseStudySlug: "cinesense",
    description:
      "An iOS app that uses AI to identify movies from screenshots and provides personalized recommendations based on viewing history.",
    impact: [
      "Built real-time screenshot identification using Google Gemini API",
      "Implemented Supabase for auth, RLS security, and real-time sync",
      "Implemented a recommendation system through vectorizing movie metadata and cosine similarity",
    ],
    tech: ["Swift", "SwiftUI", "Supabase", "Google Gemini API"],
    featured: true,
  },
  {
    id: "2",
    title: "Carolina Lost & Found",
    subtitle: "Campus-wide lost item recovery platform",
    imageUrl: "/carolina_lost_found.png",
    repoUrl: "https://github.com/nbjoshi",
    caseStudySlug: "carolina-lost-found",
    description:
      "A full-stack web application helping UNC students report and find lost items across campus with real-time notifications.",
    impact: [
      "Built in collaboration with 3 other students for our COMP 426 final project; followed agile development practices",
      "Features include: lost and found feeds, private messaging, authentication, and user profiles",
      "Solves a real-world problem for UNC students by providing a centralized platform for lost and found items",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "ShadCN"],
    featured: true,
  },
  {
    id: "3",
    title: "Minas Brows and Spa",
    subtitle: "Professional business website",
    imageUrl: "/minas.png",
    repoUrl: "https://github.com/avgod07/MinasBrowsandSpa",
    liveUrl: "https://www.minasbrowsandspa.com/",
    description: "A modern, responsive business website for a local spa.",
    impact: [
      "Built a modern, business website for local spa supporting mobile-first design and complete responsiveness",
      "Handling 3.4k+ requests daily with low latency and high availability",
      "SEO, Performance, and Accessibility (all 100) optimized for local search",
    ],
    tech: ["Next.js", "TailwindCSS"],
    featured: false,
  },
  {
    id: "4",
    title: "CDC-2024 Datathon",
    subtitle: "Machine learning health analytics",
    imageUrl: "/cdc.png",
    repoUrl: "https://github.com/siqraf/CDC-Datathon",
    description:
      "Data science project analyzing CDC health data to predict disease patterns using machine learning.",
    impact: [
      "Analyzed C02 emissions in the past via machine learning (piecewise regression) and predicted future trends",
      "Processed records from the CDC and EPA to analyze C02 emissions",
      "Presented findings to panel of judges",
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    featured: false,
  },
  {
    id: "5",
    title: "Pokédex",
    subtitle: "Interactive Pokémon encyclopedia",
    imageUrl: "/pokedex.png",
    repoUrl: "https://github.com/nbjoshi",
    liveUrl: "https://a05-pokedex-nbjoshi.vercel.app/",
    description:
      "A modern Pokédex application with search, filtering, and detailed Pokémon stats.",
    impact: [
      "Integrated with PokéAPI for real-time data",
      "Implemented infinite scroll and lazy loading",
      "Built responsive grid layout with animations",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    featured: false,
  },
  {
    id: "6",
    title: "Fortnite Memory Cards",
    subtitle: "Interactive Memory Card Game (My First React Project)",
    imageUrl: "/fortnite_game.png",
    repoUrl: "https://github.com/nbjoshi/odin-memory-card",
    liveUrl: "https://odin-memory-card-swart.vercel.app/",
    description:
      "A memory card game built with React featuring Fortnite characters and score tracking.",
    impact: [
      "Built with pure React and vanilla CSS",
      "Implemented card shuffle algorithm",
      "Added difficulty levels and custom win/loss screens",
    ],
    tech: ["React", "CSS"],
    featured: false,
  },
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getOtherProjects = () =>
  projects.filter((project) => !project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.caseStudySlug === slug);
