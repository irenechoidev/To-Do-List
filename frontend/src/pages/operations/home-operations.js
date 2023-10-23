import axios from 'axios';
import { getUsername } from '../../utils/getUsername';
import { API_ENDPOINT } from '../../constants';

export const getTodos = async (prefix) => {
    const username = getUsername() || '';

    const response = await axios.get(`${API_ENDPOINT}/todo/list/${username}/${prefix}`);
    const todos = response.data;

    return todos;
}
