import axios from 'axios';
import { API_ENDPOINT } from '../../constants';

export const getTodos = async () => {
    const response = await axios.get(`${API_ENDPOINT}/todo`);
    const todos = response.data;

    return todos;
}
