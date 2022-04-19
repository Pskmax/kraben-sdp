import React from 'react'

function StringrayInfo({image, name, price}) {
  return (
    <div className='stringrayInfo'>
        <div style={{backgroundImage: `url(${image})`}}> </div>
        <h1> {name} </h1>
        <p> {price} </p>
    </div>
  )
}

export default StringrayInfo