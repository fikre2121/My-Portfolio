// components/SkillsProgress/SkillsProgress.jsx
import React from "react";
import styles from "./Skilles.module.css";
import Animatedline from "../Globalcomponents/Animatedline/Animatedline";

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 90 },
  { name: "Express.js", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "MySQL", level: 80 },
  { name: "Firebase", level: 85 },
 
];

const SkillsProgress = () => {
  return (
    <section  id="Skilles" className={styles.skillsSection}>
      <div className={styles.container_Top}>
        <Animatedline
          title={"My Skills"}
          subtitle={"My level of knowledge in some tools"}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;
