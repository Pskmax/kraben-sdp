import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <h1 className='webName'>Kraben Website</h1>    
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/register"> Sign Up </Link>
            <Link to="/login"> Login </Link>
            <Link to="/profile"> Profile </Link>
        </div>
    </div>
  )
}

export default Navbar