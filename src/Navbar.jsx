import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/student">Student</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}

export default Navbar