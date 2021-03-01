import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { BackArrowIcon } from "../components/iconsComponents/IconComponents";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-col gap-12 transition-colors duration-300 items-center justify-center h-full dark:text-white bg-veryLightGrey dark:bg-veryDarkBlueBg">
        <Link to={"/"}>
          <button className="flex flex-row items-center justify-center px-10 shadow-md py-2 transition duration-300 rounded focus:outline-none focus:ring-2 text-black dark:text-white bg-white hover:bg-gray-200 dark:bg-darkBlue dark:hover:bg-gray-600">
            <div>
              <BackArrowIcon width="1rem" />
            </div>
            <p className="ml-2">Home</p>
          </button>
        </Link>
        <h2 className="font-bold text-6xl">:(</h2>
        <h3 className="font-bold text-3xl">404 not found page</h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
