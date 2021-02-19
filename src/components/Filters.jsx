import React, { useState } from "react";

const Filters = () => {
  const [showSelect, toggleShowSelect] = useState(false);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <>
      <button
        className="flex flex-row shadow-md relative bg-white p-3 rounded"
        onClick={() => toggleShowSelect(!showSelect)}
      >
        Filter by Region
      </button>
      <div className="relative">
        {showSelect && (
          <div className="absolute bg-white p-4 rounded shadow-md top-2 z-10 w-full">
            {regions.map((region) => {
              return <div className="flex">{region}</div>;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
