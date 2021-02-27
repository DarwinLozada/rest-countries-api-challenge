import React, { useEffect, useContext } from "react";
import RegionFilter from "./RegionFilter";
import InputFilter from "./InputFilter";
import { CountriesContext } from "../CountriesContainer";

const Filters = () => {
  const [
    filterRegion,
    ,
    inputQuery,
    ,
    ,
    ,
    setCountriesToRender,
    countriesFilteredByInput,
    ,
  ] = useContext(CountriesContext);

  useEffect(() => {
    if (filterRegion !== "All") {
      const filteredCountries = countriesFilteredByInput.current.filter(
        (country) => country.region === filterRegion
      );
      setCountriesToRender(filteredCountries);
      return;
    }
    setCountriesToRender(countriesFilteredByInput.current);
  }, [inputQuery, filterRegion]);

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full gap-8">
      <InputFilter />
      <RegionFilter />
    </div>
  );
};

export default Filters;
