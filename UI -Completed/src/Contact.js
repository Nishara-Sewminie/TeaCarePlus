import React from 'react';
import imghead from './images/contact.jpg';
import github from './images/github.png';
import email from './images/email.png';
import call from './images/call.png';
import './Contact.css'

function Contact() {
  return (
    <div className="App">
      <div className="Heading">
        <p className="main-heading">CONTACT US</p>
        <div className="hr">
        </div>
        <p className="content">We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.</p>
      </div>
      <div className="container">
        <div id="left">
            <img src={imghead} alt="office lady" className='lady'/>
        </div>
        <div id="right">
            <div className="box">
              <p className='box1-heading'>CONTACT US</p>
              <p className='box1-paragraph'>Contact us for more information & get to know the Team.</p>
              <a href='https://github.com/Nishara-Sewminie/TeaCarePlus' target='_blank'>
              <img className='github' src={github} alt='github logo'/>
              </a>
            </div>
            <div className="box">
            <p className='box1-heading'>DESCRIPTION</p>
            <p className='box1-paragraph'>The project is done as the final year group project.
            </p>
            </div>
            <div className="box">
            <p className='box1-heading'>EMAIL</p>
            <p className='box1-paragraph'>Click Below to email us :</p>
            <p className='box3-paragraph'><a href='mailto:teacareplus@gmail.com'><img className='github' src={email} alt='email'/></a>

            </p>
            
            </div>
            <div className="box">
            <p className='box1-heading'>CALL US</p>
            <img className='github' src={call} alt='phone'/>
            <p className='box1-paragraph'>+94760033237</p>
            <p className='box1-paragraph'>+94761951906</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Contact