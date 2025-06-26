import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ABC School. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
