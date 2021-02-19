import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Countries from "./Countries";
import { SearchIcon } from "./IconComponents";
import Filters from "./Filters";

const CountriesContainer = () => {
  const allCountries = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [countriesToRender, setCountriesToRender] = useState(null);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (allCountries.current) {
      const filteredCountries = allCountries.current.filter((country) =>
        country.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setCountriesToRender(filteredCountries);
    }
  }, [inputValue]);

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
    <div className="flex flex-col bg-veryLightGrey dark:bg-veryDarkBlueBg h-screen transition duration-500">
      <div className="flex flex-col sm:flex-row justify-between mt-8 mx-6">
        <div
          className="flex flex-row bg-white dark:darkBlue
        
        shadow-md rounded overflow-hidden truncate mb-8"
        >
          <SearchIcon width="2rem" className="ml-8 sm:mx-6" />
          <input
            className="px-8 py-4 focus:outline-none"
            type="text"
            placeholder="Search for a country..."
            onChange={handleInputChange}
            value={inputValue}
          ></input>
        </div>
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
  );
};

export default CountriesContainer;
