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
    tags: ["React", "Node.js","Tailwind css" ,"Postgress", "Socket.io"],

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

    liveUrl: "#",
  },
  {
    slug: "thoughtful-mobile-app",
    title: "Thoughtful Banking Mobile App",
    category: "App Development",
    image: p2,
    client: "Northwave Bank",
    date: "January 2025",
    duration: "12 weeks",
    role: "Product Designer",
    tags: ["iOS", "Android", "Fintech"],
    summary:
      "A calm, considered banking experience designed around the moments that matter, not the metrics that don't.",
    challenge:
      "Customers felt overwhelmed by the existing app. Daily active sessions were dropping and support tickets were rising.",
    solution:
      "A complete IA reset, a softer visual language, and a single-question onboarding flow that learns instead of asks.",
    results: [
      "DAU up 41% in 90 days",
      "Onboarding completion 92%",
      "Support tickets down 28%",
    ],
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
