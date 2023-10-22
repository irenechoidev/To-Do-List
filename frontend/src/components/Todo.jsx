import React from 'react';
import './css/todo.css';

const Todo = ({ title, description, isDetails }) => {
    let containerClassName = 'default-todo';
    if (isDetails) {
        containerClassName = 'default-todo details-todo';
    }

    return (
        <div className = {containerClassName}>
            <div className = 'todo-header'>
                <h3>{title}</h3>

                {isDetails && (
                    <div className='buttons-container'>
                        <i className ='fas fa-trash-alt'/>
                        <i className ='fas fa-edit' />
                    </div>
                )}
            </div>

            <p>{description}</p>
        </div>
    );
}
 
export default Todo;

