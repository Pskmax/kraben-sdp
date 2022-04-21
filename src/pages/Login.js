import React from 'react'
import '../styles/Login.css'
import bg from '../images/BG.jpg'
import LoginBootstrap from '../styles/LoginBootstrap'

function Login() {

    return (
        <div className='loginBg' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='header'>
                <br/>
                Login
                <br/>
            </h1>
            <LoginBootstrap />
        </div>
    );
}

export default Login