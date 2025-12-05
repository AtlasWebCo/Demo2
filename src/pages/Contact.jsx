// src/pages/Contact.jsx
import React from 'react';

// 🚨 PASTE YOUR UNIQUE FORMSPREE ENDPOINT HERE 🚨
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgdzbqr"; 

function Contact() {
    return (
        <div style={containerStyle}>
            <h2>Send Me a Message</h2>
            <p style={descriptionStyle}>
                I'm currently accepting new projects. Use the form below to quickly send me an email.
            </p>

            {/* The Form Element */}
            <form 
                action={FORMSPREE_ENDPOINT} // Action points to your unique Formspree URL
                method="POST" // Use the POST method to send data securely
                style={formStyle}
            >
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name (Required)" 
                    required 
                    style={inputStyle} 
                />
                <input 
                    type="email" 
                    name="_replyto" // Formspree uses this field to know where to reply
                    placeholder="Your Email (Required)" 
                    required 
                    style={inputStyle} 
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message..." 
                    rows="5" 
                    required 
                    style={textareaStyle} 
                />
                <button type="submit" style={buttonStyle}>
                    Send Message 🚀
                </button>
            </form>
            
            <p style={emailDisplay}>
                Or reach me directly at: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.atlaswebco@gmail.com">contact.atlaswebco@gmail.com</a>
            </p>
            
            <section style={sectionStyle}>
                <h3>Other Links</h3>
                <ul style={listStyle}>
                    <li><a href="https://github.com/atlaswebco" target="_blank" rel="noopener noreferrer">My GitHub Profile</a></li>
                    <li><a href="/about">View My Technical Skills</a></li>
                </ul>
            </section>
        </div>
    );
}

// Basic Styles
const containerStyle = { padding: '20px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' };
const descriptionStyle = { marginBottom: '30px', fontSize: '1.1em' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle = { padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1em' };
const textareaStyle = { padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1em', resize: 'vertical' };
const buttonStyle = {
    padding: '15px 30px',
    backgroundColor: '#61dafb',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.2em',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
};
const emailDisplay = { marginTop: '20px', fontSize: '0.9em', color: '#555' };
const sectionStyle = { marginTop: '40px' };
const listStyle = { listStyle: 'none', padding: 0 };

export default Contact;