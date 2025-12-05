// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>👋 Hello! I'm a Novice Web Developer</h2>
            <p style={{ maxWidth: '600px', margin: '15px auto 30px' }}>
                Welcome to my realtime-data transmission demo site. I focus on building modern, responsive user interfaces and integrating them with powerful cloud services.
            </p>

            <Link to="/demo" style={linkButtonStyle}>
                🚀 See the Real-Time Demo Now!
            </Link>
            
            <h3 style={{ marginTop: '40px' }}>Key Skills Demonstrated Here:</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '40px' }}>
                <li>**React Hooks** (State and Lifecycle)</li>
                <li>**Firebase Firestore** (Real-Time Database)</li>
                <li>**Single Page Applications** (React Router)</li>
            </ul>
        </div>
    );
}

// Simple inline styling for the button link
const linkButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#61dafb',
    color: 'black',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
};

export default Home;