import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Palette,
  Search,
  Megaphone,
  Sparkles,
} from "lucide-react";
import Layout from "../Components/site/Layout";
import portrait from "../assets/hero-portrait.png";
import { projects } from "../data/projects";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    desc: "Calm, considered interfaces with editorial polish.",
    count: "120 Projects",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Production-grade React, TypeScript, performance-first.",
    count: "241 Projects",
  },
  {
    icon: Search,
    title: "UX Research",
    desc: "Lightweight discovery that ships, not shelves.",
    count: "240 Projects",
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    desc: "Identities built to age well across every surface.",
    count: "331 Projects",
  },
];

const skills = [
  { label: "React", value: 95 },
  { label: "Nod.js", value: 95 },
  { label: "Next.js", value: 92 },
  { label: "Postgress", value: 88 },
  { label: "AWS", value: 80 },
];

const clients = ["Northwave", "Pulse", "Lumen", "Margin", "Atelier", "Kindred"];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="absolute inset-0 pattern-bg opacity-70" />
        <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} /> Available for new projects
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              I'm Fikre Kindeya, a{" "}
              <span className="text-gradient">fullstack Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              I don’t just write code — I build complete digital experiences.
              From intuitive front-end interfaces to reliable back-end systems,
              I create products that work, scale, and deliver value — while
              continuously exploring AI integration to build smarter
              applications.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-glow hover:opacity-95 transition"
              >
                View Portfolio <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/10 px-7 py-3.5 font-semibold hover:border-primary hover:text-primary transition"
              >
                Let's Talk
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-6 border-t border-border mt-6">
              <div>
                <div className="font-display text-3xl font-bold">3+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Years experience
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold">6+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Projects completed
                </div>
              </div>
              {/* <div>
                <div className="font-display text-3xl font-bold">
                  Full-stack
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Developer
                </div>
              </div> */}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-gradient-primary">
              <div className="absolute inset-0 flex items-end justify-center">
                <span className="font-display text-[7rem] lg:text-[10rem] font-bold text-primary-foreground/20 leading-none mb-[-1rem]">
                  FIKRE
                </span>
              </div>
              <img
                src={portrait}
                alt="Jane Cooper, web designer and developer"
                width={1024}
                height={1024}
                className="relative z-10 w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-24">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              What I Do
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Inspiring the world, <br /> one project at a time.
            </h2>
          </div>
          <p className="text-muted-foreground md:self-end">
            From the first sketch to the last deploy — strategy, design, and
            engineering wrapped in one tight feedback loop. Here's what I help
            teams ship.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-border bg-card p-7 hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent text-accent-foreground grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                <s.icon size={24} />
              </div>
              <h3 className="font-display text-xl font-bold mt-6">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              <div className="mt-6 pt-6 border-t border-border text-xs font-semibold uppercase tracking-widest text-primary">
                {s.count}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-page py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Toolkit
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Building modern web applications with the right tools.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              I build responsive, user-focused applications using React,
              Next.js, and Node.js, while expanding my skills into AI
              integration to create smarter, more dynamic web experiences.
            </p>
          </div>
          <div className="space-y-6">
            {skills.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between font-semibold mb-2">
                  <span>{s.label}</span>
                  <span className="text-primary">{s.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="container-page py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Latest Portfolio
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-2xl">
              Transforming ideas into exceptional experiences.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
          >
            See all projects <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group rounded-3xl overflow-hidden border border-border bg-card hover:shadow-card transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">
                    {p.category}
                  </p>
                  <h3 className="font-display text-2xl font-bold mt-2 group-hover:text-primary transition">
                    {p.title}
                  </h3>
                </div>
                <span className="w-12 h-12 grid place-items-center rounded-full bg-accent text-accent-foreground group-hover:bg-gradient-primary group-hover:text-primary-foreground transition shrink-0">
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-12 flex flex-wrap items-center justify-around gap-8">
          {clients.map((c) => (
            <span
              key={c}
              className="font-display text-2xl font-bold text-muted-foreground/70 hover:text-primary transition"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-12 md:p-20 text-primary-foreground">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Have a project in mind? Let's build something memorable.
            </h2>
            <div className="md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 font-bold hover:scale-105 transition-transform"
              >
                Start a project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
