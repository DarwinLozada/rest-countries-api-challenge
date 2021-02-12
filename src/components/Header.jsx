import React, { useEffect } from "react";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const [isDarkTheme, toggleTheme] = useTheme();

  const styles = {
    fontColor: `${isDarkTheme ? "white" : "black"}`,
    bgColor: `${isDarkTheme ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"}`,
  };

  return (
    <div bgColor={styles.bgColor}>
      <h1 color={styles.fontColor}>Where in the world?</h1>
      <button
        onClick={toggleTheme}
        bgColor={`${isDarkTheme ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"}`}
        color={styles.fontColor}
      >
        {/* {isDarkTheme ? <MoonIcon /> : <SunIcon />} */}
        <p>Dark Mode</p>
      </button>
    </div>
  );
};

export default Header;
