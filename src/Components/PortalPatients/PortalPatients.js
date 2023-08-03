import React from 'react'
import PortalNavigation from '../PortalNavigation/PortalNavigation'
import PatientCollapsible from '../PatientCollapsible/PatientCollapsible.js'
import './PortalPatients.css'

function PortalPatients({ search, setSearch, patients, docAppointments, user }) {

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <PortalNavigation user={user} />
      <div className='search'>
        <label>
          Search Mother:
          <input type='text' placeholder='Mother Name...' className='patientSearch' onChange={handleChange} value={search} />
        </label>
      </div>
      <br></br>
      <div className='appt-list' >
      { patients.map(p => {
        return (
          <PatientCollapsible key={p.id} patient={p} docAppointments={docAppointments} />
        )
      }) }
      </div>
    </div>
  )
}

export default PortalPatients