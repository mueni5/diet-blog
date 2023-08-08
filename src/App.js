import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./Components/auth/Signup.js"
import Login from "./Components/auth/Login.js"
import Profile from "./Components/auth/Profile.js"
import LandingPage from './Components/LandingPage.js'
import NavBar from "./Components/NavBar.js";
import DoctorDashboard from "./Components/doctor/DoctorDashboard.js";
import PatientDashboard from "./Components/patient/PatientDashboard.js";



import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { fetchAppointments } from './Features/appointmentsSlice.js'
import { fetchPatients } from './Features/patientsSlice.js'
import { fetchResults } from './Features/resultsSlice.js'


import PortalUser from './Components/PortalUser/PortalUser.js';
import PortalPatients from './Components/PortalPatients/PortalPatients.js'
import PortalAppts from './Components/PortalAppts/PortalAppts.js';
import PortalLabResultsPage from './Components/PortalLabResultsPage/PortalLabResultsPage.js';
import PortalCalendar from './Components/PortalCalendar/PortalCalendar.js'


function App() {

  const [user, setUser] = useState({})
  function handleSetUser (data){
    setUser(data)
  }

  const [search, setSearch] = useState('')



  const [patientAppts, setPatientAppts] = useState([])
  const [patientNames, setPatientNames] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppointments())

    .then(dispatch(fetchPatients()))

    .then(dispatch(fetchResults()))
  }, [dispatch]);


  const patients = useSelector(state => state.patients.entities)

  const results = useSelector(state => state.results.entities)
  const docAppointments = useSelector(state => state.appointments.entities)

  useEffect(() => {
    if(user && !user.doc){
      setPatientAppts(docAppointments.filter(appt => appt.patient_id === user.id))
    }
    if(user && user.doc){
      setPatientNames(patients.map(p => ({id: p.id, text: p.name})))
    }
  }, [user])

  const filterPatients = () => {
    if(search === '' ){
      return patients
    } else {
      return patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }
  }


  return (
    <div className="App">

      <Routes>


        <Route path = '/portal' element={<PortalUser user={user} />}/>
        <Route path = '/portal/patients' element={<PortalPatients patients={filterPatients()} docAppointments={docAppointments} search={search} setSearch={setSearch} user={user} />}/>
        <Route path = '/portal/calendar' element={<PortalCalendar docAppointments={docAppointments} user={user} patientAppts={patientAppts} patients={patients} patientNames={patientNames} />}/>
        <Route path='/portal/appointments' element={<PortalAppts patientAppts={patientAppts} user={user} /> } />
        <Route path='/portal/labresults' element={<PortalLabResultsPage user={user} results={results} /> } />
      </Routes>

      <>
    <Router>
      <NavBar user={user} />
      <Routes>
      <Route path="/signup" element={<Signup handleSetUser={handleSetUser}/>}/>
      <Route path="/login" element={<Login  handleSetUser={handleSetUser}/>}/>
      <Route path="/profile" element={<Profile user={user} />}/>
      <Route path="/doctor/dashboard" element={<DoctorDashboard user={user} />}/>
      <Route path="/patient/dashboard" element={<PatientDashboard user={user} />}/>


      <Route path="/" element={<LandingPage />} />
      </Routes>

    </Router>
    </>




    </div>
  );
}

export default App;
