import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTodo } from './operations/details-operations';
import Todo from '../components/Todo';
import './css/details.css';

const Details = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const [todo, setTodo] = useState(null);
 
    useEffect(() => {
        const fetchData = async () => {
            const dbTodo = await getTodo(params.id);
            setTodo(dbTodo);
        };

        fetchData();
    }, [params.id]);

    if (todo && todo.message) {
        navigate('/');
    }

    return (
        <div className = 'todo-details'>
           {todo && (
                <Todo 
                    id = {todo._id}
                    title = {todo.title}
                    description = {todo.description}
                    imgURL = {todo.imgURL}
                    isDetails = {true}
                />
           )}
        </div>
    );
}
 
export default Details;