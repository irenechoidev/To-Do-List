import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/isAuthenticated';
import { logout } from '../utils/logout';
import './css/navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (  
        <div className='navbar'>
            <h3 className='navbar-title' onClick={() => navigate('/')}>
                Todo List
            </h3>

            {isAuthenticated() && (
                <div className='logout'>
                    <button onClick={logout}>Logout</button>
                </div>
            )}

            <div className='add-todo'>
                <button onClick={() => navigate('/create')}>
                    +
                </button>
            </div>
        </div>
    );
}
 
export default Navbar;