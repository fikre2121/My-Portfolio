import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground font-display font-bold">
            F
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">
            Fikre
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-glow hover:opacity-95 transition"
          >
            Hire Me
          </Link>
        </div>
        <button
          className="md:hidden p-2 rounded-lg border border-border"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-semibold py-2 ${isActive ? "text-primary" : "text-foreground"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
