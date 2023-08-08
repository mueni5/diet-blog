import React from 'react';

import PortalNavigation from '../PortalNavigation/PortalNavigation'

const PortalUser = ({ user }) => {


  return (
    <div>
      <PortalNavigation user={user} />
    </div>
  )
}

export default PortalUser