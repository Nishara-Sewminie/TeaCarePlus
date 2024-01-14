import React, { useRef } from 'react';
import './Home.css';
import teaImage from './images/Asset 1.png';

const Home = ({ aboutRef }) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
      <div className='button-container'>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button className='but1' onClick={handleFileUpload}>
        <i class="fa fa-upload icon" aria-hidden="true"></i>Image Upload
        </button>
      </div>
    </div>
  );
};

export default Home;
