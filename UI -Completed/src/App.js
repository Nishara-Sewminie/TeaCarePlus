import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Developer from './Developer';
import Footer from './Footer';
import Nav from './Nav';
import { ImageUpload } from './ImageUpload';
import Remedies from './Remedies';
import './App.css';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const developerRef = useRef(null);
  const footerRef = useRef(null);
  const ImageUploadRef = useRef(null);
  const RemediesRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <Nav scrollToHome={() => scrollToRef(homeRef)} />
        <hr />

        <Routes>
          <Route
            path="/"
            element={<Home scrollPosition={scrollPosition} scrollToTop={() => scrollToRef(homeRef)} />}
          />
          <Route path="./ImageUpload"  element={<ImageUpload/>}/>
          <Route path="./remedies"  element={<Remedies/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/footer" element={<Footer />} />
          
        </Routes>

        
        <Element name="ImageUpload" ref={ImageUploadRef}>
        <ImageUpload />
        </Element>

        <Element name="remedies" ref={RemediesRef}>
        <Remedies/>
        </Element>
        
        <Element name="about" ref={aboutRef}>
          <About />
        </Element>
        <Element name="services" ref={servicesRef}>
          <Services />
        </Element>
        <Element name="contact" ref={contactRef}>
          <Contact />
        </Element>
        <Element name="developer" ref={developerRef}>
          <Developer />
        </Element>
        <Element name="footer" ref={footerRef}>
          <Footer />
        </Element>

       
      </div>
    </Router>
  );
};

export default App;
