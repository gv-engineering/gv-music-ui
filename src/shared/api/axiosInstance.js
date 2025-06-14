import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const jsonInstance = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
    headers: {
        'accept': 'application/json'
    }
})

export default jsonInstance;