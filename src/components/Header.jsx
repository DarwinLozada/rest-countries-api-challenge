import React, { useState } from "react";
import { MoonIcon, SunIcon } from "./iconsComponents/IconComponents";

const Header = () => {
  const [isDarkTheme, toggleTheme] = useState(false);

  const handleThemeChange = () => {
    toggleTheme(!isDarkTheme);
    const globalContainer = document.querySelector(".global-container");
    globalContainer.classList.contains("dark")
      ? globalContainer.classList.remove("dark")
      : globalContainer.classList.add("dark");
  };

  return (
    <div className="relative flex flex-row py-6 px-12 w-full justify-between shadow-md bg-white dark:bg-darkBlue dark:text-white items-center transition-colors duration-300 z-10">
      <h1 className="font-bold text-md mr-4">Where in this world?</h1>
      <button
        className="flex flex-row items-center focus:outline-none"
        onClick={handleThemeChange}
      >
        <div className="mr-2">
          {isDarkTheme ? <MoonIcon width="2rem" /> : <SunIcon width="2rem" />}
        </div>
        <p>Dark Mode</p>
      </button>
    </div>
  );
};

export default Header;
