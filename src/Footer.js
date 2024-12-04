import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © 2024 LINKGRAM INFORMATION TECHNOLOGY L.L.C. All rights reserved.
      </div>
      <div className="footer-right">
        <a href="mailto:info.LinkGram@gmail.com" className="footer-link">
          info.LinkGram@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
