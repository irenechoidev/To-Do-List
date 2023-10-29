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
                TODO
            </h3>


            {isAuthenticated() && (
                <div className='button-container'>
                    <button className='add-todo-button' onClick={() => navigate('/create')}>
                        +
                    </button>

                    <i className ='fas fa-sign-out-alt' onClick={logout} />
                </div>
            )}
        </div>
    );
}
 
export default Navbar;