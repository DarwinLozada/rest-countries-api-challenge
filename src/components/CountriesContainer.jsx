import React, { useRef, useState, useEffect, createContext } from "react";
import axios from "axios";
import Countries from "./Countries";
import Filters from "./Filters";

export const CountriesContext = createContext();

const CountriesContainer = () => {
  const allCountries = useRef(null);
  const countriesFilteredByInput = useRef(null);
  const countriesFilteredByRegion = useRef(null);
  const [inputQuery, setInputQuery] = useState("");
  const [filterRegion, setFilterRegion] = useState("All");
  const [countriesToRender, setCountriesToRender] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        allCountries.current = response.data;
        setCountriesToRender(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
      <div className="flex flex-col bg-veryLightGrey dark:bg-veryDarkBlueBg min-h-screen px-12 transition duration-500">
        <div className="flex flex-col sm:flex-row justify-between my-12">
          <Filters />
        </div>
        <div>
          {!allCountries.current ? (
            <p>Loading</p>
          ) : (
            <Countries countries={countriesToRender} />
          )}
        </div>
      </div>
    </CountriesContext.Provider>
  );
};

export default CountriesContainer;
