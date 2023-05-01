import React from "react";
import { Link } from "react-router-dom";
import "../styles/Styles.css";

function Navbar() {
  return (
    <header className="header">
      <h1>Haozhe Huang</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
