import React from 'react';
import Todo from '../components/Todo';
import './details.css';

const Details = () => {
    return (
        <div className = 'todo-details'>
            <Todo 
                title = "Make madeline"
                description = "Tomorrow"
                isDetails = {true}
            />
        </div>
    );
}
 
export default Details;