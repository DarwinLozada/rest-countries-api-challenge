import React from "react";
import Header from "../components/Header";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col gap-12 items-center justify-center h-full bg-veryLightGrey dark:bg-veryDarkBlueBg">
        <h2 className="font-bold text-6xl">:(</h2>
        <h3 className="font-bold text-3xl">404 not found page</h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
