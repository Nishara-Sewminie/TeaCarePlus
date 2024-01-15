import React from 'react';
import './developer.css';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import nishara from './images/nishara.jpg';
import isuranga from './images/isuranga.jpg';
import kanchana from './images/kanchana.jpg';
import sewwandi from './images/sewwandi.jpg';
import janith from './images/janith.jpg';

const Developer = () => {
  return (
    <div>
      <h2 className='heading'>Meet Our Team</h2>
      <div className="card-container">
        <div className="card">
          <img src={nishara} className="card-img-top" alt="Nishara" />
          <div className="card-body">
            <h4 className="card-title">Nishara</h4>
            <p className="card-text">Full Stack Developer</p>
            <a href="https://github.com/Nishara-Sewminie" className="btn btn-primary" target='_blank'>
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/nishara-sewminie-281624197/" className="btn btn-primary" target='_blank'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="card">
          <img src={kanchana} className="card-img-top" alt="Kanchana" />
          <div className="card-body">
            <h4 className="card-title">Kanchana</h4>
            <p className="card-text">Full Stack Developer</p>
            <a href="https://github.com/Kchathu99" className="btn btn-primary" target='_blank'>
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/kanchana-chathurangani-66270026b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn btn-primary" target='_blank'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="card">
          <img src={isuranga} className="card-img-top" alt="Isuranga" />
          <div className="card-body">
            <h4 className="card-title">Isuranga</h4>
            <p className="card-text">Full Stack Developer</p>
            <a href="https://github.com/ICJayasinghe" className="btn btn-primary" target='_blank'>
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/izu99/" className="btn btn-primary" target='_blank'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="card">
          <img src={sewwandi} className="card-img-top" alt="Sewwandi" />
          <div className="card-body">
            <h4 className="card-title">Sewwandi</h4>
            <p className="card-text">Full Stack Developer</p>
            <a href="https://github.com/sew-perera" className="btn btn-primary" target='_blank'>
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/sew-perera" className="btn btn-primary" target='_blank'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="card">
          <img src={janith} className="card-img-top" alt="Janith" />
          <div className="card-body">
            <h4 className="card-title">Janith</h4>
            <p className="card-text">Full Stack Developer</p>
            <a href="https://github.com/Janith-Premasiri" className="btn btn-primary" target='_blank'>
              <AiFillGithub />
            </a>
            <a href="http://www.linkedin.com/in/janith-premasiri-984a9126b" className="btn btn-primary" target='_blank'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
