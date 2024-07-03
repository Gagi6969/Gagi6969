import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Community.css';
import thirdslideundercomm from './thirdslideundercomm.svg';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';

const Community = () => {
  const [isActive, setIsActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setIsActive(true); // Устанавливаем класс активным после загрузки страницы
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/portfolios', label: 'Portfolios' },
    { to: '/community', label: 'Community' },
    { to: '/about', label: 'About Us' },
    { to: '/signin', label: 'Sign In' },
    { to: '/signup', label: 'Sign Up' },
  ];

  const ITEM_HEIGHT = 48;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className={`about-container ${isActive ? 'fade-in' : ''}`}>
      <header className="header">
        {isMobile ? (
          <div className="menu-icon">
            <IconButton
              aria-label="more"
              aria-controls={anchorEl ? 'long-menu' : undefined}
              aria-expanded={anchorEl ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >            <MoreVertIcon className="custom-menu-icon" />

              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {links.map((link) => (
                <MenuItem key={link.to} onClick={handleClose}>
                  <Link to={link.to}>{link.label}</Link>
                </MenuItem>
              ))}
            </Menu>
          </div>
        ) : (
          <>
            <div className="left-container">
              <Link to="/" className="firstp">CLICK <span style={{ color: 'blue' }}>CRAFT</span></Link>
            </div>
            <div className="navbar-container">
              {links.slice(0, 4).map((link) => (
                <Link key={link.to} to={link.to} className="navbar">{link.label}</Link>
              ))}
            </div>
            <div className="right-container">
              <Link to="/signin">
                <button className="firstbtn">SIGN IN</button>
              </Link>
              <Link to="/signup">
                <button className="secondbtn">SIGN UP</button>
              </Link>
            </div>
          </>
        )}
      </header>

      
      <div className='picforslide'>
      <p className='communitytitle' >Community</p>
        <div className='slide-group'>
          <img src={thirdslideundercomm} alt='img' />
          <img src={thirdslideundercomm} alt='img' />
        </div>
        <div className='slide-group'>
          <img src={thirdslideundercomm} alt='img' />
          <img src={thirdslideundercomm} alt='img' />
        </div>
        <div className='slide-group'>
          <img src={thirdslideundercomm} alt='img' />
          <img src={thirdslideundercomm} alt='img' />
        </div>
      </div>
    </div>
  );
};

export default Community;
