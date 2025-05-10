import '../Auth.css';
import { Link } from 'react-router-dom';
import { useRegister } from "../../../hooks/useRegister.tsx";

const RegisterPage = () => {
    const {
        formData,
        errors,
        touched,
        isFormValid,
        submitError,
        handleChange,
        handleBlur,
        handleSubmit,
        handleGuestRegistration
    } = useRegister();

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
                            value={formData.firstName}
                            onChange={handleChange}
                            onBlur={() => handleBlur('firstName')}
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
                            onBlur={() => handleBlur('lastName')}
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
                            onBlur={() => handleBlur('email')}
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
                            onBlur={() => handleBlur('password')}
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
                            onBlur={() => handleBlur('confirmPassword')}
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