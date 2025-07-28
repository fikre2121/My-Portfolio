import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import styles from"./social.module.css"
const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`${styles.socials} ${className}`}>
      <a
        href="https://github.com/fikre2121"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://x.com/FKindeya14928"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/fikre-kindeya-45b5aa327"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a href="#">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialLinks;
