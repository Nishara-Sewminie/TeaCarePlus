import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import yourImage from './Images/UI_start_green.png';

function Home() {
  return (
    <div className='home'>
      <div className='image-container'>
        <img src={yourImage} alt='Your Image' className='background-image' />
        <ul><div className='button-container'>
          <li><Link to='/upload'><button className='but1'>Start Now</button>
          </Link></li>
          <li><Link to='/help'><button className='but2'>Help</button>
          </Link></li>
        </div>
        </ul>
      </div>
    </div>
  );
}

export default Home;
