import '../Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [submitError, setSubmitError] = useState('');

    useEffect(() => {
        validateForm();
    }, [formData]);

    const validateForm = () => {
        const newErrors = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        // Валидация имени
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'Имя обязательно для заполнения';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Фамилия обязательна для заполнения';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email обязателен';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Некорректный формат email';
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!formData.password) {
            newErrors.password = 'Пароль обязателен';
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Минимум 8 символов, 1 заглавная и 1 цифра';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }

        setErrors(newErrors);
        const isValid = Object.values(newErrors).every(error => error === '');
        setIsFormValid(isValid);
        return isValid;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitError('');

        if (!validateForm()) return;

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    name: formData.firstName,
                    surname: formData.lastName
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ошибка регистрации');
            }

            alert('Регистрация успешна!');
            navigate('/');
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Неизвестная ошибка');
            setSubmitError(error.message);
        }
    };

    const handleGuestRegistration = () => {
        localStorage.setItem('guestUser', 'true');
        navigate('/');
        alert('Добро пожаловать как гость! Ваши данные будут временными.');
    };

    return (
        <div className="auth-container dark-theme">
            <div className="auth-card">
                <h1>Регистрация</h1>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">Имя</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className={`auth-input ${errors.firstName && touched.firstName ? 'error' : ''}`}
                            placeholder="Иван"
                            onChange={handleChange}
                            onBlur={() => setTouched(prev => ({ ...prev, firstName: true }))}
                        />
                        {errors.firstName && touched.firstName && (
                            <span className="error-message">{errors.firstName}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Фамилия</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className={`auth-input ${errors.lastName && touched.lastName ? 'error' : ''}`}
                            placeholder="Иванов"
                            onChange={handleChange}
                            onBlur={() => setTouched(prev => ({ ...prev, lastName: true }))}
                        />
                        {errors.lastName && touched.lastName && (
                            <span className="error-message">{errors.lastName}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`auth-input ${errors.email && touched.email ? 'error' : ''}`}
                            placeholder="example@mail.com"
                            onChange={handleChange}
                            onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                        />
                        {errors.email && touched.email && (
                            <span className="error-message">{errors.email}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`auth-input ${errors.password && touched.password ? 'error' : ''}`}
                            placeholder="••••••••"
                            onChange={handleChange}
                            onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
                        />
                        {errors.password && touched.password && (
                            <span className="error-message">{errors.password}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Подтвердите пароль</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className={`auth-input ${errors.confirmPassword && touched.confirmPassword ? 'error' : ''}`}
                            placeholder="••••••••"
                            onChange={handleChange}
                            onBlur={() => setTouched(prev => ({ ...prev, confirmPassword: true }))}
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <span className="error-message">{errors.confirmPassword}</span>
                        )}
                    </div>

                    {submitError && <div className="error-message mb-2">{submitError}</div>}

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={!isFormValid}
                    >
                        Зарегистрироваться
                    </button>
                </form>

                <div className="auth-divider">или</div>

                <button
                    onClick={handleGuestRegistration}
                    className="auth-button guest-button"
                >
                    Продолжить как гость
                </button>

                <p className="auth-warning">
                    Гостевой доступ предоставляется на 24 часа. Для сохранения данных
                    пройдите полную регистрацию.
                </p>

                <p className="auth-text">
                    Уже есть аккаунт? <Link to="/login" className="auth-link">Войти</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;