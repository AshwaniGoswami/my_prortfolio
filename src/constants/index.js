import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "KSPL",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "Dec 2022 - Nov-2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Higher Systems",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Nov 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Higher Systems",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Nov 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Higher Systems",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Nov 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/AshwaniGoswami",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ashwani-goswami",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "NIGST",
    description: "Developed a web application for NIGST.",
    // link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Bill Sahuliyat+",
    description:
      "Created mobile application for KPDCL to manage its billing and other related tasks.",
    // link: "https://github.com/adrianhajdin/threads",
  },
  //   {
  //     iconUrl: car,
  //     theme: "btn-back-blue",
  //     name: "Car Finding App",
  //     description:
  //       "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //     link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  //   },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "KPDCL-DMS ",
    description:
      "Setup and configured the DMS for KPDCL to manage its users documents.",
    //   link: "https://github.com/adrianhajdin/social_media_app",
  },
  //   {
  //     iconUrl: estate,
  //     theme: "btn-back-black",
  //     name: "Real-Estate Application",
  //     description:
  //       "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //     link: "https://github.com/adrianhajdin/projects_realestate",
  //   },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "LDAP Authentication Application",
    description:
      "App that authenticates users based on A.D. and LDAP and provide role based access management.",
    //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
