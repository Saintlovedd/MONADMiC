import React, { useEffect, useState, createContext, useContext } from 'react';
type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  // Check if user previously set a preference or use system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  // Update the HTML class when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return <ThemeContext.Provider value={{
    isDarkMode,
    toggleDarkMode
  }}>
      {children}
    </ThemeContext.Provider>;
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};