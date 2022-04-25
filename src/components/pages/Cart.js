import React, { useState } from 'react'
import '../styles/Cart.css'
import bg from '../../images/BG.jpg'

function Cart() {
    const [cartItems, setCartItems] = useState([])
    const onAdd = (kraben) => {
        const exist = cartItems.find(x => x.id === kraben.id)
        if (exist) {
            setCartItems(cartItems.map(x => x.id === kraben.id ? { ...exist, qty: exist.qty + 1 } : x))
        }
        else {
            setCartItems([...cartItems, { ...kraben, qty: 1 }])
        }
    }

    return (
        <div className='cartBg' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='header'>
                <br />
                YOUR BAG
                <br />
            </h1>
            <div className='shopping'>
                <div className='shoppingInfo'>
                    INFO
                </div>
                <div className='shoppingSummary'>
                    SUMMARY
                </div>
            </div>
        </div>
    );
}

export default Cart