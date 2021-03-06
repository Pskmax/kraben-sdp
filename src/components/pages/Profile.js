import React from 'react'
import '../styles/Profile.css'
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
                <p className='mt-4'>Firstname : Ann</p>
                <p className='mt-4'>Lastname : Takamaki</p>
                <p className='mt-4'> Email : {user && user.email}</p> 
                <p className='mt-4'>Address : Cecilia Chapman 711-2880 Nulla St.Mankato Mississippi 96522</p>
                <p className='mt-4'>Accout Type : Buyer</p>
                <button onClick={handleLogout} className='btn btn-danger boarder py-2 my-4'>Log Out</button>
            </div>
        </div>
    );
}

export default Profile