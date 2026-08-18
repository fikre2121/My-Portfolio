import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";



const socialLinks = [

  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/fikrekindeya/",
  },
  {
    icon: Twitter,
    url: "https://x.com/FKindeya14928",
  },
  {
    icon: Github,
    url: "https://github.com/fikre2121",
  },
];



const Footer = () => (
  <footer className="mt-32 border-t border-border bg-secondary/40">
    <div className="container-page py-16 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground font-display font-bold">
            F
          </span>
          <span className="font-display text-2xl font-bold">Fikre</span>
        </Link>
        <p className="mt-4 max-w-md text-muted-foreground">
          Full-Stack Developer focused on building responsive, scalable, and
          production-ready web applications. Passionate about solving real-world
          problems through clean code, modern technologies, and continuous
          learning.
        </p>
        <div className="flex items-center gap-8 pt-6 border-t border-border mt-6">
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 grid place-items-center rounded-full border border-border hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold mb-4">Pages</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-primary">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-bold mb-4">Contact</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li>fikre.gebremariam2121@gamil.com</li>
          <li>+251928140930</li>
          <li>Addis Ababa, Ethiopia</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
