import heroPhotography from "@/assets/hero-photography.jpg";
import photoPortrait from "@/assets/photo-portrait.jpg";
import photoPortrait2 from "@/assets/photo-portrait2.jpg";
import photoEditorial from "@/assets/photo-editorial.jpg";
import photoNature from "@/assets/photo-nature.jpg";
import devProject1 from "@/assets/dev-project1.jpg";
import devProject2 from "@/assets/dev-project2.jpg";
import synthesis from "@/assets/synthesis.jpg";

export const images = {
  heroPhotography,
  photoPortrait,
  photoPortrait2,
  photoEditorial,
  photoNature,
  devProject1,
  devProject2,
  synthesis,
};

export type Photo = {
  src: string;
  title: string;
  category: "Portraits" | "Nature" | "Editorial" | "Events";
  meta: string;
  span?: "wide" | "tall" | "normal";
};

export const photos: Photo[] = [
  {
    src: photoPortrait,
    title: "Echoes of Silence",
    category: "Portraits",
    meta: "2024 — Portrait",
    span: "wide",
  },
  {
    src: photoEditorial,
    title: "Texture Study No. 4",
    category: "Editorial",
    meta: "2024 — Editorial",
    span: "tall",
  },
  {
    src: photoNature,
    title: "Gathering Storm",
    category: "Nature",
    meta: "2023 — Landscape",
    span: "wide",
  },
  {
    src: photoPortrait2,
    title: "Lavender Poise",
    category: "Portraits",
    meta: "2024 — Portrait",
    span: "tall",
  },
  {
    src: heroPhotography,
    title: "L'Heure Bleue",
    category: "Nature",
    meta: "2023 — Landscape",
    span: "wide",
  },
];

export const photoCategories = [
  "All",
  "Portraits",
  "Nature",
  "Editorial",
] as const;

export type Project = {
  index: string;
  name: string;
  description: string;
  status: string;
  statusTone: "live" | "version";
  image: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    index: "[01]",
    name: "Nexora Dashboard",
    description:
      "A responsive analytics dashboard with fluid data visualisation, built for clarity and speed across every viewport.",
    status: "DEPLOYED",
    statusTone: "live",
    image: devProject1,
    stack: ["React", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    index: "[02]",
    name: "Minted Design System",
    description:
      "An atomic component library — colours, typography, inputs and states — documented for consistent, scalable product work.",
    status: "v1.0.0",
    statusTone: "version",
    image: devProject2,
    stack: ["React", "CSS3", "Storybook"],
    href: "#",
  },
];

export const techStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind",
  "Git",
  "Figma",
];

export const skills = [
  {
    title: "HTML & Structure",
    body: "Semantic, accessible markup that forms the foundation of every great web experience.",
    tags: ["HTML5", "Semantics", "Accessibility", "SEO"],
  },
  {
    title: "CSS & Styling",
    body: "Beautiful, responsive interfaces crafted with modern CSS, Flexbox, Grid and motion.",
    tags: ["CSS3", "Flexbox", "Grid", "Animation"],
  },
  {
    title: "JavaScript & React",
    body: "Interactive, component-driven interfaces with clean state and thoughtful UX.",
    tags: ["JavaScript", "React", "TypeScript"],
  },
];
