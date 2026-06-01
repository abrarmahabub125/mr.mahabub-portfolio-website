import DatabaseIcon from "../assets/icons/database-icon.png";
import FrontendIcon from "../assets/icons/frontend-icon.png";
import BackendIcon from "../assets/icons/server.png";
import appVerse from "../assets/images/app-verse.png";
import BookLibrary from "../assets/images/book-library.png";
import DrafterDesign from "../assets/images/drafter-design.png";
import Estatein from "../assets/images/estatein.png";
import FilpCardGame from "../assets/images/filp-card-game.png";
import HangManGame from "../assets/images/hang-man-game.png";
import MotionPixel from "../assets/images/motion-pixel.png";
import RocPaperSecissor from "../assets/images/rock-paper-scissor.png";
import TaskManager from "../assets/images/task-manager.png";
import TicTacToe from "../assets/images/tic-tac-teo.png";
import TicketManagement from "../assets/images/ticket-management-app.png";
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
    "Social Media",
    "Management System",
    "Portfolio",
    "Real Estate",
    "Productivity",
    "Game",
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
      "A full-featured social media platform built with the MERN stack, featuring secure JWT authentication, post creation and interactions, user profiles, and real-time social engagement capabilities.",
    techStacks: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveSite: "https://x-social-clone.vercel.app/",
    category: "Social Media",
  },
  {
    image: BookLibrary,
    description:
      "A digital library management system that allows users to browse, manage, and organize books efficiently. Designed with a clean interface and optimized workflows for seamless book tracking and management.",
    techStacks: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveSite: "https://book-library-frontend-gilt.vercel.app/",
    category: "Management System",
  },
  {
    image: MotionPixel,
    description:
      "An interactive and highly animated portfolio website showcasing creative web experiences with smooth transitions, engaging micro-interactions, and responsive design principles.",
    techStacks: ["React", "Tailwind CSS"],
    liveSite: "https://motion-pixel.vercel.app/",
    category: "Portfolio",
  },
  {
    image: Estatein,
    description:
      "A modern real estate platform designed to showcase property listings, featured properties, and real estate services through an elegant and user-friendly interface.",
    techStacks: ["React", "Tailwind CSS"],
    liveSite: "https://estatein-website-lyart.vercel.app/",
    category: "Real Estate",
  },
  {
    image: TicTacToe,
    description:
      "A classic Tic-Tac-Toe game featuring an intelligent AI opponent, local multiplayer support, responsive design, and persistent score tracking for an engaging gameplay experience.",
    techStacks: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://abrarmahabub125.github.io/tic-tac-toe-game/",
    category: "Game",
  },
  {
    image: TaskManager,
    description:
      "A productivity-focused task management application that helps users organize work efficiently with task tracking, status management, and intuitive workflow organization.",
    techStacks: ["Tailwind CSS", "React.js"],
    liveSite: "https://todo-task-manager-application-using.vercel.app/",
    category: "Productivity",
  },
  {
    image: RocPaperSecissor,
    description:
      "A modern implementation of the classic Rock-Paper-Scissors game featuring dynamic animations, interactive gameplay, score tracking, and a polished user experience.",
    techStacks: ["HTMl", "CSS", "JavaScript"],
    liveSite: "https://abrarmahabub125.github.io/rock-paper-scissors-game/",
    category: "Game",
  },
  {
    image: appVerse,
    description:
      "A centralized application showcase platform highlighting multiple web applications, developer tools, and utilities with streamlined navigation and a modern user experience.",
    techStacks: ["TypeScript", "Tailwind CSS", "React.js"],
    liveSite: "https://app-verse.vercel.app/",
    category: "Portfolio",
  },
  {
    image: DrafterDesign,
    description:
      "A modern portfolio website concept focused on clean layouts, elegant typography, and responsive design to effectively showcase personal projects and creative work.",
    techStacks: ["HTML", "CSS", "JavaScript"],
    liveSite:
      "https://abrarmahabub125.github.io/draftr-design-prototype-portfolio_website/",
    category: "Portfolio",
  },
  {
    image: HangManGame,
    description:
      "An interactive word guessing game where players uncover hidden words by selecting letters. Features dynamic game logic, responsive design, and an enjoyable gameplay experience.",
    techStacks: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://abrarmahabub125.github.io/hangman-game/",
    category: "Game",
  },
  {
    image: FilpCardGame,
    description:
      "A memory card matching game that challenges players to find matching pairs using concentration and recall skills. Includes smooth animations and engaging game mechanics.",
    techStacks: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://abrarmahabub125.github.io/flip-card-game/",
    category: "Game",
  },
  {
    image: TicketManagement,
    description:
      "A ticket management system built to streamline issue tracking and support workflows, allowing users to create, manage, update, and monitor tickets efficiently.",
    techStacks: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveSite: "https://ticket-management-app-kappa.vercel.app/",
    category: "Management System",
  },
];
