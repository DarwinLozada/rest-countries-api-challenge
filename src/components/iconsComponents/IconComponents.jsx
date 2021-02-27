import React from "react";

const SearchIcon = ({ width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        style={{
          width: width,
          color: "grey",
        }}
      >
        <title>Search</title>
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
    </>
  );
};

const MoonIcon = ({ width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        style={{
          width,
        }}
      >
        <title>Moon</title>
        <path
          className="transition duration-300 hover:fill-current"
          d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLineJoin="round"
          strokeWidth="32"
        />
      </svg>
    </>
  );
};

const SunIcon = ({ width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        style={{
          width,
        }}
      >
        <title>Sunny</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
        />
        <circle
          className="transition duration-300 hover:fill-current"
          cx="256"
          cy="256"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    </>
  );
};

const ArrowIcon = ({ width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon hover:fill-current"
        viewBox="0 0 512 512"
        style={{
          width: width,
        }}
      >
        <title>Chevron Down</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M112 184l144 144 144-144"
        />
      </svg>
    </>
  );
};

const PlusIcon = ({ width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        style={{
          width,
        }}
      >
        <title>More</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M256 112v288M400 256H112"
        />
      </svg>
    </>
  );
};

const BackArrowIcon = ({ width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        style={{
          width,
        }}
      >
        <title>Arrow Back</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M244 400L100 256l144-144M120 256h292"
        />
      </svg>
    </>
  );
};

export { SearchIcon, MoonIcon, SunIcon, ArrowIcon, PlusIcon, BackArrowIcon };
