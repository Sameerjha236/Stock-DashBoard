import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ThemeContext);
};
export { ThemeContext, ThemeProvider };
