import React, { useRef, useState, createContext } from "react";
import LoadingSpinner from "./feedbackComponents/LoadingSpinner";
import Countries from "./Countries";
import Filters from "./filters/Filters";

export const CountriesContext = createContext();

const CountriesContainer = ({ allCountries }) => {
  const countriesFilteredByInput = useRef(null);
  const countriesFilteredByRegion = useRef(null);
  const [inputQuery, setInputQuery] = useState("");
  const [filterRegion, setFilterRegion] = useState("All");
  const [countriesToRender, setCountriesToRender] = useState(null);

  if (allCountries && !countriesToRender) {
    countriesFilteredByInput.current = allCountries;
    setCountriesToRender(allCountries);
  }

  return (
    <CountriesContext.Provider
      value={[
        filterRegion,
        setFilterRegion,
        inputQuery,
        setInputQuery,
        allCountries,
        countriesToRender,
        setCountriesToRender,
        countriesFilteredByInput,
        countriesFilteredByRegion,
      ]}
    >
      <div className="flex flex-col bg-veryLightGrey dark:bg-veryDarkBlueBg dark:text-white transition-colors duration-300 min-h-screen px-12 2xl:px-32">
        <div className="flex flex-col sm:flex-row justify-between my-12">
          <Filters />
        </div>
        <div>
          {!allCountries ? (
            <div className="h-screen">
              <LoadingSpinner size="h-48 w-48" />
            </div>
          ) : (
            <Countries countries={countriesToRender} />
          )}
        </div>
      </div>
    </CountriesContext.Provider>
  );
};

export default CountriesContainer;
