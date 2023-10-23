import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTodo } from '../pages/operations/details-operations';
import './css/todo.css';

const Todo = ({ id, title, description, isDetails }) => {
    const navigate = useNavigate();

    let containerClassName = 'default-todo';
    if (isDetails) {
        containerClassName = 'default-todo details-todo';
    }

    const toDetails = () => {
        if (!isDetails) {
            navigate(`/todo/${id}`);
        }
    };

    const handleDelete = async () => {
        await deleteTodo(id)
        navigate('/');
    }

    const toUpdate = () => {
        navigate(`/update/${id}`);
    };

    return (
        <div className = {containerClassName} onClick={toDetails}>
            <div className = 'todo-header'>
                <h3>{title}</h3>

                {isDetails && (
                    <div className='buttons-container'>
                        <i className ='fas fa-trash-alt' onClick={handleDelete}/>
                        <i className ='fas fa-edit' onClickCapture={toUpdate} />
                    </div>
                )}
            </div>

            <p>{description}</p>
        </div>
    );
}
 
export default Todo;

