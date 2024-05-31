import React from "react";
import { getImageUrl } from "../../utils";
import  "./navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
          alt="menu-btn"
          className="menuBtn"
          src={getImageUrl("nav/menuIcon.png")}
       
        />
        <ul className="menuItems">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
