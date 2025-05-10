import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
});

export const api = {
    async get(url: string, config = {}) {
        const response = await axiosInstance.get(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            ...config,
        });
        return response;
    },

    async post(url: string, body: unknown, config = {}) {
        const response = await axiosInstance.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            ...config,
        });
        return response;
    },
};