// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <Link to="/" style={linkStyle}>My Portfolio 💻</Link>
      </div>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/demo" style={linkStyle}>Live Demo</Link> 
        <Link to="/about" style={linkStyle}>About Me</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </header>
  );
};

// Basic inline styles (You can move these to a CSS file later)
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
    borderBottom: '3px solid #61dafb',
};

const logoStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
};

const navStyle = {
    display: 'flex',
    gap: '20px',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
};

export default Header;