import Layout from "../Components/site/Layout";
import PageHero from "../components/site/PageHero";
import portrait from "../assets/images/person2.png";

const experiences = [
  {
    years: "2022 — Now",
    role: "Independent Designer & Developer",
    org: "Reeni Studio",
    desc: "Solo practice serving startups and culture brands across web and mobile.",
  },
  {
    years: "2019 — 2022",
    role: "Senior Product Designer",
    org: "ModernTech",
    desc: "Led design across two surfaces of a fintech app used by half a million people.",
  },
  {
    years: "2016 — 2019",
    role: "UI/UX Designer",
    org: "SoftCraft",
    desc: "Designed and shipped marketing sites and design systems for B2B clients.",
  },
];

const About = () => (
  <Layout>
    <PageHero eyebrow="About Me" title="A decade of quiet, careful craft." />
    <section className="container-page py-20 grid lg:grid-cols-5 gap-12 items-start">
      <div className="lg:col-span-2">
        <div className="rounded-3xl overflow-hidden bg-gradient-primary aspect-[4/5]">
          <img
            src={portrait}
            alt="Jane Cooper"
            width={1024}
            height={1280}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
      <div className="lg:col-span-3 space-y-6">
        <h2 className="font-display text-4xl font-bold">
          Hi, I'm Jane — designer, developer, persistent tinkerer.
        </h2>
        <p className="text-lg text-muted-foreground">
          I help ambitious teams ship digital work that feels considered. My
          practice sits at the intersection of brand, product, and engineering —
          which means fewer handoffs, tighter loops, and outcomes you can point
          at.
        </p>
        <p className="text-lg text-muted-foreground">
          I work best in small, senior teams, on problems where the answer isn't
          obvious yet. If that sounds like your project, I'd love to hear about
          it.
        </p>
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
          <Stat n="240+" l="Projects" />
          <Stat n="80+" l="Clients" />
          <Stat n="10+" l="Years" />
        </div>
      </div>
    </section>

    <section className="container-page py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Experience
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold mb-12">
        Where I've spent my years.
      </h2>
      <div className="space-y-4">
        {experiences.map((e) => (
          <div
            key={e.role}
            className="grid md:grid-cols-[200px_1fr] gap-6 rounded-3xl border border-border p-7 bg-card hover:shadow-card transition"
          >
            <div className="text-primary font-bold font-display text-lg">
              {e.years}
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">
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
