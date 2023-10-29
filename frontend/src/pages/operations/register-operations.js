import axios from 'axios';
import { API_ENDPOINT } from '../../constants';

export const register = async (body) => {
    const response = await axios.post(`${API_ENDPOINT}/user`, body);

    const {data} =  response;

    if (data.token !== '') {
        window.localStorage.setItem("token", data.token)
    }

    return data.successful;
}