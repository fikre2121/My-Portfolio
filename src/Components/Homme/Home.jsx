import React from "react";
import clases from "./home.module.css";
import { FaGithub, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import bgImage from "../../assets/images/person.jpg";
import Button from "../Globalcomponents/Button/Button";
import { SiX } from "react-icons/si"; 

export default function Home() {
  return (
    <div id="Home" className={clases.hero}>
      <div className={clases.content}>
        <h4>HELLO I'M</h4>
        <h1>
          Fikre <br /> Kindeya
        </h1>
        <p>
          <span>A Passionate </span>
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer ",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className={clases.animatedText}
          />
        </p>
        <a href="#contact">
          <Button>Say Hello</Button>
        </a>
      </div>

      <div className={clases.socials}>
        <a
          href="https://github.com/fikre2121"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href=" https://x.com/FKindeya14928"
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

      <div className={clases.heroImage} data-aos="fade-up">
        <img src={bgImage} alt="profile" />
      </div>
    </div>
  );
}
