import React, { useState, useEffect } from "react";

const TransitionPage = ({ children }) => {
  const [isEntering, setIsEntering] = useState(false);

  const transitionStyles = {
    exited: "opacity-0",
    entered: "opacity-1",
  };

  useEffect(() => {
    console.log(isEntering);
    setIsEntering(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isEntering ? transitionStyles.entered : transitionStyles.exited
      }`}
    >
      {children}
    </div>
  );
};

export default TransitionPage;
