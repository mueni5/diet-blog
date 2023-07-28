import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./Components/auth/Signup.js"
import Login from "./Components/auth/Login.js"
import Profile from "./Components/auth/Profile.js"
import LandingPage from './Components/LandingPage.js'
import NavBar from "./Components/NavBar.js";

function App() {

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/profile" element={<Profile />}/>

      <Route path="/" element={<LandingPage />} />
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
