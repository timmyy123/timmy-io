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
import seedStart from './seed-start.png';

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
    time: "Jun 2025 - Sep 2025",
    description: "Responsible for the end-to-end development and deployment of the company website. Designed, developed, and coded a fully functional custom-built website from scratch to meet business requirements."
  }
];

const projects = [
  {
    title: 'LLM Hub',
    image: llmHub,
    link: 'https://play.google.com/store/apps/details?id=com.llmhub.llmhub',
    github: 'https://github.com/timmyy123/LLM-Hub',
    description: 'On-device AI chat app for Android with Jetpack Compose, supporting offline LLM and vision models.',
    longDescription: 'Architected and implemented an on-device AI chat app for Android with Jetpack Compose. Integrated model download, management, and MediaPipe-based LLM/vision inference. Built a persistent, context-aware chat system with real-time streaming responses.',
    stacks: ['Jetpack Compose', 'MediaPipe', 'Kotlin', 'LLMs'],
    metrics: '1000+ downloads on Google Play Store',
    date: 'Jul 2025 - Present'
  },
  {
    title: 'Duo Date',
    image: duoDate,
    link: 'https://play.google.com/store/apps/details?id=com.duodate.app',
    description: 'Production-grade mobile dating app with real subscriptions and payment system.',
    longDescription: 'Built and launched Duo Date, a production-grade mobile dating app with real money subscriptions. Engineered secure authentication, custom email confirmation, and a robust subscription/payments system.',
    stacks: ['Expo', 'React Native', 'Supabase', 'Native Wind', 'Typescript'],
    metrics: '100+ downloads, live payment processing',
    date: 'May 2025 - Present'
  },
  {
    title: 'Seed Start',
    image: seedStart,
    link: 'https://seedstart.world/',
    description: 'Full-stack platform for startup teams, organization and meeting management.',
    longDescription: 'Built a full stack React/Firebase app for organization and team management. Developed reusable components for user profiles, meetings, and pitch decks. Implemented secure authentication, role-based access, and real-time chat.',
    stacks: ['React.js', 'Material UI', 'Firebase'],
    date: 'Jun 2025 - Present'
  },
  {
    title: 'Digital Demeanor',
    image: digitalDemeanor,
    link: 'https://digital-demeanor.vercel.app/',
    description: 'AI-powered digital citizenship learning platform with interactive modules.',
    longDescription: 'Developed a digital literacy platform with interactive modules on privacy, cybersecurity, AI ethics, and data insights. Built AI-powered simulations and custom data visualizations.',
    stacks: ['Next.js', 'Tailwind CSS', 'Shadcn', 'Framer Motion', 'Supabase', 'D3.js', 'Google Gemini', 'Typescript'],
    metrics: 'Won Monash PG Industry Experience Student Choice Award',
    date: 'Mar 2025 - May 2025'
  },
  {
    title: "Ti-Talk",
    image: tiTalk,
    link: "https://ti-talk.onrender.com/",
    description: "MERN Stack real-time chat application with WebSocket integration.",
    stacks: ["React.js", "Mongodb", "Node.js", "Express.js", "Bootstrap"],
  },
  {
    title: "Sun-Safe",
    image: sunSafe,
    link: "https://sun-safe.vercel.app/",
    description: "Sun protection platform with location-based UV tracking and health recommendations.",
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
    description: "Startup ideas sharing platform with authentication and CMS integration.",
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
    description: "React Native AI video sharing app with cloud storage.",
    stacks: ["React Native", "Expo", "Appwrite", "Native Wind"],
  },
  {
    title: "Nike Landing Page",
    image: nike,
    link: "https://nike-landing-page-cdv.pages.dev",
    description: "Modern Nike shop website with responsive design.",
    stacks: ["React.js", "Vite", "Tailwind CSS"],
  },
  {
    title: "Crypto Mining Visualisation",
    image: crypto,
    link: "https://dvp.pages.dev",
    description: "Interactive data visualization of crypto mining trends and GPU comparisons.",
    stacks: ["D3.js", "Bootstrap"],
  },
  {
    title: "Framer Motion Animation",
    image: framerMotion,
    link: "https://framer-animation.pages.dev",
    description: "Showcase of advanced animation techniques with Framer Motion.",
    stacks: ["React.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Healing Journey",
    image: healingJourney,
    link: "https://healingjourney.pages.dev/",
    description: "Mental health charity website with location services and resources.",
    stacks: ["Vue.js", "Firebase", "Bootstrap", "Mapbox"],
  },
  {
    title: "Melbourne Development",
    image: mel,
    link: "https://melbourne-development.pages.dev",
    description: "Data visualization of Melbourne urban development trends.",
    stacks: ["D3.js"],
  },
];

export { photo, background, skills, experience, projects };
