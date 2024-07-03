// TopRatedPortfolios.jsx
import React from 'react';
import cardImg from './Template card.svg';

const TopRatedPortfolios = () => {
  return (
    <div>
      <h1 className='profileh1'>Top Rated Portfolios</h1>
      <div className='templatecards'>
        <img className='TemplateCard' src={cardImg} alt="img"/>
        <img className='TemplateCard' src={cardImg} alt="img"/>
      </div>
      <div className='templatecards2'>
        <img className='TemplateCard' src={cardImg} alt="img"/>
        <img className='TemplateCard' src={cardImg} alt="img"/>
      </div>
    </div>
  );
};

export default TopRatedPortfolios;
