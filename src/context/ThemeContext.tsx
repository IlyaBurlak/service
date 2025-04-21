import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');

        if (savedMode) {
            setIsDark(savedMode === 'dark');
        } else {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDark(mediaQuery.matches);

            const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
            mediaQuery.addEventListener('change', handler);
            return () => mediaQuery.removeEventListener('change', handler);
        }
    }, []);

    useEffect(() => {
        if (isDark === undefined) return;

        if (isDark) {
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    if (isDark === undefined) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};