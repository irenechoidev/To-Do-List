import React from 'react';
import Todo from '../components/Todo';
import './home.css';

const Home = () => {
    return (
        <div className='home-container'>
            {/* todo list */}
            <div>
                <Todo 
                    title = 'Bake Madeline' 
                    description = 'Bake for 60 seconds'
                    isDetails = {false}
                />
                <Todo 
                    title = 'Make Madeline' 
                    description = 'Make for 60 seconds'
                    isDetails = {false}
                />
            </div>
        </div>
    );
}
 
export default Home;
