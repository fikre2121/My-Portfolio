// Footer.jsx
import React from "react";
import styles from "./Footer.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Fikre Kindeya</h2>
          <p>Full Stack Developer </p>
        </div>

        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#portfolio">Projects</a>
          <a href="#Skilles">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.socials}>
          <SocialLinks variant="footerStyle" />
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} Fikre Kindeya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
