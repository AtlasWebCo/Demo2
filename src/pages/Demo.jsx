// src/pages/Demo.jsx
import React from 'react';
import MessageForm from '../components/MessageForm';
import MessageBoard from '../components/MessageBoard';

const Demo = () => {
  return (
    <section>
      <h2>⭐ Live Demo: React + Firebase Real-Time Synchronization</h2>
      <p style={{marginBottom: '20px'}}>
        **Test the Real-Time Feature!** Open this page on your phone or in a second browser window. Post a message, and watch it appear **instantly** on both screens without a refresh. This showcases the power of the Firestore **`onSnapshot`** listener.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
        <MessageForm />
        <MessageBoard />
      </div>
    </section>
  );
};

export default Demo;