import '../Auth.css';
import { Link } from 'react-router-dom';
import {useLogin} from "../../../hooks/useLogin.tsx";


const LoginPage = () => {
    const {
        email,
        password,
        error,
        setEmail,
        setPassword,
        handleSubmit
    } = useLogin();


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