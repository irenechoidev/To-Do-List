import axios from 'axios';
import { API_ENDPOINT } from '../../constants';

export const updateTodo = async (id, formData) => {
    await axios.put(`${API_ENDPOINT}/todo/${id}`, formData);
}