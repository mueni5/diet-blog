import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ChatForum from './components/ChatForum/ChatForum';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          
          <Route path="/Chat-forum" element={<ChatForum />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;