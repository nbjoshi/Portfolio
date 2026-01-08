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
    title: "CineSense (In Progress)",
    subtitle: "Swift, SwiftUI, Supabase, Google Gemini API",
    imageUrl: "/cinesense.jpeg",
    repoUrl: "https://github.com/nbjoshi/cinesense",
  },
  {
    id: "2",
    title: "Carolina Lost & Found",
    subtitle: "Next.js, TypeScript, Supabase, TailwindCSS, ShadCn",
    imageUrl: "/carolina_lost_found.png",
    repoUrl: "https://github.com/nbjoshi",
  },
  // {
  //   id: "3",
  //   title: "CV Generator",
  //   subtitle: "React, CSS, FastAPI, MySQL",
  //   imageUrl: "https://picsum.photos/400/400?random=3",
  //   repoUrl: "https://github.com",
  // },
  {
    id: "4",
    title: "CDC-2024 Datathon",
    subtitle: "Python, Scikit-Learn",
    imageUrl: "/cdc.png",
    repoUrl: "https://github.com/siqraf/CDC-Datathon",
  },
  {
    id: "5",
    title: "Pokédex",
    subtitle: "Next.js, TypeScript, TailwindCSS",
    imageUrl: "/pokedex.png",
    repoUrl: "https://a05-pokedex-nbjoshi.vercel.app/",
  },
  {
    id: "6",
    title: "Fortnite Memory Cards",
    subtitle: "React",
    imageUrl: "/fortnite_game.png",
    repoUrl: "https://odin-memory-card-swart.vercel.app/",
  },
];
