import React, { useRef, useState } from "react";
import { MoonIcon, SunIcon } from "./IconComponents";

const Header = () => {
  const [isDarkTheme, toggleTheme] = useState(false);

  // let isDarkTheme = useRef(false);

  const handleThemeChange = () => {
    // isDarkTheme.current = !isDarkTheme.current;
    toggleTheme(!isDarkTheme);
    const globalContainer = document.querySelector(".global-container");
    console.log(globalContainer);
    globalContainer.classList.contains("dark")
      ? globalContainer.classList.remove("dark")
      : globalContainer.classList.add("dark");
  };

  return (
    <div className="flex flex-row py-8 px-4 w-full justify-between shadow-lg bg-white dark:bg-darkBlue items-center transition duration-500">
      <h1 className="font-bold text-md">Where in the world?</h1>
      <button
        className="flex flex-row items-center"
        onClick={handleThemeChange}
      >
        {isDarkTheme ? <MoonIcon width="2rem" /> : <SunIcon width="2rem" />}
        <p>Dark Mode</p>
      </button>
    </div>
  );
};

export default Header;
