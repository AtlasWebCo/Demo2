// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// We will create these Page components next
const Home = () => (
  <>
    <h1>Welcome to My Real-Time Portfolio!</h1>
    <p>To view the real-time update demo, click "Live Demo" at the top of the screen.</p>
  </>
);
import Demo from './pages/Demo';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Header /> 
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* Footer component would go here */}
    </Router>
  );
}

export default App;