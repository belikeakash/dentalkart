import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
import googleImg from '../assests/googleimg.png'


export default function Login() {
    //EMAIL - test@email.com
    //PASSWORD - testpassword

    const salt = 'x1y2z3';
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email -> ', email);
        console.log('Password -> ', password);
        if (email === 'test@email.com' && password === 'testpassword') {
            const jwtToken = email + password + salt + password;
            localStorage.setItem('authToken', jwtToken);
            sessionStorage.setItem('authToken', jwtToken)
            navigate('/');
        }
        else {
            setPassword('')
            setEmail('');
            alert('Enter right email and password');
        }


    }
    return (
        <div>
            <div className="main">
                <form className='form'>
                    <div className="form-container">
                        <input className='input' type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className='input' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="form-text">Don't have an account ? Signup instead</div>
                        <button className='button-submit' type='submit' onClick={handleSubmit}>Submit</button>
                        <div className="text-or">OR</div>
                        <button className='button-google'>
                            <img src={googleImg} alt="" />
                            <span>Login with Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
