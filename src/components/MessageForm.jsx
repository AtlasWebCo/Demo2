// src/components/MessageForm.jsx
import React, { useState } from 'react';
import { db } from '../firebase-config'; // Import the initialized Firestore database
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const MessageForm = () => {
  const [text, setText] = useState('');
  const [username, setUsername] = useState('NoviceDev');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent empty messages

    try {
      // Use the addDoc function to create a new document in the 'messages' collection
      await addDoc(collection(db, 'messages'), {
        text: text,
        username: username,
        timestamp: serverTimestamp(), // Ensures all users use the same server time
      });
      setText(''); // Clear input after submission
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
          placeholder="Your Name (Optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
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

// Basic inline styles
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