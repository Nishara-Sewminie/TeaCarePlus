import React from 'react';
import { Link } from 'react-router-dom';
import './Help.css';
import leafImage from './Images/blister-blight.jpg';

function Help() {
  return (
    <div className="help-container">
      <Link to="/"><button className='but4'>Back to Home</button></Link>
      <div className="help-box">
        <h3 className='guid' >Guidliness</h3>
        <ul className='help-list'>
          <li>The leaf must be captured in a white background.</li>
          <li>The image file format must be .jpeg.</li>
          <li>You should use a high-quality camera to capture the leaf.</li>
       </ul>
        <h3 className='example'>Example</h3>
      <img src={leafImage} alt='Leaf Image' className='leaf-image' />
      </div>
    </div>
  );
}

export default Help;
