import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiX } from "react-icons/si"; 
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
        <SiX />
      </a>
      <a
        href="https://www.linkedin.com/in/fikre-kindeya-45b5aa327"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a href="https://web.facebook.com/fikre.kindeya/" target="_blank">
        <FaFacebookF />
      </a>
    </div>
  );
};

export default SocialLinks;
