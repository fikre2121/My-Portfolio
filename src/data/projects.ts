import p1 from "../assets/project-1.png";
import p2 from "../assets/project-2.png";
import p3 from "../assets/project-3.png";
import p4 from "../assets/project-4.png";
import p5 from "../assets/project-5.jpg";
import p6 from "../assets/project-6.jpg";

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

    liveUrl: "https://kshsconnect.vercel.app/",
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
    liveUrl: "https://abegaragemainappp.vercel.app/",
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

    liveUrl: "https://evangdi-forum.vercel.app/",
  },
  {
    slug: "amazon-clone-fullstack",
    title: "Amazon Clone",
    category: "Full Stack Web App",
    image: p4,
    client: "Personal Project",
    date: "November 2024",
    duration: "6 weeks",
    role: "Full Stack Developer",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Firebase",
      "Authentication",
      "Stripe",
    ],
    summary:
      "A full-stack e-commerce platform recreating Amazon's core shopping experience — product browsing, cart, checkout, and order management.",
    challenge:
      "Replicating a complex, high-traffic e-commerce flow (product catalog, cart persistence, secure checkout, and order tracking) with clean architecture and responsive UI, using only a solo build timeline.",
    solution:
      "Built a React frontend with a Node/Express REST API backend, implemented user authentication, a persistent shopping cart, product search and filtering, and an order flow with simulated payment handling — structured for easy extension into real payment gateways.",
    results: [
      "Fully responsive UI across mobile and desktop",
      "Implemented end-to-end auth, cart, and checkout flow",
      "Deployed and hosted live on Netlify",
    ],
    liveUrl: "https://amazon-clone-sable-delta.vercel.app/",
  },
  {
    slug: "netflix-clone-frontend",
    title: "Netflix Clone",
    category: "Frontend Web App",
    image: p6,
    client: "Personal Project",
    date: "January 2024",
    duration: "2 weeks",
    role: "Frontend Developer",
    tags: [
      "React",
      "TMDB API",
      "REST API Integration",
      "Axios",
      "Bootstrap",
      "Responsive Design",
      "UI/UX",
    ],
    summary:
      "A Netflix-style browsing UI built around deep integration with the TMDB API — dynamic content rows, live search, and detail views all driven by real API data.",
    challenge:
      "Going beyond a static UI clone by architecting a frontend that consumes a real, complex third-party API — handling multiple endpoints (trending, genres, search, recommendations), managing loading and error states, and keeping requests efficient without a backend layer.",

    solution:
      "Built with React, integrating the TMDB API across several endpoints to populate dynamic content rows, a hero banner, and genre-based browsing. Structured a dedicated API service layer with Axios for clean request handling, implemented debounced live search against the API, handled async loading/error states gracefully, and managed API keys securely via environment variables.",

    results: [
      "Integrated 5+ TMDB API endpoints (trending, genres, search, details, recommendations)",
      "Built a reusable API service layer with clean request/response handling",
      "Implemented live search with debounced API calls",
      "Fully responsive UI across mobile and desktop",
    ],
    liveUrl: "https://netflix-clone-2025-seven.vercel.app/",
  },
  {
    slug: "apple-clone-frontend",
    title: "Apple Website Clone",
    category: "Frontend Web App",
    image: p5,
    client: "Personal Project",
    date: "Sebtember 2024",
    duration: "2 weeks",
    role: "Frontend Developer",
    tags: ["React", "GSAP", "Tailwind CSS", "Animation", "Responsive Design"],
    summary:
      "A front-end recreation of Apple's product landing page, focused on matching their signature scroll-based animations and minimalist visual style.",
    challenge:
      "Recreating Apple's highly polished, animation-driven UI — precise scroll-triggered transitions, video-based product reveals, and pixel-perfect minimalist typography — using only frontend tooling.",
    solution:
      "Built with React, Tailwind CSS for layout and styling, and GSAP for scroll-triggered animations and section transitions, closely matching Apple's product page motion design and visual hierarchy without any backend functionality.",
    results: [
      "Closely matched Apple's animation and scroll behavior",
      "Clean, minimalist UI faithful to the original design",
      "Fully responsive across mobile and desktop",
    ],
    liveUrl: "https://animated-kulfi-6c403a.netlify.app/",
  },
];
