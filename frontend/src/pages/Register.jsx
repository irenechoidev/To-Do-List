import React, { useState }from 'react';
import { register } from './operations/register-operations'
import './css/register.css';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const registerBody = {username, password};
        const isSuccessful = await register(registerBody);

        if (isSuccessful) {
            window.location.reload();
        } else {
            alert("Something went wrong");
        }
    }
    
    return (
        <div className='register-container'>
            <form onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>Username:</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder = 'Username'
                value = {username}
                required
            />

            <label>Password:</label>
            <input
                type="password"
                placeholder = 'Passoword'
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
                required
            />

            <div className='button-container'>
                <button>Submit</button>
            </div>
        </form>
    </div>
    );
}

export default Register;