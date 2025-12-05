// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Now imported and used

// Page Imports (Ensure these are correctly imported from their files)
import Home from './pages/Home'; 
import Demo from './pages/Demo';
import About from './pages/About'; 
import Contact from './pages/Contact'; 


function App() {
  return (
    <Router>
      <Header />
      {/* Replaced <div style={{ padding: '20px' }}> with <main> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> {/* Added the Footer component */}
    </Router>
  );
}

export default App;