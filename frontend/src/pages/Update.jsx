import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo } from './operations/details-operations';
import { updateTodo } from "./operations/update-operations";
import './css/update.css';

const Update = () => {
    const LOADING_TEXT = 'Loading...';

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todo, setTodo] = useState(null);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const dbTodo = await getTodo(params.id);

            setTodo(dbTodo);
            setDescription(dbTodo.description);
            setTitle(dbTodo.title);
        };

        fetchData();
    }, [params.id]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = { title, description };
        
        await updateTodo(params.id , requestBody);
        
        navigate('/');
    }

    if (todo && todo.message) {
        navigate('/');
    }

    return ( 
        <div className = 'update-todo'>
            <form onSubmit={handleSubmit}>
                <h3>Update Todo</h3>
                
                <label>Title:</label>
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder = 'Title'
                    value={title || LOADING_TEXT}
                    required 
                />
                
                <label>Description:</label>
                <textarea
                    placeholder = 'Description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description || LOADING_TEXT}
                />

                <div className='button-container'>
                    <button>Update</button>
                </div>
            </form>
        </div>
     );
}

export default Update;