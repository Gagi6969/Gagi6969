
import React from 'react';
import Icon from './for1slide.svg';

const SecondSlide = () => {
  return (
    <div className='secondslide'>
      <p className='textfirstslide'>Welcome to Click craft</p>
      <p className="firstslidepr">Your Story, Your Way<br />Build Your Personal Portfolio</p>
      <p className='textshowcase'>Showcase your journey by crafting a personal portfolio in
        minutes</p>

      <div className='buttonsonimgi'>
        <button className='buttonsonimg'>Get started for free</button>
        <button className='buttonsonimg'>Watch Video</button>
      </div>
      <img className='firstimg' src={Icon} alt="Slide" />
      <p className='underimg'>5 minute set-up process</p>
      <p className='underunimg'>Just take 5 minutes to fill in some info, choose a killer template, and bam! Your personalized portfolio website is ready.</p>
    </div>
  );
};

export default SecondSlide;
