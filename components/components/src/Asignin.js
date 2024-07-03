import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const AsignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <div className="registration-bar">
          <Link to="/" className="back-button">&#8592; Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default AsignIn;
