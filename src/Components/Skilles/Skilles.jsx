import React, { useRef, useEffect, useState } from "react";
import styles from "./Skilles.module.css";
import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiBootstrap, SiTailwindcss } from "react-icons/si";

import { SiExpress, SiFirebase, SiMysql } from "react-icons/si";
import Animatedline from "../Globalcomponents/Animatedline/Animatedline";

const skills = [
  { name: "React.js", level: 90, icon: <FaReact color="#61DBFB" /> },
  { name: "JavaScript", level: 90, icon: <FaJsSquare color="#f0db4f" /> },
  { name: "HTML/CSS", level: 95, icon: <FaHtml5 color="#e44d26" /> },
  { name: "Node.js", level: 85, icon: <FaNodeJs color="#68A063" /> },
  { name: "Express.js", level: 95, icon: <SiExpress color="#999" /> },
  { name: "MySQL", level: 80, icon: <SiMysql color="#00758F" /> },
  { name: "Firebase", level: 85, icon: <SiFirebase color="#FFCA28" /> },
  { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "Bootstrap", level: 85, icon: <SiBootstrap color="#7952B3" /> },
];

const SkillsProgress = () => {
  return (
    <section id="Skilles" className={styles.skillsSection}>
      <div className={styles.container_Top}>
        <Animatedline
          title={"My Skills"}
          subtitle={"My level of knowledge in some tools"}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={styles.skillItem}
              
              data-aos="fade-up"
            >
              <div className={styles.iconWrapper}>{skill.icon}</div>
              <div className={styles.infoWrapper}>
                <div className={styles.skillHeader}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;
