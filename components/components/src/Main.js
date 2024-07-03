import React, { useState, useEffect } from 'react';
import './Main.css';
import Icon from './for1slide.svg';
import Img from './profileimg.svg';
import cardImg from './Template card.svg';
import Logos from './User.svg';
import SelfServeSection from './Self-Serve Section.svg';
import Container from './Container.svg';
import Header from './Header'; 

const Main = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true); // Устанавливаем класс активным после загрузки страницы
  }, []);

  return (
    <div className={`main-container about-container ${isActive ? 'fade-in' : ''}`}>
      <Header />
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
      <img className='profileimg' src={Img} alt='img'/>
      <h1 className='profileh1'>Top Rated Portfolios</h1>
      <div className='templatecards'>
        <img className='TemplateCard' src={cardImg} alt="img"/>
        <img className='TemplateCard' src={cardImg} alt="img"/>
      </div>
      <div className='templatecards2'>
        <img className='TemplateCard' src={cardImg} alt="img"/>
        <img className='TemplateCard' src={cardImg} alt="img"/>
      </div>
     
      <p className='RecentUsers'>Recent Users</p>
      <div className='logosmoment'>
        <img className='logos' src={Logos} alt='img '></img>
        <img className='logos' src={Logos} alt='img '></img>
        <img className='logos' src={Logos} alt='img '></img>
        <img className='logos' src={Logos} alt='img '></img>
        <img className='logos' src={Logos} alt='img '></img>
        <img className='logos' src={Logos} alt='img '></img>
        <img className='logos' src={Logos} alt='img '></img>
      </div>
      <img className='SelfServeSection' src={SelfServeSection} alt='img'></img>
      <img className='Container' src={Container} alt='img'></img>
    </div>
  );
};

export default Main;
