import React, { useState } from 'react'
import '../styles/Register.css'
import bg from '../images/BG.jpg'
import SignUpBootstrap from '../styles/SignUpBootstrap';

function SignUp() {
    return (
        <div className='registerBg' style={{backgroundImage: `url(${bg})`}}>
            <SignUpBootstrap/>
        </div>
    );
}

export default SignUp