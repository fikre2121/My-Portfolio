import React, { useState } from "react";
import classes from "./Portfolio.module.css";
import Animatedline from "../Globalcomponents/Animatedline/Animatedline";
import { FiExternalLink } from "react-icons/fi";
import {portfolioData }from "../../data/Data";

const categories = ["all", "frontend", "fullstack"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className={classes.portfolioSection}>
      <Animatedline
        title={"My Projects"}
        subtitle={"Showcasing some of my best work"}
      />
      <div className={classes.containeAll}>
        <div className={classes.filterControls}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${classes.filterButton} ${
                selectedCategory === cat ? classes.active : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "all"
                ? "All"
                : cat === "frontend"
                ? "Front-End"
                : "Full-Stack"}
            </button>
          ))}
        </div>

        <div className={classes.projectGrid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={classes.projectCard}>
              <img
                src={item.image}
                alt={item.title}
                className={classes.projectImage}
              />
              <div className={classes.cardOverlay}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={item.link}
                  className={classes.viewDetails}
                  target="_blank"
                >
                  View Project <FiExternalLink className={classes.icon} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
