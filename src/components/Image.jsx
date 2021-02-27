import React, { useState } from "react";

const LoadingFallback = ({ width, height }) => {
  return (
    <div
      className={`${width} ${height} bg-gray-300 border-gray-200 animate-pulse`}
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
    <>
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
    </>
  );
};

export default Image;
