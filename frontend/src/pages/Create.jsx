import React, { useState } from "react";
import './create.css';

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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

                <div className='button-container'>
                    <button>Add</button>
                </div>
            </form>
        </div>
     );
}

export default Create;