import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo } from './operations/details-operations';
import { updateTodo } from "./operations/update-operations";
import { getFileFromUrl } from "../utils/getFileFromUrl";
import { API_ENDPOINT, IMAGE_KEY } from "../constants";
import './css/update.css';

const Update = () => {
    const LOADING_TEXT = 'Loading...';

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [file, setFile] = useState(null);
    const [todo, setTodo] = useState(null);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const dbTodo = await getTodo(params.id);

            setTodo(dbTodo);
            setDescription(dbTodo.description);
            setImgURL(dbTodo.imgURL);
            setTitle(dbTodo.title);
        };

        fetchData();
    }, [params.id]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);

        if (imgURL && !file) formData.append(IMAGE_KEY, await getFileFromUrl(imgURL));
        if (file) formData.append(IMAGE_KEY, file);
        
        await updateTodo(params.id , formData);
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

                <label>Image</label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    accept="image/*"
                />

               {imgURL && (
                    <img 
                        src={file? URL.createObjectURL(file) : `${API_ENDPOINT}/${imgURL}`} 
                        alt="Failed to Load" 
                    />
               )}

                <div className='button-container'>
                    <button>Update</button>
                </div>
            </form>
        </div>
     );
}

export default Update;