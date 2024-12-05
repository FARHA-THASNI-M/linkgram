import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-200 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-20" />
      </div>
      <div className="flex gap-5">
        <Link to="/privacy" className="text-black text-lg hover:text-yellow-500">
          Privacy
        </Link>
        <Link to="/terms" className="text-black text-lg hover:text-yellow-500">
          Terms of Use
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
