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
    title: "CineSense",
    subtitle: "React, Node.js, MongoDB",
    imageUrl: "https://picsum.photos/400/400?random=1",
    repoUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Carolina Lost & Found",
    subtitle: "Next.js, TypeScript, Prisma",
    imageUrl: "https://picsum.photos/400/400?random=2",
    repoUrl: "https://github.com",
  },
  {
    id: "3",
    title: "CV Generator",
    subtitle: "Vue.js, Express, PostgreSQL",
    imageUrl: "https://picsum.photos/400/400?random=3",
    repoUrl: "https://github.com",
  },
  {
    id: "4",
    title: "CDC-2024 Datathon",
    subtitle: "React Native, OpenWeather API",
    imageUrl: "https://picsum.photos/400/400?random=4",
    repoUrl: "https://github.com/siqraf/CDC-Datathon",
  },
  {
    id: "5",
    title: "Pokédex",
    subtitle: "Next.js, Sanity CMS, Tailwind",
    imageUrl: "https://picsum.photos/400/400?random=5",
    repoUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Fortnite Memory Cards",
    subtitle: "React, Web Audio API, PWA",
    imageUrl: "https://picsum.photos/400/400?random=6",
    repoUrl: "https://github.com",
  },
];

