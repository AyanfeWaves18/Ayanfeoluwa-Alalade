import heroPhotography from "@/assets/hero-photography.jpg";
import photoPortrait from "@/assets/photo-portrait.jpg";
import photoPortrait2 from "@/assets/photo-portrait2.jpg";
import photoEditorial from "@/assets/photo-editorial.jpg";
import photoNature from "@/assets/photo-nature.jpg";
import devProject1 from "@/assets/dev-project1.jpg";
import devProject2 from "@/assets/dev-project2.jpg";
import synthesis from "@/assets/synthesis.jpg";

// Real work pulled from Ayanfe Waves Visuals
import hoodedPortrait from "@/assets/portfolio/ayanfe-hooded-portrait.png";
import lavenderDress from "@/assets/portfolio/ayanfe-lavender-dress.png";
import duskAvenue from "@/assets/portfolio/ayanfe-dusk-avenue.png";
import stormField from "@/assets/portfolio/ayanfe-storm-field.jpg";
import portraitSmile from "@/assets/portfolio/ayanfe-portrait-smile.png";
import portraitBack from "@/assets/portfolio/ayanfe-portrait-back.png";
import whiteShirt from "@/assets/portfolio/ayanfe-white-shirt.png";

export const images = {
  heroPhotography,
  photoPortrait,
  photoPortrait2,
  photoEditorial,
  photoNature,
  devProject1,
  devProject2,
  synthesis,
  hoodedPortrait: hoodedPortrait.url,
  lavenderDress: lavenderDress.url,
  duskAvenue: duskAvenue.url,
  stormField: stormField.url,
  portraitSmile: portraitSmile.url,
  portraitBack: portraitBack.url,
  whiteShirt: whiteShirt.url,
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
    src: hoodedPortrait.url,
    title: "Shrouded Gaze",
    category: "Portraits",
    meta: "Portrait",
    span: "wide",
  },
  {
    src: lavenderDress.url,
    title: "Lavender Poise",
    category: "Portraits",
    meta: "Portrait",
    span: "tall",
  },
  {
    src: stormField.url,
    title: "Gathering Storm",
    category: "Nature",
    meta: "Landscape",
    span: "wide",
  },
  {
    src: portraitSmile.url,
    title: "Quiet Joy",
    category: "Portraits",
    meta: "Portrait",
    span: "tall",
  },
  {
    src: duskAvenue.url,
    title: "Dusk Avenue",
    category: "Nature",
    meta: "Landscape",
    span: "wide",
  },
  {
    src: whiteShirt.url,
    title: "White Study",
    category: "Editorial",
    meta: "Editorial",
    span: "tall",
  },
  {
    src: portraitBack.url,
    title: "Turned Away",
    category: "Editorial",
    meta: "Editorial",
    span: "wide",
  },
  {
    src: photoEditorial,
    title: "Texture Study No. 4",
    category: "Editorial",
    meta: "Editorial",
    span: "tall",
  },
];


export const externalLinks = {
  photographyPortfolio: "https://ayanfewavesvisuals.lovable.app/",
  photographyGallery: "https://ayanfewavesvisuals.lovable.app/portfolio",
  photographyWhatsApp:
    "https://wa.me/message/QJFLNZ6VPBP6C1?text=Hi%2C%20Ayanfe%20I%27d%20like%20to%20book%20a%20photography%20session.",
  devPortfolio: "https://ayanfeoluwasportfolio.vercel.app/",
  devProjects: "https://ayanfeoluwasportfolio.vercel.app/#projects",
  tiktok: "https://www.tiktok.com/@ayanfewaves_visuals1",
  github: "https://github.com/AyanfeWaves18",
  linkedin: "https://www.linkedin.com/in/ayanfeoluwa-alalade-34b759362",
} as const;

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
    name: "Teal & Gold Mini Store",
    description:
      "A mini e-commerce web app with product browsing, shopping cart functionality and a clean interface built for an elegant shopping experience.",
    status: "DEPLOYED",
    statusTone: "live",
    image: devProject1,
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://ayanfeoluwasportfolio.vercel.app/#projects",
  },
  {
    index: "[02]",
    name: "Nike Rebrand",
    description:
      "A rebranded website concept for Nike — modern design principles and creative web development with a fresh take on the iconic brand.",
    status: "CONCEPT",
    statusTone: "version",
    image: devProject2,
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://ayanfeoluwasportfolio.vercel.app/#projects",
  },
];

export const techStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Git",
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
    title: "JavaScript",
    body: "Clean, efficient JavaScript for dynamic, interactive user experiences — with React and TypeScript in active exploration.",
    tags: ["ES6+", "DOM", "APIs", "React", "TypeScript"],
  },
];
