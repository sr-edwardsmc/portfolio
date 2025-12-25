import {
  mobile,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  leventy,
  clarity,
  portfolio,
  threejs,
  globant,
  gorilla,
  leantech,
  revelo,
  galaxy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Mobile Developer (React Native)",
    icon: mobile,
  },
  {
    title: "Bloackchain Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Architect",
    company_name: "Galaxy Digital",
    icon: galaxy,
    iconBg: "#383E56",
    date: "August 2022 - December 2025",
    points: [
      "Developing and maintaining Web3 applications using Typescript, React.js, Node.js, API Rest, GraphQL, Wagmi Viewm, AWS and other related technologies.",
      "I specialize in developing various web solutions for the VisionTrack division, where my role involves crafting dynamic, fully interactive user interfaces that leverage extensive datasets. ",
      "Working on VisionTrack, data visualization tool, connecting different data-sources",
      "Industry: Data Visualization, Digital Assets & Cryptocurrencies",
    ],
  },
  {
    title: "Fullstack Web Engineer",
    company_name: "Revelo (Freelance - Short term project)",
    icon: revelo,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Oct 2022",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, API Rest, AWS and other related technologies.",
      "Comprehensive analysis of video and audio evidence to help judges in criminal cases.",
      "Design, architecture, and implementation of new features tailored to stakeholders' needs.",
      "Working within a small yet highly skilled team of software engineers, we operated in a true agile environment, ensuring efficient delivery of high-quality solutions.",
      "Industry: Criminalistic justice, Video Analysis and Data processing",
    ],
  },
  {
    title: "Fullstack Web Engineer",
    company_name: "Gorilla Logic LLC (Contractor - Short term project)",
    icon: gorilla,
    iconBg: "#383E56",
    date: "Jul 2021 - Dec 2021",
    points: [
      " Developing and maintaining web applications using React.js and other related technologies.",
      "In my capacity as a full-stack engineer working with the MERN stack for the client FlowHub, I took charge of defining and implementing user stories for the system's new functionalities.",
      "Comprehensive solution for cannabis dispensaries across the United States, presenting a notably challenging project with its microservices architecture and event-driven communication",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Lead - Fullstack Engineer",
    company_name: "Lean Tech IO",
    icon: leantech,
    iconBg: "#383E56",
    date: "Aug 2020 - Jul 2021",
    points: [
      "As the technical leader overseeing a team of eight individuals, I led our efforts under the Scrum framework. My responsibilities encompassed planning, assigning, estimating, and executing the various user stories and functionalities within the project.",
      "Provided guidance, conducted code reviews, engaged in pair programming sessions, and offered mentorship to team members.",
      "Actively participating in client meetings to facilitate a deeper understanding of their requirements and assist in selecting the most suitable technologies, ideas, and architectures for implementation.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Industry: Transportation Logistics",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Globant",
    icon: globant,
    iconBg: "#E6DEDD",
    date: "Jul 2018 - Aug 2020",
    points: [
      "During my tenure at Globant, I was engaged as a contractor directly working with the K12 account, an online education platform dedicated to enhancing children's education in the United States",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Industry: E-Learning",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Leventy App",
    description:
      "Ticketing management platform created for real-world usage with different customers from Colombia, focus on live events and concerts",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: leventy,
    source_code_link: "https://github.com/sr-edwardsmc/leventy",
  },
  {
    name: "Clarity Governance",
    description:
      "Web3 application + smart contracts showcasing a real use-case to show how governance protocols works within blockchains",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "wagmi",
        color: "green-text-gradient",
      },
      {
        name: "viem",
        color: "pink-text-gradient",
      },
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
    ],
    image: clarity,
    source_code_link: "https://github.com/sr-edwardsmc/clarity-governance",
  },
  {
    name: "Personal Portfolio",
    description:
      "Personal portfolio website to showcase my skills and projects as a fullstack web3 developer, including animations and 3D models",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "blue-text-gradient",
      },
      {
        name: "webgl",
        color: "green-text-gradient",
      },
      {
        name: "react-framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/sr-edwardsmc/portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
