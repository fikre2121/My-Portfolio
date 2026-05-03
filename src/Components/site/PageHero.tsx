import { Link } from "react-router-dom";

type Props = { eyebrow: string; title: string; crumb?: string };

const PageHero = ({ eyebrow, title, crumb }: Props) => (
  <section className="relative overflow-hidden bg-gradient-soft border-b border-border">
    <div className="absolute inset-0 pattern-bg opacity-60" />
    <div className="container-page relative py-20 md:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-display font-bold text-5xl md:text-6xl tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-muted-foreground text-sm">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-semibold">{crumb ?? title}</span>
      </p>
    </div>
  </section>
);

export default PageHero;
