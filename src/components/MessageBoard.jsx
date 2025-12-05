// src/components/MessageBoard.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, onSnapshot, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore'; // 🚨 ADDED: getDocs, deleteDoc, doc

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🚨 NEW FUNCTION: Handles the deletion of all messages
  const handleClearBoard = async () => {
    if (!window.confirm("Are you sure you want to permanently delete ALL messages? This action cannot be undone.")) {
      return; // Stop if the user cancels
    }

    try {
      // 1. Get all documents in the 'messages' collection
      const q = collection(db, 'messages');
      const snapshot = await getDocs(q);

      // 2. Iterate through the documents and delete each one
      const deletePromises = snapshot.docs.map(document => 
        deleteDoc(doc(db, 'messages', document.id))
      );

      // 3. Wait for all deletions to complete
      await Promise.all(deletePromises);

      console.log("Message board cleared successfully!");
      // The onSnapshot listener will automatically update the UI after deletion.

    } catch (error) {
      console.error("Error clearing message board: ", error);
      alert("Failed to clear board. Check the console for details.");
    }
  };

  useEffect(() => {
    // onSnapshot listener setup (unchanged)
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));

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

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading live messages...</p>;
  }

  return (
    <div style={boardContainerStyle}>
      <div style={headerContainerStyle}> 
        <h2>Live Message Feed 💬</h2>
        <button 
          onClick={handleClearBoard} 
          style={clearButtonStyle}
          disabled={messages.length === 0} // Disable if no messages exist
        >
          Clear Board ({messages.length})
        </button>
      </div>

      {messages.length === 0 && <p>No messages yet. Post the first one above!</p>}
      <div style={messagesListStyle}>
        {messages.map((message) => (
          <div key={message.id} style={messageCardStyle}>
            <p style={messageTextStyle}>{message.text}</p>
            <small style={messageFooterStyle}>
              — **{message.username || 'User'}**
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🚨 NEW STYLES for the clear button and header layout
const headerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '15px',
};
const clearButtonStyle = {
  padding: '8px 12px',
  backgroundColor: '#dc3545', // Red color
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.9em',
};

// ... (Other styles remain the same)
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