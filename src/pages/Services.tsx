import Layout from "../Components/site/Layout";
import PageHero from "../Components/site/PageHero";
import {
  Code2,
  Palette,
  Search,
  Megaphone,
  Smartphone,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    desc: "Considered, content-first interfaces with editorial polish.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Production React + TypeScript, performance built in from day one.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-feeling iOS and Android products people actually keep open.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Component libraries that scale across teams and surfaces.",
  },
  {
    icon: Search,
    title: "UX Research",
    desc: "Lightweight discovery — interviews, prototypes, decisions you can act on.",
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    desc: "Identities and voice frameworks built to age well.",
  },
];

const Services = () => (
  <Layout>
    <PageHero eyebrow="What I Do" title="Services" />
    <section className="container-page py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-3xl border border-border bg-card p-8 hover:shadow-glow hover:-translate-y-1 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent text-accent-foreground grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
              <s.icon size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold mt-6">{s.title}</h3>
            <p className="text-muted-foreground mt-3">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;
