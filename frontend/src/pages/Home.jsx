import React, { useState, useEffect } from 'react';
import { getTodos } from './operations/home-operations';
import Todo from '../components/Todo';
import './css/home.css';

const Home = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const dbTodos = await getTodos();
            setTodos(dbTodos);
        };

        fetchData();
    }, [])


    return (
        <div className='home-container'>
            {/* todo list */}
            <div>
                {todos.map(t => (
                    <Todo 
                        key = {t._id}
                        id = {t._id}
                        title = {t.title}
                        description = {t.description}
                        isDetails = {false}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default Home;
