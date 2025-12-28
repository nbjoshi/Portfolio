export interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    subtitle: "React, Node.js, MongoDB",
    imageUrl: "https://picsum.photos/400/400?random=1",
    repoUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management App",
    subtitle: "Next.js, TypeScript, Prisma",
    imageUrl: "https://picsum.photos/400/400?random=2",
    repoUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Social Media Dashboard",
    subtitle: "Vue.js, Express, PostgreSQL",
    imageUrl: "https://picsum.photos/400/400?random=3",
    repoUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Weather Forecast App",
    subtitle: "React Native, OpenWeather API",
    imageUrl: "https://picsum.photos/400/400?random=4",
    repoUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Blog CMS",
    subtitle: "Next.js, Sanity CMS, Tailwind",
    imageUrl: "https://picsum.photos/400/400?random=5",
    repoUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Music Player",
    subtitle: "React, Web Audio API, PWA",
    imageUrl: "https://picsum.photos/400/400?random=6",
    repoUrl: "https://github.com",
  },
];

