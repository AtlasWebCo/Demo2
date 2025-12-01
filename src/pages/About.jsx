// src/pages/About.jsx
import React from 'react';

function About() {
    return (
        <div style={containerStyle}>
            <h2>About the Developer and This Project</h2>

            <section style={sectionStyle}>
                <h3>My Goal</h3>
                <p>
                    I am a novice web developer focused on building modern, **responsive user interfaces** and integrating them with powerful **cloud services**. This portfolio site serves as a live demonstration of my core capabilities, specifically showcasing the handling of **real-time data synchronization**.
                </p>
            </section>
            
            <section style={sectionStyle}>
                <h3>Core Technical Achievement: Real-Time Sync</h3>
                <p>
                    The **Live Demo** page is the centerpiece of this portfolio. It proves my understanding of the modern **React and Firebase ecosystem** by performing instant data updates without page reloads.
                </p>
                <ul style={listStyle}>
                    <li>
                        **Front-End Integration (React):** Data is managed using **React Hooks** (`useState` and `useEffect`) to dynamically update the UI as soon as new data arrives from the server.
                    </li>
                    <li>
                        **Back-End Real-Time Listener (Firestore):** The application uses the **Firestore `onSnapshot`** method. This establishes a continuous, low-latency connection to the database, ensuring any change made by any user is immediately reflected across all connected screens. 
                    </li>
                    <li>
                        **Database (Firestore):** The data is stored in a flexible NoSQL structure, optimized for fast querying and real-time updates.
                    </li>
                </ul>
            </section>

            <section style={sectionStyle}>
                <h3>My Full Tech Stack</h3>
                <ul style={stackListStyle}>
                    <li>**Frontend:** React, JavaScript (ES6+), HTML5, CSS3</li>
                    <li>**Database:** Firebase Cloud Firestore</li>
                    <li>**Routing:** React Router DOM</li>
                    <li>**Environment:** GitHub Codespaces, Vite</li>
                </ul>
            </section>
        </div>
    );
}

// Basic inline styles
const containerStyle = { padding: '20px', maxWidth: '800px', margin: '0 auto' };
const sectionStyle = { marginBottom: '30px', padding: '15px', borderLeft: '3px solid #61dafb' };
const listStyle = { listStyleType: 'disc', paddingLeft: '20px' };
const stackListStyle = { listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '20px', fontWeight: 'bold' };

export default About;