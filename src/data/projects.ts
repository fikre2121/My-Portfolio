import p1 from "../assets/project-1.jpg";
import p2 from "../assets/project-2.jpg";
import p3 from "../assets/project-3.jpg";
import p4 from "../assets/project-4.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  client: string;
  date: string;
  duration: string;
  role: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "kshs-alumni-platform",
    title: "KSHS Alumni Association Platform",
    category: "Full Stack",
    image: p1,
    client: "Kallamino Special High School (KSHS)",
    date: "2026",
    duration: "MVP Phase",
    role: "Full Stack Developer",
    tags: ["React", "Node.js", "Tailwind css", "Postgress", "Socket.io"],

    summary:
      "A full-stack MVP built to connect Kallamino Special High School alumni and students through communication, networking, and opportunity sharing.",

    challenge:
      "KSHS alumni and students lacked a centralized platform to reconnect, communicate, and share opportunities such as jobs, internships, and events.",

    solution:
      "Built a scalable MVP featuring secure authentication, an alumni directory, real-time messaging (private and batch chats), a job and internship board, and an events system with RSVP functionality.",

    results: [
      "Enabled alumni-student networking in one platform",
      "Real-time communication through chat system",
      "Centralized jobs, internships, and event sharing",
    ],

    liveUrl: "https://kshsconnect.netlify.app/",
  },
  {
    slug: "abes-garage-management-system",
    title: "Abe’s Garage — Service Management Platform",
    category: "Full Stack Web App",
    image: p3, // replace with your project screenshot
    client: "Abe’s Garage (Case Study)",
    date: "May 2026",
    duration: "4–6 weeks",
    role: "Full Stack Developer",

    tags: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "REST API",
      "Admin Dashboard",
    ],

    summary:
      "A full-stack web application designed to digitize and streamline garage operations including customer management, service tracking, and mechanic task assignment.",

    challenge:
      "The garage relied heavily on manual paperwork, phone calls, and disconnected communication to manage customers, vehicle repairs, and service updates, leading to inefficiency and lost time.",

    solution:
      "Built a centralized web-based system that manages customers, vehicles, service orders, and mechanic assignments with real-time status tracking and role-based access control.",

    results: [
      "Reduced manual customer data entry",
      "Minimized status inquiry phone calls",
      "Improved task assignment efficiency",
      "Enabled digital service tracking for customers",
      "Improved customer retention through stored service history",
    ],
    liveUrl: "#",
  },
  {
    slug: "evangadi-forum",
    title: "Evangadi Forum",
    category: "Full Stack",
    image: p2,
    client: "Evangadi Bootcamp",
    date: "2025",
    duration: "Bootcamp Project",
    role: "Full Stack Developer",
    tags: ["React", "Node.js", "Tailwind CSS", "MySQL", "Authentication"],

    summary:
      "A full-stack question-and-answer web application that allows users to ask questions, share knowledge, and engage with the community through discussions and answers.",

    challenge:
      "Building a scalable and user-friendly platform where authenticated users could securely post questions, provide answers, and interact within a community-driven environment.",

    solution:
      "Developed a responsive full-stack forum application with secure authentication, question posting, answer submission, and dynamic content rendering using React, Node.js, MySQL, and Tailwind CSS.",

    results: [
      "Implemented secure user authentication and authorization",
      "Enabled real-time community-driven question and answer interactions",
      "Built a clean and responsive user interface for better user experience",
    ],

    liveUrl: "https://golden-medovik-db5600.netlify.app/",
  },
  {
    slug: "curated-portfolio-brand",
    title: "Studio Margin — Brand Identity",
    category: "Branding",
    image: p3,
    client: "Studio Margin",
    date: "November 2024",
    duration: "6 weeks",
    role: "Brand Designer",
    tags: ["Identity", "Print", "Guidelines"],
    summary:
      "An identity for an architecture studio built around restraint, contrast, and the quiet authority of a good grid.",
    challenge:
      "The studio wanted gravitas without arrogance and wordmark flexibility for both monumental signage and paperwork.",
    solution:
      "A custom wordmark, a two-weight system, and a stationery suite designed to age gracefully across decades.",
    results: [
      "Featured in Brand New",
      "Shortlisted for Brand of the Year 2024",
      "Adopted across 14 client touchpoints",
    ],
  },
  {
    slug: "saas-landing-experience",
    title: "Pulse — SaaS Landing Experience",
    category: "Web Development",
    image: p4,
    client: "Pulse Analytics",
    date: "September 2024",
    duration: "5 weeks",
    role: "Full-stack Designer",
    tags: ["React", "Framer Motion", "SEO"],
    summary:
      "A high-conversion landing for a developer-focused analytics product, built for speed and storytelling.",
    challenge:
      "A crowded category, a technical audience, and a marketing team that wanted to ship updates without waiting for a deploy.",
    solution:
      "A component-driven landing with editor-friendly content blocks, animated proof points, and a sub-second TTI on mobile.",
    results: [
      "Lighthouse 99 across the board",
      "Trial signups +212%",
      "Marketing ships pages in hours, not days",
    ],
    liveUrl: "#",
  },
];
