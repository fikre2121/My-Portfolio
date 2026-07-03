import Layout from "../Components/site/Layout";
import PageHero from "../components/site/PageHero";
import portrait from "../assets/images/person2.png";
import {
  
  Instagram,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
const experiences = [
  {
    years: "2026 — Present",
    role: "Full-Stack & AI Developer",
    org: "Personal Projects",
    desc: "Learning to build AI-powered web applications using React, Next.js, Node.js, PostgreSQL, Python, and LLM APIs.",
  },
  {
    years: "2024 — 2025",
    role: "Full-Stack Developer",
    org: "Project-Based Learning",
    desc: "Built multiple real-world projects using React, Next.js, Node.js, Express, PostgreSQL, and Tailwind CSS.",
  },
  {
    years: "2023",
    role: "Software Development Student",
    org: "Self-Learning Journey",
    desc: "Started learning programming fundamentals, web development, APIs, databases, and Git through Udacity and online platforms.",
  },
];

const About = () => (
  <Layout>
    <PageHero
      eyebrow="About Me"
      title="Building modern software and exploring AI-powered applications."
    />

    <section className="container-page py-20 grid lg:grid-cols-5 gap-12 items-start">
      <div className="lg:col-span-2">
        <div className="rounded-3xl overflow-hidden bg-gradient-primary aspect-[4/5]">
          <img
            src={portrait}
            alt="Fikre Kindeya"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>

      <div className="lg:col-span-3 space-y-5">
        <h2 className="font-display text-4xl font-bold">
          Hi, I'm Fikre — Full-Stack Developer focused on building real-world
          products.
        </h2>

        <p className="text-lg text-muted-foreground">
          I started my journey in 2023 learning programming fundamentals and how
          the web works. I focused on understanding concepts deeply instead of
          just following tutorials.
        </p>

        <p className="text-lg text-muted-foreground">
          From 2024 to 2025, I built many full-stack projects using React,
          Next.js, Node.js, and PostgreSQL, improving my skills through real
          development experience.
        </p>

        <p className="text-lg text-muted-foreground">
          Now, I'm focused on building AI-powered applications using LLMs and
          modern web technologies to create smarter digital solutions.
        </p>

          <div className="flex items-center gap-8 pt-6 border-t border-border mt-6">
            <div className="flex items-center gap-6">
              {[Instagram, Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 grid place-items-center rounded-full border border-border hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
      
      </div>
    </section>

    <section className="container-page py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Experience
      </p>

      <h2 className="mt-3 font-display text-4xl font-bold mb-10">My Journey</h2>

      <div className="space-y-4">
        {experiences.map((e) => (
          <div
            key={e.role}
            className="grid md:grid-cols-[200px_1fr] gap-6 rounded-3xl border border-border p-6 bg-card hover:shadow-card transition"
          >
            <div className="text-primary font-bold">{e.years}</div>

            <div>
              <h3 className="font-bold">
                {e.role} ·{" "}
                <span className="text-muted-foreground font-normal">
                  {e.org}
                </span>
              </h3>
              <p className="text-muted-foreground mt-2">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

const Stat = ({ n, l }: { n: string; l: string }) => (
  <div>
    <div className="font-display text-4xl font-bold text-gradient">{n}</div>
    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
      {l}
    </div>
  </div>
);

export default About;
