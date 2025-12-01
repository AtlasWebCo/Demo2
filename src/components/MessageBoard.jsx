// src/components/MessageBoard.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config'; // Import the initialized Firestore database
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Create a query: target the 'messages' collection, ordered by timestamp
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));

    // 2. onSnapshot creates the real-time listener (This is the core feature!)
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(liveMessages);
      setLoading(false);
    }, (error) => {
      console.error("Error listening to database:", error);
      setLoading(false);
    });

    // 3. Cleanup: Stop listening when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array ensures it runs only once on mount

  if (loading) {
    return <p>Loading live messages...</p>;
  }

  return (
    <div style={boardContainerStyle}>
      <h2>Live Message Feed 💬 (Real-Time Updates)</h2>
      {messages.length === 0 && <p>No messages yet. Post the first one above!</p>}
      <div style={messagesListStyle}>
        {messages.map((message) => (
          <div key={message.id} style={messageCardStyle}>
            <p style={messageTextStyle}>{message.text}</p>
            <small style={messageFooterStyle}>
              — **{message.username || 'Anonymous'}** {/* Optional: Convert Firebase timestamp to readable format if needed */}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

// Basic inline styles
const boardContainerStyle = {
  marginTop: '30px',
  border: '1px solid #61dafb',
  padding: '15px',
  borderRadius: '8px',
  maxHeight: '400px',
  overflowY: 'scroll',
};
const messagesListStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const messageCardStyle = {
  padding: '10px',
  borderLeft: '4px solid #61dafb',
  backgroundColor: '#f4f4f4',
  borderRadius: '4px',
};
const messageTextStyle = { margin: '0 0 5px 0', fontWeight: '500' };
const messageFooterStyle = { fontSize: '0.8em', color: '#555' };

export default MessageBoard;