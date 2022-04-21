import React from 'react'
import '../../styles/Profile.css'
import bg from '../../images/BG.jpg'
import defaultProfile from '../../images/defaultProfile.jpg'
import { UserAuth } from '../AuthContext'
import { LogoutTwoTone } from '@mui/icons-material'
import { Navigate, useNavigate } from 'react-router-dom'

const Profile = () => {
    const {user, logout} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async() =>{
        try {
            await logout();
            navigate('/')
            console.log('You are logged out')
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className='profileBg' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='header'>
                <br/>
                Profile
            </h1>
            <div className='profile'>
                <img src={defaultProfile} alt='' />
                <p>Email : {user && user.email}</p> 

                <button onClick={handleLogout} className='boarder px-6 py-2 my-4'>Log Out</button>
            </div>
            
        </div>
    );
}

export default Profile