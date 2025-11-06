import { createContext, useState, useEffect } from 'react';

// 1. Create the context
export const ThemeContext = createContext();

// 2. Create the provider component
export function ThemeContextProvider({ children }) {
  // 3. Manage theme state, check localStorage for a saved theme
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  // 4. Create a function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Save preference
      return newTheme;
    });
  };

  // 5. Apply the theme class to the <html> element for CSS to use
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // 6. Provide the theme and toggle function to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}