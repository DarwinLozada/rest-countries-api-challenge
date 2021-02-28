import React, { useRef, useState, useEffect } from "react";

const TransitionPage = ({ children }) => {
  const [isEntering, setIsEntering] = useState(false);

  const transitionStyles = {
    exited: "opacity-0",

    entered: "opacity-1",
  };
  let containerRef = useRef(null);

  useEffect(() => {
    console.log(isEntering);
    setIsEntering(true);
  }, []);

  console.log(isEntering);

  return (
    <div
      className={`transition-all duration-300 ${
        isEntering ? transitionStyles.entered : transitionStyles.exited
      }`}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default TransitionPage;
