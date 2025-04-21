import * as Si from 'react-icons/si';
import * as Fa from 'react-icons/fa';
import { IconType } from 'react-icons';

export const HERO_CONTENT = `
Full Stack Developer with experience in React, Node.js, Spring Boot, and mobile applications. Skilled in designing scalable applications, optimizing workflows, and improving user engagement. Strong problem-solving abilities with expertise in full-stack development, database management, and API optimization.`;

export const ABOUT_TEXT = `I am a final-year Computer Science and Engineering student at the Institute of Technical Education and Research (SOA), Bhubaneswar, with a strong academic record of 8.78 CGPA. Currently working as a Junior Java Developer Intern at EPAM Systems, I've gained valuable experience in developing and optimizing enterprise-level applications. My passion lies in creating efficient, scalable solutions that solve real-world problems while maintaining high performance and security standards.`;

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Campus Connect - Academic Management Platform",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    description: `
      A centralized academic platform designed to streamline placement activities and communication between students and institutions. Built for scalability and real-time interactions.

      Key Features:
      - Dynamic placement dashboard for real-time updates and analytics.
      - WebSocket-based chat system supporting 500+ concurrent users.
      - Secure authentication and role-based access using JWT.
      - Redis caching integrated to boost performance and reduce response time by 40%.
      - Achieved 35% increase in student engagement across institutions.
    `,
    technologies: ["React", "Spring Boot", "WebSocket", "Redis", "JWT", "MySQL"],
    projectLink: "https://campus-connect-frontend-oru2.onrender.com",
    githubLink: "https://github.com/HimanshuGolani",
  },
  {
    title: "SwasthyaRaksha - Health Data Management Platform",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
    description: `
      A health information system built to manage and share critical medical data securely and efficiently, ensuring timely access for patients and healthcare providers.

      Key Features:
      - Secure, role-based health data management and sharing.
      - Automated reminders for appointments and follow-ups.
      - Mobile application for real-time health status tracking.
      - Reduced response times by 50% via optimized data handling.
      - Increased user engagement by 20% through a seamless UX.
    `,
    technologies: ["React", "React Native", "Node.js", "MongoDB", "Express"],
    projectLink: "https://swasthyaraksha.onrender.com/",
    githubLink: "https://github.com/HimanshuGolani",
  },
  {
    title: "Mess-Mate - Home Cook Locator Platform",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    description: `
      A food-tech platform that connects users with verified home cooks in their locality, offering home-style meals on demand.

      Key Features:
      - Geo-location-based search to match users with nearby cooks.
      - Order tracking and cook-side dashboards for seamless management.
      - Integrated feedback and rating system boosting reviews by 40%.
      - Optimized frontend resulting in 20% faster load times.
      - Achieved 25% increase in daily user engagement.
    `,
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express"],
    projectLink: "https://messmate-eydv.onrender.com/",
    githubLink: "https://github.com/HimanshuGolani",
  }
];

export interface TechSkill {
  name: string;
  icon: IconType;
  color: string;
  proficiency: number;
}

export const TECH_SKILLS: TechSkill[] = [
  { name: "Java", icon: Fa.FaJava, color: "#E32C2E", proficiency: 90 },
  { name: "Spring Boot", icon: Si.SiSpring, color: "#6DB33F", proficiency: 85 },
  { name: "Python", icon: Si.SiPython, color: "#3776AB", proficiency: 80 },
  { name: "React", icon: Si.SiReact, color: "#61DAFB", proficiency: 85 },
  { name: "React Native", icon: Si.SiReact, color: "#5CD5F6", proficiency: 80 },
  { name: "Node.js", icon: Si.SiNodedotjs, color: "#339933", proficiency: 80 },
  { name: "JavaScript", icon: Si.SiJavascript, color: "#F7DF1E", proficiency: 85 },
  { name: "TypeScript", icon: Si.SiTypescript, color: "#3178C6", proficiency: 75 },
  { name: "MongoDB", icon: Si.SiMongodb, color: "#47A248", proficiency: 80 },
  { name: "MySQL", icon: Si.SiMysql, color: "#4479A1", proficiency: 85 },
  { name: "Oracle", icon: Si.SiOracle, color: "#F80000", proficiency: 80 },
  { name: "Express", icon: Si.SiExpress, color: "#808080", proficiency: 75 }, // changed to light gray
  { name: "HTML5", icon: Si.SiHtml5, color: "#E34F26", proficiency: 90 },
  { name: "CSS3", icon: Si.SiCss3, color: "#1572B6", proficiency: 85 },
  { name: "Git", icon: Fa.FaGit, color: "#F05032", proficiency: 85 }
];


export const CONTACT = {
  phoneNo: "+91 9178025899",
  email: "golanihimanshu@gmail.com",
  github: "https://github.com/HimanshuGolani",
  linkedin: "https://www.linkedin.com/in/himanshu-golani-15a588261",
};

export const RESUME_LINK = "https://drive.google.com/file/d/1wabNbTXsSFSwTkjD0cxRkR9urlN8pnpw/view?usp=sharing";

export const EXPERIENCE = [
  {
    title: "Junior Java Developer Intern",
    company: "EPAM Systems",
    period: "September 2024 - Present",
    achievements: [
      "Built and maintained robust backend services using Java and Spring Boot, with a strong emphasis on clean code and performance optimization.",
      "Designed and developed RESTful APIs for scalable and high-performance applications, ensuring seamless integration across services.",
      "Enhanced database operations using Hibernate, leveraging techniques such as query tuning, indexing, and relationship mapping to improve efficiency.",
      "Collaborated closely with senior developers to understand and apply advanced software architecture principles and backend design patterns.",
      "Contributed to code reviews and incorporated best practices, focusing on secure authentication and data handling.",
      "Worked within Agile methodologies, using tools like Jira and Git for version control, task tracking, and collaborative development."
    ]
  }
];


export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Institute of Technical Education and Research",
    location: "Bhubaneswar, Odisha",
    period: "Expected May 2025",
    grade: "8.78 CGPA"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Vikash Residential School",
    location: "Bhubaneswar, Odisha",
    period: "2021",
    grade: "78%"
  },
  {
    degree: "Secondary Education",
    institution: "Deepti Convent School",
    location: "Jeypore, Odisha",
    period: "2019",
    grade: "71.4%"
  }
];

export const AWARDS = [
  {
    title: "Hackerwar 5.0",
    organization: "Codex Club",
    description: "2nd Position in Hackerwar 5.0"
  }
];