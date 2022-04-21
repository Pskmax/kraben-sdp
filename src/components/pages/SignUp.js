import React, { useState } from 'react'
import '../../styles/SignUp.css'
import bg from '../../images/BG.jpg'
import {UserAuth} from '../AuthContext'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password)
            navigate('/login')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
        <div className='signUpBg' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='header'>
                <br />
                Sign Up
                <br />
            </h1>
                <div className="mt-5 mx-auto p-3" style={{ background: "#cee", width: 700 }}>
                    <form class="row g-3" onSubmit={handleSubmit}>
                        <div class="col-12">
                            <label for="inputUsername" class="form-label">Username</label>
                            <input type="text" class="form-control" id="inputUsername" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="inputEmail4" placeholder="xxx@yyy.zzz" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">District</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Province</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>กรุงเทพมหานครฯ</option>
                                <option>จังหวัด ก</option>
                                <option>จังหวัด ข</option>
                                <option>จังหวัด ค</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Postal Code</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                        <fieldset class="row mb-3">
                            <legend class="col-form-label col-sm-3 pt-3">Account Type</legend>
                            <div class="col-auto">
                                <br />
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                    <label class="form-check-label" for="gridRadios1">
                                        Buyer
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                    <label class="form-check-label" for="gridRadios2">
                                        Seller
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
        </div>
    );
}

export default SignUp