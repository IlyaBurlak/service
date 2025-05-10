import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api.ts';

export const useLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const loginResponse = await api.post('/auth/login', { email, password });

            const accessToken = loginResponse.data.access_token;
            localStorage.setItem('access_token', accessToken);

            const userResponse = await api.get('/auth/me', {
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            localStorage.setItem('userInfo', JSON.stringify({
                name: userResponse.data.name,
                surname: userResponse.data.surname
            }));

            navigate('/home');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка входа');
        }
    };

    return {
        email,
        password,
        error,
        setEmail,
        setPassword,
        handleSubmit
    };
};