import React, { useState, useEffect } from 'react';
import { getTodos } from './operations/home-operations';
import Todo from '../components/Todo';
import './css/home.css';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [prefix, setPrefix] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const dbTodos = await getTodos(prefix);
            setTodos(dbTodos);
        };

        fetchData();
    }, [prefix]);

    return (
        <div className='home-container'>
            <input
                type = 'text'
                placeholder = 'Search'
                onChange = {(e) => setPrefix(e.target.value)}
                value = {prefix}
            />

            {/* todo list */}
            <div className='todo-list'>
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
