import React ,{useState,useEffect}  from 'react';
import clases from "./header.module.css"
import Button from '../Globalcomponents/Button/Button';
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

 function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  // the scorrl effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${clases.header} ${scrolled ? clases.scrolled : ""}`}>
        <div className={clases.container}>
          <a href="#" className={clases.logo}>
            <span>FIKRE</span> KINDEYA
          </a>
          <nav className={`${clases.nav} ${menuOpen ? clases.open : ""}`}>
            <ul className={clases.nav_list}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <Button className="secondary">Download CV</Button>
              </li>
            </ul>
          </nav>
          <div className={clases.menu_icon} onClick={toggleMenu}>
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header