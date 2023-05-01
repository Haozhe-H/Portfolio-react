import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Styles.css'

function Navbar() {
  return (
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
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;