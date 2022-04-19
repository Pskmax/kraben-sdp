import React from 'react'
import '../styles/Register.css'
import bg from '../images/BG.jpg'
import FormBootstrap from '../helpers/FormBootstrap';

function SignUp() {
    return (
        <div className='registerBg' style={{backgroundImage: `url(${bg})`}}>
            <FormBootstrap/>
        </div>
    );
}

export default SignUp