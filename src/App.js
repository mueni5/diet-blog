import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar.js';
import Home from './Components/Home/Home.js';
import Login from './Components/Login/Login.js';
import DoctorProfile from './Components/DoctorProfile/DoctorProfile';
import Portal from './Components/Portal/Portal.js';
import PortalPatients from './Components/PortalPatients/PortalPatients.js'
import PortalAppts from './Components/PortalAppts/PortalAppts.js';
import PortalLabResults from './Components/PortalLabResults/PortalLabResults.js';
import PortalCalendar from './Components/PortalCalendar/PortalCalendar.js'


function App() {

}

return (
  <div className="App">
    <NavBar user={user} setUser={setUser} />
    <Routes>
      <Route exact path = '/' element={<Home/>}/>
      <Route path = '/login' element={<Login setUser={setUser} />}/>
      <Route path = '/doctors/:id' element={<DoctorProfile doc={doc} />}/>
      <Route path = '/portal' element={<Portal user={user} />}/>
      <Route path = '/portal/patients' />
      <Route path = '/portal/calendar' element={<PortalCalendar docAppointments={docAppointments} user={user} patientAppts={patientAppts} patients={patients} patientNames={patientNames} />}/>
      <Route path='/portal/appointments' element={<PortalAppts patientAppts={patientAppts} user={user} /> } />
      <Route path='/portal/labresults' element={<PortalLabResults user={user} results={results} /> } />
    </Routes>
    <Footer />
  </div>
);


export default App;
