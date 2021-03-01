import React, { useState, useEffect, lazy } from "react";
import { PlusIcon } from "./iconsComponents/IconComponents";
import TransitionComponent from "./transitions/TransitionComponent";

const chunkLength = 10;

const sliceArrayBySteps = (arr, step) => {
  let index = 0;
  let sliceArr = [];
  while (index < arr.length) {
    sliceArr.push(arr.slice(index, (index += step)));
    index++;
  }
  return sliceArr;
};

const CardsChunk = lazy(() => import("./CardsChunk"));

const Countries = ({ countries }) => {
  const [slicedCountries, setSlicedCountries] = useState(
    sliceArrayBySteps(countries, chunkLength)
  );

  const [countryChunksToRender, setCountryChunksToRender] = useState(1);

  useEffect(() => {
    setSlicedCountries(sliceArrayBySteps(countries, chunkLength));
    setCountryChunksToRender(1);
  }, [countries]);

  if (countries.length === 0) {
    return (
      <div className="flex items-center justify-center mt-40">
        <h3 className="text-lg">There are no results for your query</h3>
      </div>
    );
  }

  const countriesToRender = slicedCountries.slice(0, countryChunksToRender);

  return (
    <TransitionComponent>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {countriesToRender.map((countryChunk) => {
          return <CardsChunk key={countryChunk[0]} countries={countryChunk} />;
        })}
      </div>
      <div className="flex items-center justify-center my-16">
        {slicedCountries[1] && (
          <button
            className="flex flex-row items-center transition duration-200 focus:outline-none focus:ring-2 py-5 px-3 shadow-lg rounded font-semibold hover:bg-gray-200 dark:bg-darkBlue dark:hover:bg-gray-600"
            onClick={() => setCountryChunksToRender(countryChunksToRender + 1)}
          >
            <p>show more results</p>
            <div className="ml-4  rounded-2xl hover:bg-blue-200">
              <PlusIcon width="1.5rem" />
            </div>
          </button>
        )}
      </div>
    </TransitionComponent>
  );
};

export default Countries;
