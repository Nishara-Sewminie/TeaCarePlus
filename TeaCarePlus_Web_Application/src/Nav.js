// Nav.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Nav.css'; // Import a separate CSS file for styling

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="services" smooth={true} duration={500}>
            Services
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
