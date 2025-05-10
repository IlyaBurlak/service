import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../services/api.ts";

interface RegisterResponse {
    access_token: string;
}

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
    const [isSuccess, setIsSuccess] = useState(false);

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
        let isValid = true;

        if (formData.firstName.trim().length < 2) {
            newErrors.firstName = 'Имя должно содержать минимум 2 символа';
            isValid = false;
        }

        if (formData.lastName.trim().length < 2) {
            newErrors.lastName = 'Фамилия должна содержать минимум 2 символа';
            isValid = false;
        }

        if (!formData.email.includes('@') || !formData.email.includes('.')) {
            newErrors.email = 'Введите корректный email';
            isValid = false;
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Пароль должен содержать минимум 6 символов';
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

            const data: RegisterResponse = response.data;
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('userInfo', JSON.stringify({
                name: formData.firstName,
                surname: formData.lastName
            }));

            setIsSuccess(true);
            setTimeout(() => navigate('/home'), 2000);
        } catch (err) {
            setSubmitError(err instanceof Error ? err.message : 'Ошибка регистрации');
        }
    };

    const handleGuestRegistration = async () => {
        try {
            setSubmitError('');

            const response = await api.post('/auth/register/guest', {});

            const data = response.data;

            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('userInfo', JSON.stringify({
                name: data.name,
                surname: data.surname
            }));

            setIsSuccess(true);
            setTimeout(() => navigate('/home'), 2000);
        } catch (err) {
            setSubmitError(err instanceof Error ? err.message : 'Ошибка гостевой регистрации');
        }
    };


    return {
        formData,
        errors,
        touched,
        isFormValid,
        submitError,
        isSuccess,
        handleBlur,
        handleChange,
        handleSubmit,
        handleGuestRegistration
    };
};