import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { login } from './operations/login-operations';

import './css/login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = { username, password };

        const isSuccessful = await login(requestBody);
        
        if (isSuccessful) {
            window.location.reload();
        } else {
            alert("Something went wrong");
        }
    }

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/register');
    }

    

    return ( 
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                
                <label>Username:</label>
                <input 
                    type="text" 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder = 'Username'
                    value={username}
                    required 
                />
                
                <label>Password:</label>
                <input
                    type="password"
                    placeholder = 'Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />

                <div className='button-container'>
                    <button>Submit</button>
                </div>
                <h4>Dont't have an account?</h4>
                <div className='button-container'>
                    <button onClick={handleRedirect} >Sign Up</button>
                </div>

            </form>
        </div>   
       
     );
}

export default Login;