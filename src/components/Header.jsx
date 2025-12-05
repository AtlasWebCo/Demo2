// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // Replaced style={headerStyle} with className="main-header"
    <header className="main-header">
      {/* Replaced style={logoStyle} with className="logo" */}
      <div className="logo">
        {/* Removed style={linkStyle} */}
        <Link to="/">My Portfolio 💻</Link>
      </div>
      {/* Replaced style={navStyle} with className="nav-links" */}
      <nav className="nav-links">
        {/* Removed style={linkStyle} from all Link components */}
        <Link to="/">Home</Link>
        <Link to="/demo">Live Demo</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

// **NOTE: All previous style objects (headerStyle, logoStyle, etc.) are removed from this file.**

export default Header;