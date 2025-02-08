import photo from "./photo.jpg";
import background from "./background.jpg";
import aora from "./aora.jpg";
import crypto from "./crypto.png";
import healingJourney from "./healing-journey.png";
import mel from "./mel.png";
import nike from "./nike.png";
import tiTalk from "./ti-talk.jpg";
import ycDirectory from "./yc-directory.png";

const skills = [
  "React.js",
  "Next.js",
  "Vue.js",
  "React Native",
  "Expo",
  "Jetpack Compose",
  "Tailwind CSS",
  "Bootstrap",
  "Firebase",
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

const projects = [
  {
    title: "Ti-Talk",
    image: tiTalk,
    link: 'https://ti-talk.onrender.com/',
    description: "MERN Stack real-time chat app by timmy",
    stacks: ["React.js", "Mongodb", "Node.js", "Express.js", "Bootstrap"],
  },
  {
    title: "YC-Directory",
    image: ycDirectory,
    link: 'https://yc-directory-one-snowy.vercel.app',
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
    link: 'https://github.com/timmyy123/AI-Video-Sharing-App',
    description: "React Native AI video sharing app",
    stacks: ["React Native", "Expo", "Appwrite", "Native Wind"],
  },
  {
    title: "Nike Landing Page",
    image: nike,
    link: 'https://nike-landing-page-cdv.pages.dev',
    description: "Nike shop website",
    stacks: ["React.js", "Vite", "Tailwind CSS"],
  },
  {
    title: "Crypto Mining Visualisation",
    image: crypto,
    link: 'https://dvp.pages.dev',
    description: "Crypto mining trends and GPUs mining comparison",
    stacks: ["D3.js", "Bootstrap"],
  },
  {
    title: "healing journey",
    image: healingJourney,
    link: 'https://healingjourney.pages.dev/',
    description: "Mental health charity website",
    stacks: ["Vue.js", "Firebase", "Bootstrap", "Mapbox"],
  },
  {
    title: "Melbourne Development",
    image: mel,
    link: 'https://melbourne-development.pages.dev',
    description: "Melbourne development visualisation",
    stacks: ["D3.js"],
  },
];

export { photo, background, skills, projects };
