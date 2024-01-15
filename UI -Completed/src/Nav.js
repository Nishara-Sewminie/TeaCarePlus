// Nav.js
import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
//import Contact from './Contact';
//import Developer from './Developer';
import './Nav.css';

const Nav = ({ scrollToHome }) => {
  const handleHomeClick = () => {
    scrollToHome();
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <RouterLink to="home" onClick={handleHomeClick}>
            Home
          </RouterLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="ImageUpload" smooth={true} duration={500}>
            Image Upload
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
        <li className="nav-item">
            <ScrollLink to="contact" smooth={true} duration={500}>
            Contact Us
          </ScrollLink>
        </li>
        <li className="nav-item">
            <ScrollLink to="developer" smooth={true} duration={500}>
            Meet the Team
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
