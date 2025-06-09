import myImage from '../assets/vkpat.png';
export default myImage
import frshcart from '../assets/frpt3.png';
import course from '../assets/csbk.png';
import authe from '../assets/auth.png';




// src/assets/assets.ts
// src/assets/assets.ts
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiPostgresql,
  SiTypescript,
  SiPostman,
} from 'react-icons/si';

import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  Icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  { name: 'HTML', Icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', Icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', Icon: FaJsSquare, color: 'text-yellow-400' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Express JS', Icon: SiExpress, color: 'text-purple-300' },
  { name: 'Node JS', Icon: FaNodeJs, color: 'text-green-500' },
  { name: 'React', Icon: FaReact, color: 'text-cyan-500' },
  { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-400' },
  { name: 'JWT', Icon: SiJsonwebtokens, color: 'text-pink-400' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Postman', Icon: SiPostman, color: 'text-orange-500' },
  { name: 'Git/Github', Icon: FaGithub, color: 'text-black-' },
];

// assets/asset.ts
export const projects = [
  {
    title: 'Fresh Cart-Grocery App',
    description: 'Fresh Cart is a fully functional grocery e-commerce application built using the MERN stack. with user/admin roles & Stripe integration.',
    image: frshcart,
    demo: 'https://fresh-cart-rust-six.vercel.app/',
    github: "https://github.com/vijayy75/Fresh-Cart"
,
  },
  {
    title: 'Course Selling-backend',
    description: 'Built with Node.js, Express, Zod validation and JWT for secure auth. Supports Admin/User roles— Admins manage courses, Users purchase and access them.',
    image:course ,
    demo: 'https://github.com/vijayy75/CourseSelling-backend-',
    github: "https://github.com/vijayy75/CourseSelling-backend-"
,
  },
  {
    title: 'Authentication System',
    description: 'A secure backend authentication system using Node.js, Express, and MongoDB. Supports user registration, login, logout, and OTP-based email verification using Nodemailer.',
    image: authe,
    demo: 'https://github.com/vijayy75/Authentication-API',
    github: "https://github.com/vijayy75/Authentication-API"
,
  },
];
