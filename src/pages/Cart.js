import React from 'react'
import '../styles/Cart.css'
import bg from '../images/BG.jpg'
import StringrayInfo from '../components/StringrayInfo';

function Cart() {
    return (
        <div className='cartBg' style={{ backgroundImage: `url(${bg})` }}>
            <StringrayInfo/>
        </div>
    );
}

export default Cart