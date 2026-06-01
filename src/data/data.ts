import DatabaseIcon from "../assets/icons/database-icon.png";
import FrontendIcon from "../assets/icons/frontend-icon.png";
import BackendIcon from "../assets/icons/server.png";
import appVerse from "../assets/images/app-verse.png";
import BookLibrary from "../assets/images/book-library.png";
import Estatein from "../assets/images/estatein.png";
import MotionPixel from "../assets/images/motion-pixel.png";
import RocPaperSecissor from "../assets/images/rock-paper-scissor.png";
import TaskManager from "../assets/images/task-manager.png";
import TicTacToe from "../assets/images/tic-tac-teo.png";
import xSocial from "../assets/images/x-social.png";

export interface Project {
  image: string; // Tomar import kora image type onusare use korbe (e.g., StaticImageData)
  description: string;
  techStacks: string[];
  liveSite: string;
  category: string;
}

export interface HeroData {
  pathLabel: string;
  heading: string;
  filters: string[];
}

export interface ServicesInfo {
  title: string;
  description: string;
  skills: string[];
}

export interface Services {
  icon: string;
  title: string;
  description: string;
}

export const projectsHeroData: HeroData = {
  pathLabel: "Projects",
  heading: "My projects",
  filters: [
    "All",
    "Social media",
    "E-commerce",
    "Portfolio",
    "UI/UX design",
    "Animated design",
  ],
};
export const contactsHeroData: HeroData = {
  pathLabel: "Contacts",
  heading: "Contact",
  filters: ["01915769233", "abrarmahabub404@gmail.com"],
};
export const servicesHeroData: HeroData = {
  pathLabel: "Services",
  heading: "My services",
  filters: [
    "Frontend Development",
    "Backend Development",
    "Database Management",
  ],
};

export const aboutHeroData: HeroData = {
  pathLabel: "About",
  heading: "About me",
  filters: ["MERN Stack Developer", "UI/UX Designer", "Frontend Design Expert"],
};

export const services: Services[] = [
  {
    icon: FrontendIcon,
    title: "Frontend Development",
    description:
      "Building fast, responsive, and interactive user interfaces using modern technologies like React, Next.js, Tailwind CSS, and TypeScript. Focused on creating smooth user experiences with clean and maintainable code.",
  },
  {
    icon: BackendIcon,
    title: "Backend Development",
    description:
      "Developing secure, scalable, and high-performance server-side applications, APIs, and authentication systems with Node.js and Express. Ensuring reliable architecture, optimized performance, and seamless data flow.",
  },
  {
    icon: DatabaseIcon,
    title: "Database Management",
    description:
      "Designing and managing efficient databases with optimized queries, secure data handling, and scalable architecture using MongoDB and SQL. Maintaining data integrity, performance optimization, and structured database solutions.",
  },
];

export const servicesInfo: ServicesInfo[] = [
  {
    title: "Frontend Development",
    description:
      "Create modern, responsive, and interactive user interfaces focused on delivering smooth user experiences and visually engaging designs. I build scalable frontend architectures that ensure performance, accessibility, and seamless navigation across all devices.",
    skills: [
      "React & Next.js Development",
      "Responsive Web Design",
      "Tailwind CSS & Modern UI",
      "TypeScript Integration",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Build secure, scalable, and high-performance server-side applications with clean architecture and efficient API handling. I develop reliable backend systems that ensure smooth communication between the frontend, server, and database.",
    skills: [
      "REST API Development",
      "Authentication & Authorization",
      "Node.js & Express.js",
      "Server Optimization & Security",
    ],
  },
  {
    title: "Database Management",
    description:
      "Design and manage structured, optimized, and scalable database systems for modern web applications. I focus on secure data handling, efficient queries, and maintaining reliable database performance for growing applications.",
    skills: [
      "MongoDB Database Design",
      "Database Optimization",
      "Data Modeling & Structuring",
      "Secure Data Management",
    ],
  },
];

export const projects: Project[] = [
  {
    image: xSocial,
    description:
      "A full-featured MERN stack e-commerce platform featuring dynamic product management, secure JWT authentication, a persistent shopping cart, and an integrated admin dashboard for real-time inventory and order tracking.",
    techStacks: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveSite: "https://x-social-clone.vercel.app/",
    category: "Social media",
  },
  {
    image: BookLibrary,
    description:
      "A productivity-focused workspace and team collaboration tool. It enables real-time task tracking, role-based access control, and seamless project management updates powered by WebSockets.",
    techStacks: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    liveSite: "https://book-library-frontend-gilt.vercel.app/",
    category: "Portfolio",
  },
  {
    image: MotionPixel,
    description:
      "An interactive and highly animated portfolio website built to showcase creative engineering. It features fluid UI transitions, ultra-smooth scrolling, and fully responsive fluid layouts optimized for performance.",
    techStacks: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "AOS",
    ],
    liveSite: "https://motion-pixel.vercel.app/",
    category: "Animated design",
  },
  {
    image: Estatein,
    description:
      "A scalable online learning management system featuring instructor tools, structured video lessons, automated student enrollment, progress dashboards, and automated payment processing.",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Cloudinary",
    ],
    liveSite: "https://estatein-website-lyart.vercel.app/",
    category: "E-commerce",
  },
  {
    image: TicTacToe,
    description:
      "An interactive web-based Tic-Tac-Toe game featuring an intelligent AI opponent (Minimax algorithm), local multiplayer modes, and state-saving features to track player scores across sessions.",
    techStacks: ["React", "TypeScript", "Tailwind CSS"],
    liveSite: "https://abrarmahabub125.github.io/tic-tac-toe-game/",
    category: "UI/UX design",
  },
  {
    image: TaskManager,
    description:
      "A personal productivity dashboard designed for time tracking and daily planning. Includes Kanban boards, priority labeling, automated deadline notifications, and custom analytics.",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveSite: "https://todo-task-manager-application-using.vercel.app/",
    category: "Portfolio",
  },
  {
    image: RocPaperSecissor,
    description:
      "A modern, stylized implementation of the classic Rock-Paper-Scissors game featuring rich animations, dynamic win/loss streak counters, and precise scoring mechanics against a computer dealer.",
    techStacks: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveSite: "https://abrarmahabub125.github.io/rock-paper-scissors-game/",
    category: "Animated design",
  },
  {
    image: appVerse,
    description:
      "A centralized application showcase platform and micro-frontend landing page highlighting a suite of web applications, tools, and developer utilities with streamlined navigation.",
    techStacks: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveSite: "https://app-verse.vercel.app/",
    category: "Portfolio",
  },
];
