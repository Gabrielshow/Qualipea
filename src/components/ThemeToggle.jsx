import React, {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

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
        updateFavicon(theme);
    }

  return (
    <button onClick={handleToggle} style={{background: 'none', border: 'none', cursor: 'pointer' }}>
    {theme === 'light' ? (
        <FaMoon size={24} title="Switch to Dark mode"/>
        ) : (
            <FaSun size={24} title="Switch to Light mode"/>)}
    </button>
  );
};

export default ThemeToggle