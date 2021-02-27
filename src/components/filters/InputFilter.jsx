import React, { useContext, useRef, useEffect } from "react";
import { CountriesContext } from "../CountriesContainer";
import { SearchIcon } from "../iconsComponents/IconComponents";

const InputFilter = () => {
  const [
    ,
    ,
    inputQuery,
    setInputQuery,
    allCountries,
    ,
    ,
    countriesFilteredByInput,
  ] = useContext(CountriesContext);

  let inputRef = useRef();

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputQuery(e.target.value);
  };

  const returnFilteredCountriesByinput = () => {
    const filteredContacts = allCountries.filter((country) =>
      country.name.toLowerCase().includes(inputQuery.toLowerCase())
    );
    return filteredContacts;
  };

  useEffect(() => {
    if (allCountries) {
      const filteredCountries = returnFilteredCountriesByinput();
      countriesFilteredByInput.current = filteredCountries;
    }
  }, [inputQuery]);

  return (
    <div className="relative">
      <label htmlFor="country" className="absolute opacity-0">
        Search for a country
      </label>
      <div
        className="flex flex-row items-center min-w-min md:w-96 bg-white dark:darkBlue shadow-md rounded overflow-hidden truncate dark:bg-darkBlue transition duration-300"
        ref={inputRef}
      >
        <div className="ml-4 sm:ml-8 mr-4 sm:mx-8 dark:text-white">
          <SearchIcon width="1.4rem" />
        </div>
        <input
          className="transition duration-300 py-4 focus:outline-none dark:bg-darkBlue placeholder-grey dark:placeholder-white mr-4 w-full"
          type="text"
          id="country"
          placeholder="Search for a country..."
          onChange={handleInputChange}
          onFocus={() => inputRef.current.classList.add("ring-2")}
          onBlur={() => inputRef.current.classList.remove("ring-2")}
        ></input>
      </div>
    </div>
  );
};

export default InputFilter;
