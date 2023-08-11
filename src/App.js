import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatForum from './components/ChatForum/ChatForum';
import DietBlog from './components/ChatForum/DietBlog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Chat-forum" element={<ChatForum />} />
        <Route path="/Diet-blog" element={<DietBlog />} />
        <Route path="/Diet-blog/:id" element={<DietBlog />} />
      </Routes>
    </div>
  );
}

export default App;
