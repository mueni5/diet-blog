import React from 'react'
import PortalNavigation from '../PortalNavigation/PortalNavigation.js'
import ApptCollapsible from '../ApptCollapsible/ApptCollapsible.js'

const PortalAppts = ({ patientAppts, user }) => {
  console.log('patientAppts: ', patientAppts);
  return (
    <div className='portal-appts'>
      <PortalNavigation user={user} />
      <div className='appt-list'>
      { patientAppts.map(appt => {
        return (
          <ApptCollapsible key={appt.id} appt={appt} />
        )
      }) }
      </div>
    </div>
  )
}

export default PortalAppts