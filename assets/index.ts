import photo from "./photo.jpg";
import background from "./background.jpg";
import aora from "./aora.jpg";
import crypto from "./crypto.png";
import healingJourney from "./healing-journey.png";
import mel from "./mel.png";
import nike from "./nike.png";
import tiTalk from "./ti-talk.jpg";
import ycDirectory from "./yc-directory.png";
import framerMotion from "./framer.png";
import sunSafe from "./sun-safe.png";
import digitalDemeanor from './digital-demeanor.png';
import duoDate from './duo-date.png';
import llmHub from './llm-hub.png';
import { link } from "fs";

const skills = [
  "React.js",
  "Next.js",
  "Vue.js",
  "React Native",
  "Expo",
  "Jetpack Compose",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "Google Gemini",
  "AWS",
  "Firebase",
  'Supabase',
  "Appwrite",
  "Sanity.io",
  "Node.js",
  "Mongodb",
  "Express.js",
  "D3.js",
  "Tableau",
  "R.shiny",
  "Typescript",
  "Python",
  "Java",
  "R",
  "Kotlin",
  "SQL",
  "Outsystems",
  "I'm learning more...",
];

const experience = [
  {
    company: "Rayesh Lifestyle Pvt Ltd",
    role: "IT Intern",
    time: "Jun 2025 - Present",
    description: "Full-stack web development including Shopify and custom website development from scratch. Responsible for front-end and back-end programming, database integration, hosting setup, testing, debugging, and website launch coordination. Maintaining and updating websites regularly based on business requirements."
  }
];

const projects = [
  {
    title: 'LLM Hub',
    image: llmHub,
    link: 'https://play.google.com/store/apps/details?id=com.llmhub.llmhub',
    description: 'LLM Hub - Local LLMs on Android',
    stacks: ['Jetpack Compose', 'LLMs', 'Kotlin', 'MediaPipe'],

  },
  {
    title: 'Duo Date',
    image: duoDate,
    link: 'https://play.google.com/store/apps/details?id=com.duodate.app',
    description: 'Duo Date - Affordable Dating App',
    stacks: ['Expo', 'React Native', 'Supabase', 'Native Wind', 'Typescript'],
  },
  {
    title: 'Digital Demeanor',
    image: digitalDemeanor,
    link: 'https://digital-demeanor.vercel.app/',
    description: 'Digital Demeanor - AI-Powered digital citizenship learning platform',
    stacks: ['Next.js', 'Tailwind CSS', 'Shadcn', 'Framer Motion', 'Supabase', 'D3.js', 'Google Gemini', 'Typescript'],
  },
  {
    title: "Ti-Talk",
    image: tiTalk,
    link: "https://ti-talk.onrender.com/",
    description: "MERN Stack real-time chat app by timmy",
    stacks: ["React.js", "Mongodb", "Node.js", "Express.js", "Bootstrap"],
  },
  {
    title: "Sun-safe",
    image: sunSafe,
    link: "https://sun-safe.vercel.app/",
    description: "SunSafe - Sun Protection for Healthier Skin",
    stacks: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "Appwrite",
      "Mapbox",
      "D3.js",
      "Google Gemini",
      "Sentry.io",
      "Typescript",
    ],
  },
  {
    title: "YC-Directory",
    image: ycDirectory,
    link: "https://yc-directory-one-snowy.vercel.app",
    description: "Start up ideas sharing platform",
    stacks: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Shadcn",
      "Sanity.io",
      "Next Auth",
      "Typescript",
    ],
  },
  {
    title: "Aora",
    image: aora,
    link: "https://github.com/timmyy123/AI-Video-Sharing-App",
    description: "React Native AI video sharing app",
    stacks: ["React Native", "Expo", "Appwrite", "Native Wind"],
  },
  {
    title: "Nike Landing Page",
    image: nike,
    link: "https://nike-landing-page-cdv.pages.dev",
    description: "Nike shop website",
    stacks: ["React.js", "Vite", "Tailwind CSS"],
  },
  {
    title: "Crypto Mining Visualisation",
    image: crypto,
    link: "https://dvp.pages.dev",
    description: "Crypto mining trends and GPUs mining comparison",
    stacks: ["D3.js", "Bootstrap"],
  },
  {
    title: "Framer Motion Animation",
    image: framerMotion,
    link: "https://framer-animation.pages.dev",
    description: "A fun animation website with framer motion",
    stacks: ["React.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "healing journey",
    image: healingJourney,
    link: "https://healingjourney.pages.dev/",
    description: "Mental health charity website",
    stacks: ["Vue.js", "Firebase", "Bootstrap", "Mapbox"],
  },
  {
    title: "Melbourne Development",
    image: mel,
    link: "https://melbourne-development.pages.dev",
    description: "Melbourne development visualisation",
    stacks: ["D3.js"],
  },
];

export { photo, background, skills, experience, projects };
