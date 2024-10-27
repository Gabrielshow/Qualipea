import React, {useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const updateFavicon = (theme) => {
        const faviconPath = theme === 'light' ? '../assets/favicon/white-bg/favicon.ico' : '../assets/favicon/blue-bg/favicon.ico';
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = faviconPath;

        const existingFavicon = document.querySelector("link[rel='icon']");
        if (existingFavicon) {
            existingFavicon.remove();
        }

        document.head.appendChild(link);
    };

    const handleToggle = () => {
        toggleTheme();
        updateFavicon(theme === 'light' ? 'dark' : 'light');
    };

    console.log('Current Theme:', theme);


  return (
    <button onClick={handleToggle} className="theme-icon">
    {theme === 'light' ? (
        <FaMoon size={24} title="Switch to Dark mode"/>
        ) : (
            <FaSun size={24} title="Switch to Light mode"/>)}
    </button>
  );
};

export default ThemeToggle