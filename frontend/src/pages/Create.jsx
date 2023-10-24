import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo } from "./operations/create-operations";
import { IMAGE_KEY } from "../constants";
import { getUsername } from "../utils/getUsername";
import './css/create.css';

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = getUsername() || '';
        
        const formData = new FormData();
        formData.append("username", username);
        formData.append("title", title);
        formData.append("description", description);

        if (file) {
            formData.append(IMAGE_KEY, file);
        }

        await createTodo(formData);
        navigate('/');
    }

    return ( 
        <div className = 'create-todo'>
            <form onSubmit={handleSubmit}>
                <h3>Add a New Todo</h3>
                
                <label>Title:</label>
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder = 'Title'
                    value={title}
                    required 
                />
                
                <label>Description:</label>
                <textarea
                    placeholder = 'Description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <label>Image</label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    accept="image/*"
                />

               {file && (
                    <img 
                        src={URL.createObjectURL(file)} 
                        alt="Failed to Load" 
                    />
               )}

                <div className='button-container'>
                    <button>Add</button>
                </div>
            </form>
        </div>
     );
}

export default Create;