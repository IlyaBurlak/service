import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const userInfo = localStorage.getItem('userInfo');
                if (userInfo) {
                    setUser(JSON.parse(userInfo));
                }
            } catch (error) {
                console.error('Failed to load user', error);
            }
        };

        loadUser();
    }, []);

    return { user };
};