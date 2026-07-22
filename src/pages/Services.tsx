import Layout from "../Components/site/Layout";
import PageHero from "../Components/site/PageHero";
import {
  Atom,
  Server,
  Braces,
  Triangle,
  GitBranch,
  Cloud,
  Database,
  Table2,
} from "lucide-react";

const skills = [
  {
    icon: Atom,
    title: "React",
    desc: "Building interactive, component-driven UIs with hooks and modern patterns.",
    level: 90,
  },
  {
    icon: Triangle,
    title: "Next.js",
    desc: "Server-rendered and statically generated apps with file-based routing.",
    level: 80,
  },
  {
    icon: Braces,
    title: "JavaScript",
    desc: "ES6+ fundamentals — async/await, closures, and clean modern syntax.",
    level: 90,
  },
  {
    icon: Server,
    title: "Node.js",
    desc: "Building REST APIs and backend services with Express.",
    level: 85,
  },
  {
    icon: Database,
    title: "PostgreSQL",
    desc: "Relational schema design, queries, and data modeling.",
    level: 75,
  },
  {
    icon: Table2,
    title: "MySQL",
    desc: "Structuring and querying relational databases for production apps.",
    level: 75,
  },
  {
    icon: GitBranch,
    title: "Git",
    desc: "Version control, branching workflows, and collaborative development.",
    level: 85,
  },
  {
    icon: Cloud,
    title: "AWS",
    desc: "Deploying and hosting full-stack applications in the cloud.",
    level: 65,
  },
];

const Skills = () => (
  <Layout>
    <PageHero eyebrow="What I Know" title="Skills" />
    <section className="container-page py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((s) => (
          <div
            key={s.title}
            className="group rounded-3xl border border-border bg-card p-8 hover:shadow-glow hover:-translate-y-1 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent text-accent-foreground grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
              <s.icon size={24} />
            </div>
            <h3 className="font-display text-xl font-bold mt-6">{s.title}</h3>
            <p className="text-muted-foreground text-sm mt-3">{s.desc}</p>

            <div className="mt-5 h-1.5 w-full rounded-full bg-accent overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-primary transition-all duration-700"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Skills;
