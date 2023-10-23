import axios from 'axios';
import { API_ENDPOINT } from '../../constants';

export const updateTodo = async (id, body) => {
    await axios.put(`${API_ENDPOINT}/todo/${id}`, body);
}