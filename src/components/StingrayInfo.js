import React from 'react'
import { useCart } from 'react-use-cart';

function StingrayInfo({ image, name, price }, props) {
  const { addItem } = useCart();

  return (
    <div className='krabenInfo'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price} </p>
      <div>
        <button className='button' onClick={() => addItem(props.item)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default StingrayInfo;
