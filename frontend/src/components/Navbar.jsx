import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (  
        <div className='navbar'>
            <h3 className = 'navbar-title'>
                Todo List
            </h3>

            <div className = 'add-todo'>
                <button href='./create'>+</button>
            </div>
        </div>
    );
}
 
export default Navbar;