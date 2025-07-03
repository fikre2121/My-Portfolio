import React from 'react'
import clases from "./header.module.css"
 function Header() {
  return (
    <>
      <header className={clases.header}>
        <div className={clases.container}>
          <a href="#" className={clases.logo}>
            <span>FIKRE</span> KINDEYA
          </a>
          <nav className={clases.nav}>
            <ul className={clases.nav_list}>
              <li>
                <a href="#contact">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <button>DOWNLOAD CV</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header