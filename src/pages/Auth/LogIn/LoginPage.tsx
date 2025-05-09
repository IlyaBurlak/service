import '../Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ошибка авторизации');
            }

            const { access_token } = await response.json();
            localStorage.setItem('access_token', access_token);
            navigate('/');
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Неверный email или пароль';
            setError(errorMessage);
        }
    };

    return (
        <div className="auth-container dark-theme">
            <div className="auth-card">
                <h1>Вход</h1>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="auth-input"
                            placeholder="example@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            className="auth-input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit" className="auth-button">
                        Войти
                    </button>
                </form>
                <p className="auth-text">
                    Нет аккаунта? <Link to="/register" className="auth-link">Зарегистрироваться</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;