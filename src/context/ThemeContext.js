import React, {createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme ] = useState('dark');
    const toggleTheme = () => {
        setTheme((prevTheme) = (prevTheme === 'light' ? 'dark' : 'light'));
    };

    console.log('Current Theme:', theme);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};