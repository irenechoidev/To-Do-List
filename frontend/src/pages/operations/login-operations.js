import axios from 'axios';
import { API_ENDPOINT } from '../../constants';

export const login = async (body) => {
    const response = await axios.post(`${API_ENDPOINT}/user/login`, body);
    const { token, successful } = response.data;
    
    if (successful) {
        window.localStorage.setItem("token", token);
    }

    return successful;
}
