import React from 'react'
import '../../styles/Profile.css'
import bg from '../../images/BG.jpg'
import { UserAuth } from '../AuthContext'
import { useNavigate } from 'react-router-dom'

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
                <br/><br/>
            </h1>
            <div className='profile'>
                <br/>
                <p>Username : </p>
                <p>Email : {user && user.email}</p> 
                <p>Address : </p>
                <p>Accout Type : </p>
                <button onClick={handleLogout} className='boarder px-6 py-2 my-4'>Log Out</button>
            </div>
        </div>
    );
}

export default Profile