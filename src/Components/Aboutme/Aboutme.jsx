import React from "react";
import profileImg from "../../assets/images/person.jpg";
import clases from "./aboutme.module.css";
import { FaGithub, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Animatedline from "../Globalcomponents/Animatedline/Animatedline";
import Button from "../Globalcomponents/Button/Button";
const AboutMe = () => {
  return (
    <section id="about" className={clases.topContaineer}>
      <Animatedline title={"About Me"} subtitle={"Get to know me"} />

      <div className={clases.about}>
        <div className={clases.container}>
          <div className={clases.profileImg}>
            <img src={profileImg} alt="Emma Smith" />
          </div>

          <div className={clases.info}>
            <h3>Who am I?</h3>
            <h1>
              I'm Fikre kindeya, a Full stack Developer and Modern Website
              Developer
            </h1>

            <p>
              I am a freelancer based in Ethiopia and I have been building
              noteworthy UX/UI designs and websites for years, which comply with
              the latest design trends. I help convert a vision and an idea into
              meaningful and useful products. Having a sharp eye for product
              evolution helps me prioritize tasks, iterate fast and deliver
              faster.
            </p>
            <hr />
            <div className={clases.details}>
              <div>
                <p>
                  <span>Name:</span> Fikre Kindeya
                </p>
                <p>
                  <p>
                    <span>From:</span> Addis Ababa, Ethiopia
                  </p>
                </p>
              </div>
              <div>
                <p>
                  <span>Age:</span> 23
                </p>
                <p>
                  <span>Email:</span>
                  <a href="mailto:fikre.gebremariam2121@gmail.com">
                    fikre.gebremariam2121@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className={clases.social_button}>
              <div>
                <a href="#">
                  <Button> Download CV</Button>
                </a>
              </div>
              <div className={clases.line_space}></div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
