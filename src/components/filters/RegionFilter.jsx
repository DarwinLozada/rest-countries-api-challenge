import React, { useState, useEffect, useContext } from "react";
import { ArrowIcon } from "../iconsComponents/IconComponents";
import { CountriesContext } from "../CountriesContainer";

const RegionFilter = () => {
  const [isToggled, toggleButton] = useState(false);

  const [
    filterRegion,
    setFilterRegion,
    ,
    ,
    allCountries,
    ,
    ,
    ,
    countriesFilteredByRegion,
  ] = useContext(CountriesContext);

  const returnFilteredCountriesByRegion = () => {
    const filteredCountry = allCountries.filter(
      (country) => country.region === filterRegion
    );
    return filteredCountry;
  };

  useEffect(() => {
    if (allCountries) {
      const filteredCountries = returnFilteredCountriesByRegion();
      countriesFilteredByRegion.current = filteredCountries;
    }
  }, [filterRegion]);

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];
  return (
    <>
      <div className="flex flex-col min-w-min rounded w-1/6">
        <button
          className="flex transition duration-300 items-center justify-between shadow-md bg-white p-3 rounded text-sm dark:bg-darkBlue px-6 focus:outline-none focus:ring-2 h-full"
          onBlur={() => toggleButton(false)}
          onClick={() => toggleButton(!isToggled)}
        >
          <p className="font-semibold text-gray-500 dark:text-gray-200">
            {" "}
            {filterRegion ? filterRegion : "Filter by Region"}
          </p>

          <div
            className={`transform transition-transform duration-300 ml-8 ${
              isToggled && "rotate-180"
            }`}
          >
            {/* {isToggled ? <UpArrow width="1rem" /> : <DownArrow width="1rem" />} */}
            <ArrowIcon width="1rem" />
          </div>
        </button>
        <div className="relative">
          {isToggled && (
            <div className="flex flex-col absolute bg-white dark:bg-darkBlue p-4 rounded shadow-md top-2 z-10 w-full gap-1">
              {regions.map((region) => {
                return (
                  <button
                    className="flex transition duration-100 hover:text-blue-300"
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                    onClick={(e) => {
                      setFilterRegion(region);
                      toggleButton(false);
                    }}
                    key={region}
                  >
                    {region}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default RegionFilter;
