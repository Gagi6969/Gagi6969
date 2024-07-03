// RecentUsers.jsx
import React from 'react';
import Logos from './User.svg';

const RecentUsers = () => {
  return (
    <div>
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
    </div>
  );
};

export default RecentUsers;
