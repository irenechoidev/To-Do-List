import axios from 'axios';
import { API_ENDPOINT } from '../../constants';

export const createTodo = async (body) => {
    const response = await axios.post(`${API_ENDPOINT}/todo/create`, body);
    const object = response.data;

    return object;
}


export const updateTodo = async (id, body) => {
    const response = await axios.put(`${API_ENDPOINT}/todo/${id}`, body);
    const object = response.data;

    return object;
}