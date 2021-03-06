import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import { UserAuth } from './AuthContext'

const Navbar = () => {
  const { user } = UserAuth()
  //const  count = [1,2,3,4,5]

  if (user) {
    return (
      <div className='navbar'>
        <h1 className='webName'>Kraben Website</h1>
        <div className='rightSide'>
          <Link to="/"> Home </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/cart">
            <div className='cart'>
              <span>
                <i className="bi bi-cart3" />
              </span>
              {/*<span>{count.length}</span>*/}
            </div>
          </Link>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='navbar'>
        <h1 className='webName'>Kraben Website</h1>
        <div className='rightSide'>
          <Link to="/"> Home </Link>
          <Link to="/register"> Sign Up </Link>
          <Link to="/login"> Login </Link>
          <Link to="/cart">
            <div className='cart'>
              <span>
                <i className="bi bi-cart3" />
              </span>
              <span>0</span>
            </div>
          </Link>
        </div>
      </div>
    )
  }

}

export default Navbar