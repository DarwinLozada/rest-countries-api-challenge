import React from "react";

const LoadingSpinner = ({ size }) => {
  return (
    <div className="flex items-center justify-center p-20">
      <div className={`animate-spin rounded-full border-t-4 ${size}`} />
    </div>
  );
};

export default LoadingSpinner;
