import React from 'react'
import '../styles/Profile.css'
import bg from '../images/BG.jpg'
import defaultProfile from '../images/defaultProfile.jpg'

function Profile() {
    return (
        <div className='profileBg' style={{ backgroundImage: `url(${bg})` }}>
            <div>
                <div>
                    <div className='profileImg'>
                        <img style={{backgroundImage: `url(${defaultProfile})` }}/>
                    </div>
                    <div>
                        <h4>

                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile