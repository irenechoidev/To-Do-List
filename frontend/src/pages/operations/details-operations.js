import axios from 'axios';
import { API_ENDPOINT } from '../../constants';

export const getTodo = async (id) => {
    const response = await axios.get(`${API_ENDPOINT}/todo/${id}`);
    const todo = response.data;

    return todo;
}

export const deleteTodo = async (id) => {
    const response = await axios.delete(`${API_ENDPOINT}/todo/${id}`);
    const object = response.data;

    return object;
}
