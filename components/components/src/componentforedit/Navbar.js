import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar">Home</Link>
      <Link to="/portfolios" className="navbar">Portfolios</Link>
      <Link to="/community" className="navbar">Community</Link>
      <Link to="/about" className="navbar">About Us</Link>
      <div className="right-container">
        <Link to="/signin">
          <button className="firstbtn">SIGN IN</button>
        </Link>
        <Link to="/signup">
          <button className="secondbtn">SIGN UP</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
