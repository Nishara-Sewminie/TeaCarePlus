import React from 'react';
import './Services.css';
import capture from './images/photo.jpg';

const Services = () => {
  return (
    <div className="services-container">
      <div className="text-container">
        <h3 className="tag">HOW IT WORKS</h3>
        <h1>EASY AND FAST</h1>
        <p className="sent">
          To identify a plant, you simply need to snap a photo of the plant, and the app will tell you what it is in a matter of seconds! LeafSnap can currently recognize 90% of all known species of plants and trees, which covers most of the species you will encounter in every country on Earth.
        </p>
      </div>
      <div className="image-container">
        
            <div className="box1">
              <h3>USING YOUR CAMERA</h3>
              <p>Take a photo of the plant you want to identify.</p>
            </div>
          
          
            <div className="box2">
              <h3>BROWSE FROM YOUR GALLERY</h3>
              <p>Browse in your gallery.</p>
            </div>
          
        <div className="image">
          <img src={capture} alt="Visual representation" style={{ borderRadius: '15px' }} />
        </div>
      </div>
    </div>
  );
};

export default Services;
