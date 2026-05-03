import { Link } from "react-router-dom";
import Layout from "../Components/site/Layout";
import PageHero from "../Components/site/PageHero";
import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

const Projects = () => (
  <Layout>
    <PageHero eyebrow="Selected Work" title="Projects" />
    <section className="container-page py-20">
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
            <div className="p-7">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">
                {p.category}
              </p>
              <div className="flex items-start justify-between gap-4 mt-2">
                <h3 className="font-display text-2xl font-bold group-hover:text-primary transition">
                  {p.title}
                </h3>
                <ArrowUpRight className="text-primary shrink-0 group-hover:rotate-12 transition" />
              </div>
              <p className="text-muted-foreground mt-3">{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Projects;
