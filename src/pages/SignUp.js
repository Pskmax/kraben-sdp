import React from 'react'
import '../styles/SignUp.css'
import bg from '../images/BG.jpg'
import SignUpBootstrap from '../styles/SignUpBootstrap';

function SignUp() {
    return (
        <div className='signUpBg' style={{backgroundImage: `url(${bg})`}}>
            <h1 className='header'>
                <br/>
                Sign Up
                <br/>
            </h1>
            <SignUpBootstrap/>
        </div>
    );
}

export default SignUp