import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import App from './App';

// import store from "./store";

ReactDOM.render(
  <Router>
    
    <App />
    
  </Router>,
  document.getElementById('root')
);

