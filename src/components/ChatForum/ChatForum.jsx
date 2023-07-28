import React, { useState } from 'react';
import './ChatForum.css';

const ChatForum = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: 'Hello everyone! How are you all doing?',
      sender: 'Christine',
      timestamp: '2023-07-26 10:30 AM',
    },
    
    {
        id: 2,
        content: 'I am doing great so far',
        sender: 'Bree',
        timestamp: '2023-07-26 10:34 AM',
    },

    {
        id: 3,
        content: 'experiecing terrible nausea',
        sender: 'Taffie',
        timestamp: '2023-07-26 10:40 AM',
    },
    
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        id: messages.length + 1,
        content: newMessage,
        sender: 'User', 
        timestamp: new Date().toLocaleString(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">Chat Forum</h2>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="chat-message">
            <p className="message-sender">{message.sender}</p>
            <p className="message-content">{message.content}</p>
            <p className="message-timestamp">{message.timestamp}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <textarea
          rows="3"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatForum;
