import React from "react";
import clases from "./home.module.css";
import { FaGithub, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import bgImage from "../../assets/images/person.jpg";
import Button from "../Globalcomponents/Button/Button";
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
              "Full stack Developer",
              2000,
              "Frontend Engineer",
              2000,
              "Full Stack Coder",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className={clases.animatedText}
          />
        </p>
        <Button>Say Hello</Button>
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

      <div className={clases.heroImage}>
        <img src={bgImage} alt="profile" />
      </div>
    </div>
  );
}
