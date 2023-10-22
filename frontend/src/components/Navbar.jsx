import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (  
        <div className='navbar'>
            <h3 className='navbar-title' onClick={() => navigate('/')}>
                Todo List
            </h3>

            <div className='add-todo'>
                <button onClick={() => navigate('/create')}>
                    +
                </button>
            </div>
        </div>
    );
}
 
export default Navbar;