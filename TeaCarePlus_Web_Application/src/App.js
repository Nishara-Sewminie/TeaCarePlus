// App.js
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import Home from './Home';
import About from './About';
import Services from './Services';
import Nav from './Nav';
import './App.css';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Router>
      <div>
        <Nav />
        <hr />

        <Routes>
          <Route
            path="/"
            element={<Home scrollPosition={scrollPosition} aboutRef={aboutRef} servicesRef={servicesRef} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        <Element name="about" ref={aboutRef}>
          <About />
        </Element>
        <Element name="services" ref={servicesRef}>
          <Services />
        </Element>
      </div>
    </Router>
  );
};

export default App;
