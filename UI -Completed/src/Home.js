import React, { useRef } from 'react';
import './Home.css';
import teaImage from './images/Asset 1.png';

const Home = ({ aboutRef, scrollToTop }) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      scrollToTop();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className="containerhome" ref={aboutRef}>
      <img src={teaImage} alt="TeaCare+ Image" className="logo" />
      <h2 className="heading">Welcome to TeaCare+</h2>
      <p className="paragraph">
        Your Partner in Tea Health. Discover a new era of tea cultivation with our advanced disease identification system. We're here to ensure your tea leaves thrive. Let's safeguard your harvest together. Start exploring the future of healthy tea cultivation!
      </p>
      
    </div>
  );
};

export default Home;
