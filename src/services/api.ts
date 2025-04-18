import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    timeout: 5000,
});

export const fetchData = async () => {
    try {
        const response = await api.get('/api/test')
        return response.data;
    }catch (error) {
        console.error(error);
    }
}