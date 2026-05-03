import { Link, useParams } from "react-router-dom";
import Layout from "../Components/site/Layout";
import { projects } from "../data/projects";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  ExternalLink,
  Check,
} from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];

  if (!project) {
    return (
      <Layout>
        <div className="container-page py-32 text-center">
          <h1 className="font-display text-4xl font-bold">Project not found</h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-6 text-primary font-semibold"
          >
            <ArrowLeft size={18} /> Back to projects
          </Link>
        </div>
      </Layout>
    );
  }

  const next = projects[(idx + 1) % projects.length];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft border-b border-border">
        <div className="absolute inset-0 pattern-bg opacity-60" />
        <div className="container-page relative py-16 md:py-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft size={16} /> All Projects
          </Link>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            {project.category}
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold max-w-4xl tracking-tight">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            {project.summary}
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <section className="container-page -mt-8 relative z-10">
        <div className="rounded-3xl overflow-hidden shadow-card border border-border">
          <img
            src={project.image}
            alt={project.title}
            width={1600}
            height={1000}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>
      </section>

      {/* META + BODY */}
      <section className="container-page py-20 grid lg:grid-cols-3 gap-12">
        <aside className="lg:col-span-1">
          <div className="rounded-3xl border border-border bg-secondary/40 p-7 sticky top-28">
            <h3 className="font-display text-xl font-bold mb-6">
              Project Info
            </h3>
            <dl className="space-y-5">
              <Meta icon={User} label="Client" value={project.client} />
              <Meta icon={Calendar} label="Date" value={project.date} />
              <Meta icon={Clock} label="Duration" value={project.duration} />
              <Meta icon={Tag} label="Role" value={project.role} />
            </dl>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold bg-accent text-accent-foreground rounded-full px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-semibold shadow-glow hover:opacity-95 transition"
              >
                Visit Live <ExternalLink size={16} />
              </a>
            )}
          </div>
        </aside>

        <div className="lg:col-span-2 space-y-12">
          <Block title="The Challenge">{project.challenge}</Block>
          <Block title="The Solution">{project.solution}</Block>
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">
              The Results
            </h2>
            <ul className="space-y-3">
              {project.results.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-2xl border border-border p-5 bg-card"
                >
                  <span className="w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center shrink-0">
                    <Check size={16} />
                  </span>
                  <span className="font-semibold">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="container-page pb-24">
        <Link
          to={`/projects/${next.slug}`}
          className="group flex items-center justify-between rounded-3xl border border-border bg-card p-8 hover:shadow-card transition"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
              Next project
            </p>
            <h3 className="font-display text-2xl font-bold mt-2 group-hover:text-primary transition">
              {next.title}
            </h3>
          </div>
          <span className="w-14 h-14 grid place-items-center rounded-full bg-accent text-accent-foreground group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
            <ArrowRight />
          </span>
        </Link>
      </section>
    </Layout>
  );
};

const Meta = ({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-3">
    <Icon size={18} className="text-primary mt-0.5" />
    <div>
      <dt className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
        {label}
      </dt>
      <dd className="font-semibold mt-0.5">{value}</dd>
    </div>
  </div>
);

const Block = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h2 className="font-display text-3xl font-bold mb-4">{title}</h2>
    <p className="text-lg text-muted-foreground leading-relaxed">{children}</p>
  </div>
);

export default ProjectDetail;
