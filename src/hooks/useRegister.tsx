import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {api} from "../services/api.ts";

export const useRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        const newErrors = { ...errors };
        let isValid = true;

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'Имя обязательно';
            isValid = false;
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Фамилия обязательна';
            isValid = false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Некорректный email';
            isValid = false;
        }
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(formData.password)) {
            newErrors.password = 'Недостаточно сложный пароль';
            isValid = false;
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
            isValid = false;
        }

        setErrors(newErrors);
        setIsFormValid(isValid);
        return isValid;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const handleBlur = (fieldName: keyof typeof touched) => {
        setTouched(prev => ({
            ...prev,
            [fieldName]: true
        }));
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitError('');

        if (!validateForm()) return;

        try {
            const response = await api.post('/auth/register', {
                email: formData.email,
                password: formData.password,
                name: formData.firstName,
                surname: formData.lastName,
            });

            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('userInfo', JSON.stringify({
                name: formData.firstName,
                surname: formData.lastName
            }));

            navigate('/home');
        } catch (err) {
            setSubmitError(err instanceof Error ? err.message : 'Ошибка регистрации');
        }
    };

    const handleGuestRegistration = () => {
        localStorage.setItem('guestUser', 'true');
        navigate('/home');
    };

    return {
        formData,
        errors,
        touched,
        isFormValid,
        submitError,
        handleBlur,
        handleChange,
        handleSubmit,
        handleGuestRegistration
    };
};