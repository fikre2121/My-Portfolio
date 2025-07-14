import React, { useState } from "react";
import classes from "./Portfolio.module.css";
import Animatedline from "../Globalcomponents/Animatedline/Animatedline";
import { FiExternalLink } from "react-icons/fi";

const portfolioData = [
  {
    id: 1,
    category: "frontend",
    image:
      "https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-1.jpg",
    title: "Responsive Landing Page",
    link: "https://phenomenal-duckanoo-d43214.netlify.app/",
  },
  {
    id: 2,
    category: "fullstack",
    image:
      "https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-2.jpg",
    title: "E-Commerce Platform",
    link: "#",
  },
  {
    id: 3,
    category: "frontend",
    image:
      "https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-3.jpg",
    title: "Portfolio Website",
    link: "#",
  },
  {
    id: 4,
    category: "fullstack",
    image:
      " https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-4.jpg",
    title: "Blog with Admin Panel",
    link: "#",
  },
  // Add more projects here
];

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
                <a href={item.link} className={classes.viewDetails}>
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
