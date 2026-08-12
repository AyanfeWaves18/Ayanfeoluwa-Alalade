import heroPhotography from "@/assets/hero-photography.jpg";
import photoPortrait from "@/assets/photo-portrait.jpg";
import photoPortrait2 from "@/assets/photo-portrait2.jpg";
import photoEditorial from "@/assets/photo-editorial.jpg";
import photoNature from "@/assets/photo-nature.jpg";
import devProject1 from "@/assets/portfolio/teal-gold-mini-store.png";
import devProject2 from "@/assets/portfolio/nike-rebrand.png";
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
  hoodedPortrait,
  lavenderDress,
  duskAvenue,
  stormField,
  portraitSmile,
  portraitBack,
  whiteShirt,
};

export type Photo = {
  src: string;
  title: string;
  category: "Portraits" | "Nature" | "Editorial" | "Events";
  meta: string;
  /** Descriptive alt text for screen readers and image search. */
  alt: string;
  /** Human-readable caption describing the frame and intent. */
  caption: string;
  span?: "wide" | "tall" | "normal";
};

export const photos: Photo[] = [
  {
    src: hoodedPortrait,
    title: "Shrouded Gaze",
    category: "Portraits",
    meta: "Portrait",
    alt: "Cinematic close-up portrait of a young man in a dark hood, face half lit by cool twilight light, photographed by Ayanfeoluwa Alalade",
    caption:
      "A hooded portrait shot in low twilight light — the hood frames the face so the eyes carry the whole story.",
    span: "wide",
  },
  {
    src: lavenderDress,
    title: "Lavender Poise",
    category: "Portraits",
    meta: "Portrait",
    alt: "Full-length portrait of a woman in a flowing lavender dress standing calmly against a muted outdoor backdrop",
    caption:
      "A standing portrait in a flowing lavender dress, styled for soft colour harmony between fabric and evening sky.",
    span: "tall",
  },
  {
    src: stormField,
    title: "Gathering Storm",
    category: "Nature",
    meta: "Landscape",
    alt: "Wide landscape of an open field beneath heavy storm clouds, with dramatic dark grey light breaking over the horizon",
    caption:
      "An open field minutes before rain — heavy cloud layers compressed into a single dramatic horizon line.",
    span: "wide",
  },
  {
    src: portraitSmile,
    title: "Quiet Joy",
    category: "Portraits",
    meta: "Portrait",
    alt: "Candid portrait of a smiling subject in warm natural light, captured mid-laugh with a soft blurred background",
    caption:
      "A candid frame caught mid-laugh — natural light, no posing, the expression left exactly as it happened.",
    span: "tall",
  },
  {
    src: duskAvenue,
    title: "Dusk Avenue",
    category: "Nature",
    meta: "Landscape",
    alt: "Twilight scene of an avenue fading into blue-hour haze, with cool purple tones across sky and road",
    caption:
      "Blue hour along a quiet avenue, exposed for the sky so the road falls away into cool purple haze.",
    span: "wide",
  },
  {
    src: whiteShirt,
    title: "White Study",
    category: "Editorial",
    meta: "Editorial",
    alt: "Editorial portrait of a model in a crisp white shirt against a clean neutral background, lit for texture and contrast",
    caption:
      "An editorial study in white — the shirt's folds and shadows do the work while the palette stays neutral.",
    span: "tall",
  },
  {
    src: portraitBack,
    title: "Turned Away",
    category: "Editorial",
    meta: "Editorial",
    alt: "Editorial portrait of a subject photographed from behind, shoulders and silhouette outlined by directional light",
    caption:
      "Shot from behind so silhouette replaces expression — light traces the shoulders and leaves the face to imagination.",
    span: "wide",
  },
  {
    src: photoEditorial,
    title: "Texture Study No. 4",
    category: "Editorial",
    meta: "Editorial",
    alt: "Close-up editorial texture study of fabric and skin tones under raking side light",
    caption:
      "A close texture study — raking side light used to pull grain out of fabric and skin.",
    span: "tall",
  },
];



export const externalLinks = {
  photographyPortfolio: "https://ayanfewavesvisuals.lovable.app/",
  photographyGallery: "https://ayanfewavesvisuals.lovable.app/portfolio",
  photographyWhatsApp:
    "https://wa.me/2348167829017?text=Hi%20Ayanfeoluwa%2C%20I%27d%20like%20to%20book%20a%20photography%20session.",
  generalWhatsApp:
    "https://wa.me/2348167829017?text=Hi%20Ayanfeoluwa%2C%20I%27d%20like%20to%20discuss%20a%20project.",
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
    href: "https://teal-and-gold-mini-store.vercel.app/",
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
    href: "https://nike-rebrand-lemon.vercel.app/",
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
