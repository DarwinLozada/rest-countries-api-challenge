import React, { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return [
    useContext(ThemeContext).darkTheme,
    useContext(ThemeContext).toggleTheme,
  ];
};

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        toggleTheme: () => setTheme((prevTheme) => !prevTheme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
