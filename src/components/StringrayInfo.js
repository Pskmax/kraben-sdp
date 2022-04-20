import React from 'react'
import { Link } from 'react-router-dom'

function StringrayInfo({image, name, price}) {
  return (
    <div className='krabenInfo'>
        <div style={{backgroundImage: `url(${image})`}}> </div>
        <h1> {name} </h1>
        <p> {price} </p>
        <Link to="/shop" className='button'>Select</Link>
    </div>
  )
}

export default StringrayInfo