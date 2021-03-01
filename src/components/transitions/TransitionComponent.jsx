import React, { useState, useEffect } from "react";

const TransitionPage = ({ children }) => {
  const [isEntering, setIsEntering] = useState(true);

  const transitionStyles = {
    exited: "opacity-0",
    entered: "opacity-1",
  };

  useEffect(() => {
    console.log(isEntering);
    setIsEntering(false);
  }, []);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isEntering ? transitionStyles.exited : transitionStyles.entered
      }`}
    >
      {children}
    </div>
  );
};

export default TransitionPage;
