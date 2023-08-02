import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsFilePerson, BsCalendarPlus } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import './PortalNavigation.css'

const PortalNavigation = ({ user }) => {
  return (
    <div className='portal-nav'>
      {user.doc ?
        <div className='nav-links'>
          <NavLink to='/portal/mothers'><BsFilePerson /> Mothers</NavLink>
          <NavLink to='/portal/calendar'><BsCalendarPlus /> Calendar</NavLink>
        </div>
      :
      <div className='nav-links'>
        <NavLink to='/portal/labresults'><BiTestTube /> Lab Results</NavLink>
        <NavLink to='/portal/appointments'><AiOutlineSchedule /> Appointments</NavLink>
        <NavLink to='/portal/calendar'><BsCalendarPlus /> Calendar</NavLink>
      </div>
      }
    </div>
  )
}

export default PortalNavigation