import React, { useEffect, useState } from 'react';
import '../Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from "../../../hooks/useRegister.tsx";
import confetti, {Options} from 'canvas-confetti';

const RegisterPage = () => {
    const {
        formData,
        errors,
        touched,
        isFormValid,
        submitError,
        isSuccess,
        handleChange,
        handleSubmit,
        handleGuestRegistration
    } = useRegister();

    const [triggered, setTriggered] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess && !triggered) {
            setTriggered(true);

            const count = 200;
            const defaults = {
                origin: { y: 0.8 }
            };

            const fire = (particleRatio: number, opts: Options) => {
                confetti({
                    ...defaults,
                    ...opts,
                    particleCount: Math.floor(count * particleRatio)
                });
            };


            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.7 }
            });

            fire(0.25, { spread: 26, startVelocity: 55 });
            fire(0.2, { spread: 60 });
            fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
            fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
            fire(0.1, { spread: 120, startVelocity: 45 });

            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
    }, [isSuccess, triggered, navigate]);

    const handleSuccess = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit(e);
    };

    return (
        <div className="auth-container dark-theme">
            <div className="auth-card">
                <h1>Регистрация</h1>
                <form className="auth-form" onSubmit={handleSuccess}>
                    <div className="form-group">
                        <label htmlFor="firstName">Имя</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className={`auth-input ${errors.firstName && touched.firstName ? 'error' : ''}`}
                            placeholder="Иван"
                            value={formData.firstName}
                            onChange={handleChange}
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
                            value={formData.lastName}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.password}
                            onChange={handleChange}
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
                            value={formData.confirmPassword}
                            onChange={handleChange}
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
