// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Atlas Web Co. | Built with React and Firebase | <a href="https://github.com/yourusername/my-realtime-portfolio" style={{ color: '#61dafb' }}>View Source Code</a></p>
    </footer>
  );
};

export default Footer;