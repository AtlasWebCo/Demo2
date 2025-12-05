// src/components/MessageForm.jsx
import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const MessageForm = () => {
  // 🚨 CHANGE: Default username is now an empty string
  const [text, setText] = useState('');
  const [username, setUsername] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🚨 CHANGE: Check if BOTH text and username are provided
    if (!text.trim() || !username.trim()) {
        // If either is missing, the HTML 'required' attribute should stop it,
        // but this provides a JavaScript safety net.
        return; 
    }

    try {
      await addDoc(collection(db, 'messages'), {
        text: text.trim(),
        username: username.trim(),
        timestamp: serverTimestamp(), 
      });
      setText(''); // Clear text input after submission
      // Note: We leave the username so the user doesn't have to retype it
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div style={formContainerStyle}>
      <h3>Post a Live Update</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Your Name (Required)" // 🚨 CHANGE: Updated placeholder
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
          required // 🚨 CHANGE: Made input required
        />
        <textarea
          placeholder="Type your live update message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={textareaStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Send Live Message
        </button>
      </form>
    </div>
  );
};

// ... (Styles remain the same)
const formContainerStyle = {
  marginBottom: '20px',
  padding: '15px',
  border: '1px solid #ccc',
  borderRadius: '8px',
};
const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };
const inputStyle = { padding: '8px', border: '1px solid #ddd', borderRadius: '4px' };
const textareaStyle = { padding: '8px', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' };
const buttonStyle = { padding: '10px', backgroundColor: '#61dafb', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer' };


export default MessageForm;