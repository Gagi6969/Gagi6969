import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import logo from './logoaboutus.svg';
import iconab from './componentforaboutus.svg';
import iconabb from './secondlogoforaboutus.svg';
import iconabbb from './thirdlogoforab.svg';
import frameab from './frameab.svg';
import cardforab from './carfforab.svg';
import lastbarab from './lastbarab.svg';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';

const About = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/portfolios', label: 'Portfolios' },
    { to: '/community', label: 'Community' },
    { to: '/about', label: 'About Us' },
    { to: '/signin', label: 'Sign In' },
    { to: '/signup', label: 'Sign Up' },
  ];

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className="about-container">
      <header className="header">
        {isMobile ? (
          <div className="menu-icon">
            <IconButton
              aria-label="more"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
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

      <div className="contentaboutus">
        <div className="rectangle">
          <button className='editprofile'>Edit Profile</button>
          <p className='rectangletitle'>Yagna Kusumanchi</p>
          <div className='threephotos'>
          <img className='iconab' src={iconab} alt='img' />
          <img className='iconabb' src={iconabb} alt='img' />
          <img className='iconabbb' src={iconabbb} alt='img' />
          </div>
          <img className='frameab' src={frameab} alt='img' />
          <p className='MyPortfolios'>My Portfolios</p>
          <img className='cardforab' src={cardforab} alt='img' />
          <img className='cardaforab' src={cardforab} alt='img' />
          <img className='lastbarab' src={lastbarab} alt='img' />
        </div>
        <img className='logoabout' src={logo} alt='Click Craft Logo' />
      </div>
    </div>
  );
};

export default About;
