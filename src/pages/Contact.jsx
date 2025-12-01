// src/pages/Contact.jsx
import React from 'react';

// Your professional business email address
const BUSINESS_EMAIL = "contact.atlaswebco@gmail.com";

function Contact() {
    return (
        <div style={containerStyle}>
            <h2>Get In Touch</h2>
            <p style={descriptionStyle}>
                I'm currently accepting new projects and always interested in connecting with potential employers or clients.
                Please reach out to discuss how my skills in **React** and **Real-Time Data** can help your next project succeed.
            </p>

            {/* Mailto link to open the user's default email client */}
            <a 
                href={`mailto:${BUSINESS_EMAIL}?subject=Portfolio Inquiry`} 
                style={buttonStyle}
            >
                Send Me an Email 📧
            </a>
            
            <p style={emailDisplay}>
                Or copy my email: <strong>{BUSINESS_EMAIL}</strong>
            </p>
            
            <section style={sectionStyle}>
                <h3>Other Links</h3>
                <ul style={listStyle}>
                    <li><a href="https://github.com/Atlaswebco" target="_blank" rel="noopener noreferrer">My GitHub Profile</a></li>
                    <li><a href="/about">View My Technical Skills</a></li>
                </ul>
            </section>
        </div>
    );
}

// Basic inline styles
const containerStyle = { padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' };
const descriptionStyle = { marginBottom: '30px', fontSize: '1.1em' };
const buttonStyle = {
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: '#61dafb',
    color: '#000',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.2em',
    transition: 'background-color 0.2s',
};
const emailDisplay = { marginTop: '20px', fontSize: '0.9em', color: '#555' };
const sectionStyle = { marginTop: '40px' };
const listStyle = { listStyle: 'none', padding: 0 };

export default Contact;