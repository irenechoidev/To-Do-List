import axios from 'axios';
import { API_ENDPOINT } from '../../constants';

export const createTodo = async (formData) => {
    await axios.post(`${API_ENDPOINT}/todo`, formData);
}