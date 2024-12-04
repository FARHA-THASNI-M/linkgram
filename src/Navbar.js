import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" /> 
      </div>
      <div className="navbar-links">
        <Link to="/privacy" className="navbar-link">Privacy</Link>
        <Link to="/terms" className="navbar-link">Terms of Use</Link>
      </div>
    </nav>
  );
};

export default Navbar;
