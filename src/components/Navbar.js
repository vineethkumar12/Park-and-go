import React from 'react'
import { NavLink } from 'react-router-dom'
import  './nav.css'

export const Navbar = () => {
  return (
    <div className='navbar' >
       <div className='logo'> 
       </div>
      <nav>
         <NavLink to="/"> Home </NavLink> 
          <NavLink  to="/signin"> Sign in </NavLink>
          <NavLink to="/register"> Register </NavLink>
         
        </nav>    
        
    </div>
  )
}
