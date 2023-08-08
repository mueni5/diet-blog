import React from 'react'
import PortalNavigation from '../PortalNavigation/PortalNavigation.js'
import PortalLabResults from '../PortalLabResults/PortalLabResults.js'
import './PortalLabResultsPage.css'

const PortalLabResultsPage = ({ user, results }) => {

  const renderResults = results.filter(r => r.patient_id === user.id).map(r => {
    return <PortalLabResults key={r.id} result={r} />
  })

  return (
    <div>
      <div>
        <PortalNavigation user={user} />
      </div>
      <div className='result-list'>
        {renderResults}
      </div>
    </div>
  )
}

export default PortalLabResultsPage