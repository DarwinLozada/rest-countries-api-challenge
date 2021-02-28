import React, { useState } from "react";

const LoadingFallback = ({ width, height }) => {
  return (
    <div
      className={`${width ? width : "w-full"} ${
        height ? height : "h-full"
      } bg-gray-300 border-gray-200 animate-pulse`}
    />
  );
};

const Image = ({
  src,
  alt,
  placeholderWidth,
  placeholderHeight,
  additionalUtilities,
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="w-full h-full">
      {isImageLoading && (
        <LoadingFallback width={placeholderWidth} height={placeholderHeight} />
      )}

      <img
        onLoad={() => setIsImageLoading(false)}
        src={src}
        alt={alt}
        className={`w-full h-full"
         ${additionalUtilities}`}
        style={{ display: `${isImageLoading ? "none" : "inline"}` }}
      ></img>
    </div>
  );
};

export default Image;
