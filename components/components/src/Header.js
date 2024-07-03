import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolios', label: 'Portfolios' },
  { to: '/community', label: 'Community' },
  { to: '/about', label: 'About Us' },
  { to: '/signin', label: 'Sign In' },
  { to: '/signup', label: 'Sign Up' },
];

const ITEM_HEIGHT = 48;

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <header className="header">
      {isMobile ? (
        <div className="menu-icon">
          <IconButton
            className="custom-menu-button"
            aria-label="more"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon className="custom-menu-icon" />
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
            <Link to="/" className="navbar">Home</Link>
            <Link to="/portfolios" className="navbar">Portfolios</Link>
            <Link to="/community" className="navbar">Community</Link>
            <Link to="/about" className="navbar">About Us</Link>
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
  );
};

export default Header;
