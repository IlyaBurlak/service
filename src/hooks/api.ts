export const api = {
    async get(url: string) {
        return fetch(`${import.meta.env.VITE_API_URL}${url}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        });
    },

    async post(url: string, body: never) {
        return fetch(`${import.meta.env.VITE_API_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            body: JSON.stringify(body),
        });
    },

    handleResponse: async (response: Response) => {
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return response.json();
    },
};