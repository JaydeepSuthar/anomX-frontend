import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const HttpClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const setAuthToken = (token) => {
    if (token) {
        HttpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete HttpClient.defaults.headers.common['Authorization'];
    }
};

export default HttpClient;
