import React from 'react';
import './Services.css';
import capture from './images/photo.jpg';

const Services = () => {
  return (
    <div className="services-container">
      <div className="text-container">
        <h3>HOW IT WORK</h3>
        <h1>EASY AND FAST</h1>
        <p>
          To identify a plant, you simply need to snap a photo of the plant, and the app will tell you what it is in a matter of seconds! LeafSnap can currently recognize 90% of all known species of plants and trees, which covers most of the species you will encounter in every country on Earth.
        </p>
      </div>
      <div className="image-container">
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><div className="box"> 
          <li></li><h3>USING YOUR CAMERA</h3>
          <p>Take a photo of the plant you want to identify.</p>
        </div></li>
        <li><div className="box">
          <h3>BROWSE FROM YOUR GALLERY</h3>
          <p>Browse in your gallery.</p>
        </div></li>
        </ul>
        
        <div class="image">
        <img src={capture} alt="Visual representation" style={{ borderRadius: '15px' }} />
        </div>
      </div>
    </div>
  );
};

export default Services;
