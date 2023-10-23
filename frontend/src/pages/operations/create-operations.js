import axios from 'axios';
import { API_ENDPOINT } from '../../constants';

export const createTodo = async (body) => {
    await axios.post(`${API_ENDPOINT}/todo`, body);
}