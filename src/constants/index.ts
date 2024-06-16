import {
  mobile,
  backend,
  creator,
  web,
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
  carrent,
  jobit,
  tripguide,
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
    icon: web,
  },
  {
    title: "Mobile Developer (React Native)",
    icon: mobile,
  },
  {
    title: "Bloackchain Developer",
    icon: backend,
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
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using Typescript, React.js, Node.js, API Rest, GraphQL, AWS and other related technologies.",
      "I specialize in developing various web solutions for the VisionTrack division, where my role involves crafting dynamic, fully interactive user interfaces that leverage extensive datasets. ",
      "Working on VisionTrack, data visualization tool, connecting different data-sources",
      "Industry: Data Visualization, Digital Assets & Cryptocurrencies",
    ],
  },
  {
    title: "Fullstack Web Engineer",
    company_name: "Revelo",
    icon: revelo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
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
    company_name: "Gorilla Logic LLC",
    icon: gorilla,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
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
    date: "Jan 2022 - Jan 2023",
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
    date: "Jan 2023 - Present",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
