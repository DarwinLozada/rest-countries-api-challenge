import React, { useContext, useRef, useEffect } from "react";
import { CountriesContext } from "./CountriesContainer";
import { SearchIcon } from "./IconComponents";

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
    const filteredContacts = allCountries.current.filter((country) =>
      country.name.toLowerCase().includes(inputQuery.toLowerCase())
    );
    return filteredContacts;
  };

  useEffect(() => {
    if (allCountries.current) {
      const filteredCountries = returnFilteredCountriesByinput();
      countriesFilteredByInput.current = filteredCountries;
    }
  }, [inputQuery]);

  return (
    <>
      <div
        className="flex flex-row items-center bg-white dark:darkBlue shadow-md rounded overflow-hidden truncate dark:bg-darkBlue transition duration-300"
        ref={inputRef}
      >
        <div className="ml-4 sm:mx-6 dark:text-white">
          <SearchIcon width="1.4rem" />
        </div>
        <input
          className="px-8 py-4 focus:outline-none dark:bg-darkBlue placeholder-grey dark:placeholder-white"
          type="text"
          placeholder="Search for a country..."
          onChange={handleInputChange}
          onFocus={() => inputRef.current.classList.add("ring-2")}
          onBlur={() => inputRef.current.classList.remove("ring-2")}
        ></input>
      </div>
    </>
  );
};

export default InputFilter;
