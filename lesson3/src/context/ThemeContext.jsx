import { createContext, useState } from "react";
import { useEffect } from "react";
export const GlobalTheme = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("DarkMode"))
  );

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('DarkMode', JSON.stringify(darkMode))
  }, [darkMode]);

  return (
    <GlobalTheme.Provider value={{ darkMode, setDarkMode, toggleMode }}>
      {children}
    </GlobalTheme.Provider>
  );
};
