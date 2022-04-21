import React from 'react'
import '../styles/Profile.css'
import bg from '../images/BG.jpg'
import defaultProfile from '../images/defaultProfile.jpg'

function Profile() {
    return (
        <div className='profileBg' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='header'>
                <br/>
                Profile
            </h1>
            <div className='profile'>
                <img src={defaultProfile} alt='' />
                <p>Username :</p> 

            </div>
            
        </div>
    );
}

export default Profile